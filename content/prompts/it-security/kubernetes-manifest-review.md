---
title: "Review a Kubernetes manifest for production readiness"
slug: kubernetes-manifest-review
function: it-security
role: devops
description: "Audit Kubernetes manifests for security context, resource limits, probes, PodSecurity compliance, and HA correctness."
useCase: "Use this prompt before deploying a new workload to a shared cluster, when adopting a chart from a third party, or as part of a periodic sweep of namespace manifests. It catches the issues that don't show up in `kubectl apply` but cause incidents at 3am."
prompt: |
  You are a senior platform engineer reviewing Kubernetes manifests for production. Audit the manifests below against:

  1. **Security context**: runAsNonRoot, readOnlyRootFilesystem, drop ALL capabilities, seccomp profile, allowPrivilegeEscalation
  2. **PodSecurity admission**: which level passes (privileged / baseline / restricted) and what blocks `restricted`
  3. **Resources**: requests and limits set, sane ratios, ephemeral-storage limits, no `cpu: 100` typos
  4. **Probes**: liveness, readiness, startup; correct timeouts; not pointing at the same endpoint
  5. **Availability**: replicas > 1, PodDisruptionBudget, topologySpreadConstraints or anti-affinity, rollingUpdate maxUnavailable
  6. **Networking**: NetworkPolicy presence, service type, sensible port mapping
  7. **Secrets**: no inline secrets, no env-from of unscoped configmaps, projected serviceaccount tokens
  8. **Observability**: Prometheus annotations or ServiceMonitor, structured logging assumed
  9. **Cluster-specific**: image pull policy, imagePullSecrets, nodeSelector / tolerations correctness

  Manifests:
  ```yaml
  {{manifests}}
  ```

  Cluster context:
  - K8s version: {{k8s_version}}
  - PodSecurity profile applied: {{podsecurity}}
  - Service mesh: {{mesh}}
  - Ingress controller: {{ingress}}
  - Threat model: {{threat}}

  Output:
  - **Critical** (block merge)
  - **High**
  - **Medium / nits**
  - **Patched manifest** with all critical and high fixes

  Cite specific PodSecurity restrictions or version-specific behavior where relevant.
variables:
  - "{{manifests}}"
  - "{{k8s_version}}"
  - "{{podsecurity}}"
  - "{{mesh}}"
  - "{{ingress}}"
  - "{{threat}}"
exampleInput: |
  manifests: |
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: orders-api
    spec:
      replicas: 1
      selector:
        matchLabels: { app: orders-api }
      template:
        metadata:
          labels: { app: orders-api }
        spec:
          containers:
          - name: app
            image: orders-api:latest
            ports: [{ containerPort: 8080 }]
            env:
            - name: DB_PASSWORD
              value: "hunter2"
  k8s_version: 1.29
  podsecurity: restricted (enforced at namespace level)
  mesh: Istio 1.21 with strict mTLS
  ingress: nginx-ingress
  threat: Customer-facing API, processes payment events
exampleOutput: |
  ## Critical (block merge)

  - **Inline DB_PASSWORD**: secrets in plain `value:` fields end up in etcd, in `kubectl describe` output, and in any GitOps repo. Move to a Kubernetes Secret referenced via `valueFrom.secretKeyRef`. Better: External Secrets Operator pulling from your secret manager.
  - **No securityContext, will fail PodSecurity `restricted` admission** on K8s 1.29. The pod will be rejected at apply time. Add at the container level: `runAsNonRoot: true`, `runAsUser: 1000`, `allowPrivilegeEscalation: false`, `readOnlyRootFilesystem: true`, `capabilities.drop: [ALL]`, `seccompProfile.type: RuntimeDefault`.
  - **`image: orders-api:latest`**: unpinned tag is non-reproducible and can pull a different image on pod restart. Pin to digest: `orders-api@sha256:...` or a versioned tag enforced by your registry policy.
  - **`replicas: 1`** for a customer-facing payment service: one node drain or rolling update = outage. Minimum 2 replicas plus a PodDisruptionBudget.

  ## High

  - **No probes**: K8s can't tell if the container is alive or ready. With Istio strict mTLS, readiness needs to handle the sidecar startup. Add `startupProbe` with generous failureThreshold, then `readinessProbe` and `livenessProbe`.
  - **No resource requests/limits**: scheduler can't pack the node, and noisy-neighbor risk is high on shared payment workload. Set both based on observed usage; for a cold start use `requests: {cpu: 100m, memory: 256Mi}, limits: {cpu: 1000m, memory: 512Mi}` and tune from data.
  - **No NetworkPolicy**: with strict mTLS you have transport security but no L3/L4 policy. Add a default-deny NetworkPolicy in the namespace and an explicit allow from the ingress namespace and any upstream services.
  - **No topology spread**: 2 replicas can both land on the same node. Add `topologySpreadConstraints` on `kubernetes.io/hostname` with `maxSkew: 1, whenUnsatisfiable: DoNotSchedule`.

  ## Medium / nits

  - No PodMonitor/ServiceMonitor; metrics scraping won't auto-discover.
  - No `revisionHistoryLimit`; defaults to 10 which is fine but worth being explicit.
  - Missing `lifecycle.preStop` for graceful shutdown — Istio sidecar interactions on terminate are easier with a `sleep 5` preStop on the app and a longer terminationGracePeriodSeconds.

  ## Patched manifest

  ```yaml
  apiVersion: v1
  kind: Secret
  metadata:
    name: orders-api-db
  type: Opaque
  stringData:
    password: "REPLACE_VIA_EXTERNAL_SECRETS_OPERATOR"
  ---
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    name: orders-api
    labels: { app: orders-api }
  spec:
    replicas: 3
    revisionHistoryLimit: 5
    strategy:
      type: RollingUpdate
      rollingUpdate: { maxUnavailable: 0, maxSurge: 1 }
    selector:
      matchLabels: { app: orders-api }
    template:
      metadata:
        labels: { app: orders-api }
      spec:
        terminationGracePeriodSeconds: 45
        topologySpreadConstraints:
        - maxSkew: 1
          topologyKey: kubernetes.io/hostname
          whenUnsatisfiable: DoNotSchedule
          labelSelector: { matchLabels: { app: orders-api } }
        securityContext:
          runAsNonRoot: true
          runAsUser: 1000
          fsGroup: 1000
          seccompProfile: { type: RuntimeDefault }
        containers:
        - name: app
          image: registry.example.com/orders-api@sha256:abc...
          imagePullPolicy: IfNotPresent
          ports: [{ containerPort: 8080, name: http }]
          env:
          - name: DB_PASSWORD
            valueFrom:
              secretKeyRef: { name: orders-api-db, key: password }
          resources:
            requests: { cpu: 100m, memory: 256Mi, ephemeral-storage: 100Mi }
            limits:   { cpu: 1000m, memory: 512Mi, ephemeral-storage: 500Mi }
          securityContext:
            allowPrivilegeEscalation: false
            readOnlyRootFilesystem: true
            capabilities: { drop: [ALL] }
          startupProbe:
            httpGet: { path: /health/startup, port: http }
            failureThreshold: 30
            periodSeconds: 2
          readinessProbe:
            httpGet: { path: /health/ready, port: http }
            periodSeconds: 5
          livenessProbe:
            httpGet: { path: /health/live, port: http }
            periodSeconds: 10
            failureThreshold: 3
          lifecycle:
            preStop: { exec: { command: ["/bin/sh", "-c", "sleep 5"] } }
          volumeMounts:
          - { name: tmp, mountPath: /tmp }
        volumes:
        - { name: tmp, emptyDir: {} }
  ---
  apiVersion: policy/v1
  kind: PodDisruptionBudget
  metadata: { name: orders-api }
  spec:
    minAvailable: 2
    selector: { matchLabels: { app: orders-api } }
  ---
  apiVersion: networking.k8s.io/v1
  kind: NetworkPolicy
  metadata: { name: orders-api }
  spec:
    podSelector: { matchLabels: { app: orders-api } }
    policyTypes: [Ingress, Egress]
    ingress:
    - from:
      - namespaceSelector: { matchLabels: { name: ingress-nginx } }
      ports: [{ port: 8080 }]
    egress:
    - to:
      - namespaceSelector: { matchLabels: { name: kube-system } }
      ports: [{ port: 53, protocol: UDP }]
  ```
tips:
  - "Run `kubectl apply --dry-run=server` against a real cluster with the same PodSecurity level — it surfaces admission failures the linter misses."
  - "Pair this with `kubeaudit` or `kubescape` output for a more complete picture, especially around RBAC and ClusterRole bindings."
  - "If you're on a service mesh, factor in sidecar resources — they routinely add 100m CPU and 100Mi memory per pod and break naive capacity plans."
  - "AI assistance is not a replacement for security review by qualified professionals. Have a platform or security engineer sign off on NetworkPolicy and RBAC changes — these are easy to get subtly wrong."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - dockerfile-review
  - terraform-module-review
  - deployment-strategy-doc
tags:
  - kubernetes
  - container-security
  - devops
  - code-review
  - pod-security
---

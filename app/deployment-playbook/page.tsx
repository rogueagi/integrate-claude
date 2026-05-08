import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Claude Deployment Playbook for Regulated Industries",
  description:
    "A reference for rolling out Claude in legal, financial, healthcare, and federal environments. AI usage policies, vendor risk language, DPA clauses, employee training, and audit-ready documentation.",
  alternates: { canonical: "/deployment-playbook" },
});

const tableOfContents = [
  { id: "why-governance", label: "1. Why governance comes first" },
  { id: "readiness", label: "2. Pre-deployment readiness checklist" },
  { id: "aup", label: "3. AI usage policy template" },
  {
    id: "vendor-risk",
    label: "4. Vendor risk assessment for Anthropic and Claude",
  },
  { id: "dpa", label: "5. Data Processing Agreement language pointers" },
  { id: "training", label: "6. Employee training framework" },
  {
    id: "documentation",
    label: "7. Audit-ready documentation mapped to common frameworks",
  },
  { id: "incident", label: "8. Incident response considerations" },
  { id: "pitfalls", label: "9. Common pitfalls" },
  { id: "engage", label: "10. Engagement options" },
];

export default function DeploymentPlaybookPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="py-16 sm:py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1.5 text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-6">
              <span className="size-1.5 rounded-full bg-accent inline-block shrink-0" />
              Reference
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              The Claude Deployment Playbook for Regulated Industries
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-3xl">
              A working reference for rolling out Claude inside organizations
              where data sensitivity, audit posture, and regulator scrutiny are
              real constraints. It is built for legal, financial services,
              healthcare, and federal-adjacent teams that need governance to
              keep pace with adoption. The contents are drawn from real
              engagements we run for clients in those sectors, distilled into
              checklists and policy language an operator can use today.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contents"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "gap-2 px-8 h-12 text-base bg-accent text-accent-foreground hover:bg-accent/90 border-0",
                )}
              >
                Start reading
                <span aria-hidden="true">&darr;</span>
              </a>
              <Link
                href="/#book"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "gap-2 px-8 h-12 text-base",
                )}
              >
                Talk to us about deployment
              </Link>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="pb-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="rounded-md border border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground italic">
              Reference document. Drawn from work we&rsquo;ve done with
              regulated and brand-sensitive organizations. Not legal,
              regulatory, or compliance advice. Have qualified counsel review
              any policy before publishing it internally.
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section id="contents" className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-6 sm:mb-8">
              What&rsquo;s inside
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-muted-foreground leading-relaxed">
              {tableOfContents.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-accent transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 1: Why governance comes first */}
        <section id="why-governance" className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-6 sm:mb-8">
              Why governance comes first
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              In a regulated environment, the question is not whether your
              people will use AI. They already do. The question is whether the
              organization can describe how, where, by whom, and under what
              controls. If you cannot answer those four questions for a
              regulator, an auditor, or a client security questionnaire, you are
              exposed regardless of how good the underlying model is.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Governance comes first because the failure modes are asymmetric. A
              successful Claude deployment quietly compounds over months as
              workflows get faster and outputs get more consistent. A single
              governance failure, such as confidential client data pasted into a
              consumer chat product, can trigger breach notification,
              contractual penalties, regulator inquiries, and reputational
              damage all at once. Most leadership teams underweight the second
              risk because it has not yet happened to them.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Regulator expectations are also catching up faster than most
              compliance teams realize. The NIST AI Risk Management Framework
              landed in 2023, ISO 42001 followed in late 2023, and SOC 2
              auditors increasingly ask about AI usage during fieldwork. Your
              clients are building those expectations into their vendor
              questionnaires whether or not your sector has explicit rules yet.
              Building the governance layer now is cheaper than retrofitting it
              after a customer demands evidence.
            </p>
          </div>
        </section>

        {/* Section 2: Pre-deployment readiness checklist */}
        <section id="readiness" className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-6 sm:mb-8">
              Pre-deployment readiness checklist
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Before you let Claude touch a regulated workflow, walk this list.
              Each item is a yes or no with a named owner. If you cannot say yes
              today, that is the work to do before broader rollout.
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-base text-muted-foreground leading-relaxed">
              <li>
                <strong className="text-foreground">
                  Data classification is current.
                </strong>{" "}
                You have a written taxonomy of public, internal, confidential,
                and restricted data, and the people who will use Claude know
                which category their inputs fall into.
              </li>
              <li>
                <strong className="text-foreground">
                  A sensitive-data policy is written and signed off.
                </strong>{" "}
                It states explicitly which classifications can and cannot be
                sent to Claude, and which deployment surface (web product, API,
                Bedrock, Vertex) is approved for which class.
              </li>
              <li>
                <strong className="text-foreground">
                  A model and surface are selected.
                </strong>{" "}
                Claude via the Anthropic API, Claude on AWS Bedrock, and Claude
                on Google Vertex have meaningfully different data handling and
                contractual postures. Pick deliberately rather than letting
                individual teams pick for you.
              </li>
              <li>
                <strong className="text-foreground">
                  API key and credential management is centralized.
                </strong>{" "}
                Keys live in a secret manager, not in shared spreadsheets or
                personal env files. Rotation cadence and revocation procedure
                are documented.
              </li>
              <li>
                <strong className="text-foreground">
                  Logging and audit trail are configured.
                </strong>{" "}
                You can answer who used Claude, when, against which workflow,
                and at what cost. For API deployments, request and response
                logging is in place with retention aligned to your record
                retention policy.
              </li>
              <li>
                <strong className="text-foreground">
                  Employee training is scoped, not assumed.
                </strong>{" "}
                You have a defined training path for every role that will touch
                Claude, and completion is tracked.
              </li>
              <li>
                <strong className="text-foreground">
                  Incident response plan references AI scenarios.
                </strong>{" "}
                Your existing IR runbook has been updated to include AI-specific
                failure modes (data exposure to a model, hallucinated output
                relied on downstream, vendor breach).
              </li>
              <li>
                <strong className="text-foreground">
                  Vendor due diligence is complete.
                </strong>{" "}
                You have reviewed Anthropic&rsquo;s SOC 2 report, subprocessors
                list, security and privacy documentation, and relevant
                certifications, and the review is filed where audit can find it.
              </li>
              <li>
                <strong className="text-foreground">
                  A Data Processing Agreement is signed.
                </strong>{" "}
                If you process personal data covered by GDPR, HIPAA, or similar
                regimes, the DPA is executed before any production use.
              </li>
              <li>
                <strong className="text-foreground">
                  The Acceptable Use Policy has been communicated.
                </strong>{" "}
                Not just published. Communicated, acknowledged, and referenced
                in onboarding.
              </li>
              <li>
                <strong className="text-foreground">
                  An executive sponsor owns the program.
                </strong>{" "}
                A named leader (not a committee) is accountable for AI
                deployment outcomes, training completion, and policy exceptions.
              </li>
              <li>
                <strong className="text-foreground">
                  A review cadence is set.
                </strong>{" "}
                The policy, vendor posture, and usage patterns are reviewed at
                least annually and after any material change in the
                vendor&rsquo;s product or terms.
              </li>
            </ol>
          </div>
        </section>

        {/* Section 3: AI usage policy template */}
        <section id="aup" className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-6 sm:mb-8">
              AI usage policy template
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              The sections below are scaffolding for an AI Acceptable Use
              Policy. Adapt the language to your environment and have counsel
              review before publication. The labels marked <em>[Template]</em>{" "}
              are starting points, not finished policy.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-8">
              Scope
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              <em>[Template]</em> This policy applies to all employees,
              contractors, and third parties who use AI tools in the course of
              work performed for or on behalf of [Company]. It covers all
              generative AI products, including Claude, regardless of whether
              they are accessed through a paid corporate account, a free
              consumer account, or an embedded feature inside another product.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-8">
              Approved use cases
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              <em>[Template]</em> Claude may be used for drafting, summarizing,
              analyzing, and reformatting content within the workflows listed in
              the approved-uses register maintained by [owner]. New use cases
              must be reviewed and added to the register before production use.
              Personal experimentation outside approved use cases is allowed
              only with non-confidential, non-regulated inputs.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-8">
              Prohibited inputs
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              <em>[Template]</em> The following categories must not be entered
              into Claude or any other AI tool unless explicitly approved under
              a workflow with documented controls:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-muted-foreground leading-relaxed mb-4">
              <li>Protected health information (PHI) under HIPAA</li>
              <li>
                Personally identifiable information (PII) such as SSNs,
                government IDs, dates of birth, financial account numbers
              </li>
              <li>Payment card data (PCI scope)</li>
              <li>
                Attorney-client privileged communications, unless the workflow
                has been cleared by the General Counsel
              </li>
              <li>
                Trade secrets and proprietary source code outside designated
                approved environments
              </li>
              <li>
                Information subject to NDA with a third party, unless the NDA
                permits AI processing
              </li>
              <li>
                Material non-public information (MNPI) for public companies
              </li>
              <li>Export-controlled technical data (ITAR, EAR)</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-8">
              Output review requirements
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              <em>[Template]</em> All Claude output used in a client
              deliverable, regulatory filing, financial statement, clinical
              record, or external communication must be reviewed by a qualified
              human before release. The reviewer is accountable for the output
              as if they had produced it directly. Claude is a drafting partner,
              not a system of record.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-8">
              Account provisioning
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              <em>[Template]</em> Claude access is provisioned only through the
              corporate account managed by [IT or Security]. Use of personal
              accounts for work purposes is prohibited. Access is tied to SSO
              and is revoked through the standard offboarding process.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-8">
              Training requirements
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              <em>[Template]</em> Before being granted access, every user must
              complete the AI fundamentals training and acknowledge this policy.
              Refresher training is required annually and after any material
              policy update.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-8">
              Incident reporting
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              <em>[Template]</em> Suspected violations of this policy, including
              accidental disclosure of prohibited inputs, must be reported to
              [Security or Privacy contact] within 24 hours of discovery.
              Reporting in good faith does not, by itself, result in
              disciplinary action.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-8">
              Policy review cycle
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              <em>[Template]</em> This policy is reviewed at least annually by
              the policy owner, and out of cycle when the vendor changes its
              terms, when a new model or surface is approved, or following any
              reported AI-related incident.
            </p>
          </div>
        </section>

        {/* Section 4: Vendor risk assessment */}
        <section id="vendor-risk" className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-6 sm:mb-8">
              Vendor risk assessment for Anthropic and Claude
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Whether you procure Claude directly from Anthropic or through a
              cloud reseller (AWS Bedrock, Google Vertex), your security team
              still needs a defensible vendor file. The questions below are the
              ones most regulated buyers ask, with notes on what to look for in
              the answers.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-8">
              Data residency and processing locations
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Confirm where requests are processed and whether the deployment
              surface lets you constrain processing to a specific region.
              Cloud-reseller deployments often give finer-grained residency
              control than the direct API. Match the answer to the residency
              promises you make to your own customers.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-8">
              Subprocessors
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Anthropic publishes a subprocessor list. Review it, file it, and
              confirm your DPA includes notice of changes. If your own contracts
              forbid certain subprocessors, this is where you catch the
              conflict.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-8">
              Encryption in transit and at rest
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Confirm TLS 1.2 or higher in transit and AES-256 (or equivalent)
              at rest. Capture this in the vendor record so security
              questionnaires can be answered without re-asking.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-8">
              Certifications and attestations
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Anthropic maintains SOC 2 Type II and ISO 27001. Request the
              current SOC 2 report under NDA and review the controls and any
              exceptions. If your sector requires HIPAA, confirm a Business
              Associate Agreement is available on the surface you intend to use.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-8">
              Incident notification SLAs
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Check the contractual notification window for security incidents
              and align it with what your downstream customer contracts require.
              If your customers expect 24-hour notice and your vendor commits to
              72, you have a gap to manage.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-8">
              Data retention and deletion
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              For API usage, confirm the retention window for inputs and outputs
              and the path to request deletion. Document the retention setting
              you choose so audit can verify it.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-8">
              Model training on customer data
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              <strong className="text-foreground">
                Anthropic does not train its models on data submitted by API
                customers.
              </strong>{" "}
              That is a meaningful contractual posture and is the answer most
              regulated buyers are looking for. Capture the relevant clause from
              the commercial terms in your vendor file so you can cite it in
              security reviews. Consumer products and free-tier surfaces may
              have different defaults, which is one reason corporate use should
              run on the API or an enterprise plan rather than personal
              accounts.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-8">
              Privacy policy and DPA availability
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Anthropic publishes both a privacy policy and a Data Processing
              Agreement. Pull the current versions, file them with your vendor
              record, and execute the DPA before any regulated workload moves to
              production.
            </p>
          </div>
        </section>

        {/* Section 5: DPA */}
        <section id="dpa" className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-6 sm:mb-8">
              Data Processing Agreement language pointers
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              The DPA is the single most important contract artifact for
              regulated AI deployment. The clauses below are the ones to read
              closely and, where the vendor allows, negotiate. Anthropic
              publishes a standard DPA on its trust portal. Sign it before any
              regulated workload reaches production and keep the executed copy
              with your vendor record.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-muted-foreground leading-relaxed">
              <li>
                <strong className="text-foreground">
                  Standard Contractual Clauses (SCCs).
                </strong>{" "}
                For international transfers out of the EEA or UK, confirm the
                current SCCs are incorporated and that the vendor accepts module
                two (controller to processor) where that fits your use.
              </li>
              <li>
                <strong className="text-foreground">
                  Subprocessor list and notification.
                </strong>{" "}
                The DPA should reference a public subprocessor list and commit
                to advance notice of additions, with an objection window.
              </li>
              <li>
                <strong className="text-foreground">
                  Data minimization commitment.
                </strong>{" "}
                The vendor processes personal data only for the purposes you
                specify and within the scope of the service.
              </li>
              <li>
                <strong className="text-foreground">Audit rights.</strong> Most
                enterprise vendors satisfy audit rights through SOC 2 and ISO
                reports rather than physical site audits. Confirm the language
                allows you to satisfy your own audit obligations through those
                reports.
              </li>
              <li>
                <strong className="text-foreground">
                  Notification timelines.
                </strong>{" "}
                A clear, hour-based commitment for breach notification, not
                vague &ldquo;promptly.&rdquo;
              </li>
              <li>
                <strong className="text-foreground">
                  Right to terminate for breach.
                </strong>{" "}
                A meaningful termination right if the vendor materially breaches
                data protection obligations.
              </li>
              <li>
                <strong className="text-foreground">
                  Return and deletion.
                </strong>{" "}
                On termination, customer data is returned or deleted within a
                defined window, with written confirmation on request.
              </li>
              <li>
                <strong className="text-foreground">
                  Confirmation of no training on customer data.
                </strong>{" "}
                Where applicable to your deployment surface, confirm the
                contractual language that customer inputs and outputs are not
                used to train models.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 6: Employee training */}
        <section id="training" className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-6 sm:mb-8">
              Employee training framework
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              The most common cause of an AI incident is not the model. It is a
              well-meaning employee who has never been told what is and is not
              allowed. Training closes that gap and creates a record you can
              show an auditor. Six components, in order of how often they get
              skipped.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-8">
              AI fluency baseline
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              A short module on what large language models actually are, what
              they do well, where they fail, and what the safe defaults are.
              Most employees have never had this explained without marketing
              gloss. Thirty minutes here saves you hours of confusion later.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-8">
              Acceptable use
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              A walkthrough of the AUP with concrete examples drawn from your
              own work, not a generic deck. Employees should leave able to
              answer: which surface do I use, which data is off limits, who do I
              ask if I am not sure.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-8">
              Prompt hygiene
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Practical guidance on redaction and substitution. How to use
              placeholders for client names, how to strip identifiers from
              records, and how to recognize when a prompt is about to leak
              something it should not.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-8">
              Output review and verification
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              How to read Claude output critically. Citation checking for legal
              and research workflows. Number checking for finance. Clinical
              sanity checks where applicable. The reviewer signs off as if they
              had drafted the output themselves.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-8">
              Incident reporting
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Who to call, in what window, with what information. The reporting
              path should be as easy to find as the IT helpdesk. Most missed
              reports happen because the employee did not know where to go.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 mt-8">
              Refresher cadence
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              At minimum annual, plus a short update whenever a new model,
              surface, or significant policy change ships. Track completion the
              same way you track other compliance training.
            </p>
          </div>
        </section>

        {/* Section 7: Audit-ready documentation */}
        <section id="documentation" className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-6 sm:mb-8">
              Audit-ready documentation mapped to common frameworks
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Three frameworks dominate AI governance conversations right now:
              the NIST AI Risk Management Framework (AI RMF, released January
              2023), SOC 2 with the AICPA Trust Services Criteria, and ISO/IEC
              42001 (the AI management system standard, released December 2023).
              The artifacts in this playbook map cleanly to all three. The table
              below shows the cross-reference.
            </p>

            <div className="overflow-x-auto">
              <table className="border-collapse w-full text-sm mb-4">
                <thead>
                  <tr className="text-left">
                    <th className="border border-border bg-muted/60 px-3 py-2 font-semibold text-foreground">
                      Playbook artifact
                    </th>
                    <th className="border border-border bg-muted/60 px-3 py-2 font-semibold text-foreground">
                      NIST AI RMF
                    </th>
                    <th className="border border-border bg-muted/60 px-3 py-2 font-semibold text-foreground">
                      SOC 2 (TSC)
                    </th>
                    <th className="border border-border bg-muted/60 px-3 py-2 font-semibold text-foreground">
                      ISO/IEC 42001
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="even:bg-muted/30">
                    <td className="border border-border px-3 py-2">
                      AI Acceptable Use Policy
                    </td>
                    <td className="border border-border px-3 py-2">Govern</td>
                    <td className="border border-border px-3 py-2">
                      Security, Confidentiality
                    </td>
                    <td className="border border-border px-3 py-2">
                      Clause 5 (Leadership), Annex A policies
                    </td>
                  </tr>
                  <tr className="even:bg-muted/30">
                    <td className="border border-border px-3 py-2">
                      Data classification and handling
                    </td>
                    <td className="border border-border px-3 py-2">Map</td>
                    <td className="border border-border px-3 py-2">
                      Confidentiality, Privacy
                    </td>
                    <td className="border border-border px-3 py-2">
                      Annex A data management
                    </td>
                  </tr>
                  <tr className="even:bg-muted/30">
                    <td className="border border-border px-3 py-2">
                      Vendor risk assessment file
                    </td>
                    <td className="border border-border px-3 py-2">
                      Govern, Manage
                    </td>
                    <td className="border border-border px-3 py-2">
                      Vendor management (CC9)
                    </td>
                    <td className="border border-border px-3 py-2">
                      Clause 8 (Operation), supplier controls
                    </td>
                  </tr>
                  <tr className="even:bg-muted/30">
                    <td className="border border-border px-3 py-2">
                      Executed DPA and SCCs
                    </td>
                    <td className="border border-border px-3 py-2">Govern</td>
                    <td className="border border-border px-3 py-2">Privacy</td>
                    <td className="border border-border px-3 py-2">
                      Annex A data protection
                    </td>
                  </tr>
                  <tr className="even:bg-muted/30">
                    <td className="border border-border px-3 py-2">
                      Logging and monitoring config
                    </td>
                    <td className="border border-border px-3 py-2">
                      Measure, Manage
                    </td>
                    <td className="border border-border px-3 py-2">
                      Security (CC7 monitoring)
                    </td>
                    <td className="border border-border px-3 py-2">
                      Clause 9 (Performance evaluation)
                    </td>
                  </tr>
                  <tr className="even:bg-muted/30">
                    <td className="border border-border px-3 py-2">
                      Incident response runbook
                    </td>
                    <td className="border border-border px-3 py-2">Manage</td>
                    <td className="border border-border px-3 py-2">
                      Security (CC7.4 incident handling)
                    </td>
                    <td className="border border-border px-3 py-2">
                      Clause 10 (Improvement)
                    </td>
                  </tr>
                  <tr className="even:bg-muted/30">
                    <td className="border border-border px-3 py-2">
                      Training records and acknowledgments
                    </td>
                    <td className="border border-border px-3 py-2">Govern</td>
                    <td className="border border-border px-3 py-2">
                      Common Criteria (CC1.4)
                    </td>
                    <td className="border border-border px-3 py-2">
                      Clause 7 (Support, competence)
                    </td>
                  </tr>
                  <tr className="even:bg-muted/30">
                    <td className="border border-border px-3 py-2">
                      Approved use-case register
                    </td>
                    <td className="border border-border px-3 py-2">
                      Map, Manage
                    </td>
                    <td className="border border-border px-3 py-2">
                      Processing integrity
                    </td>
                    <td className="border border-border px-3 py-2">
                      Annex A AI system lifecycle
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              The point of the table is not perfect mapping. Frameworks overlap
              and your auditor will want to see the artifact, not the
              cross-reference. The point is that one well-built governance file
              answers questions across all three frameworks, which is what makes
              this work pay for itself the second time you have to respond to a
              security questionnaire.
            </p>
          </div>
        </section>

        {/* Section 8: Incident response */}
        <section id="incident" className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-6 sm:mb-8">
              Incident response considerations
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Your existing incident response program covers most of what you
              need. AI introduces a few specific scenarios that the runbook
              should call out by name. Each one needs a known first-responder, a
              preserved evidence trail, and a clear decision on whether external
              notification is required.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-base text-muted-foreground leading-relaxed">
              <li>
                <strong className="text-foreground">
                  Sensitive data leaked to a model.
                </strong>{" "}
                Someone pasted prohibited inputs into Claude. Capture what was
                shared, when, on which surface, and under which account.
                Determine whether the data is recoverable or has been retained
                by the vendor, request deletion under your contract, and assess
                notification obligations under HIPAA, state breach laws, or
                contractual terms with affected clients.
              </li>
              <li>
                <strong className="text-foreground">
                  Unsanctioned model use detected.
                </strong>{" "}
                Logs or expense reports surface use of a non-approved AI tool,
                often a personal account. Treat this like any other shadow-IT
                finding: contain, document, retrain, and feed it back into the
                AUP examples library.
              </li>
              <li>
                <strong className="text-foreground">Vendor breach.</strong>{" "}
                Anthropic, AWS, or Google notifies you of a security incident
                affecting their systems. Pull the contractual notification
                clauses, document the timeline, and run the same downstream
                notification analysis you would for any other processor breach.
              </li>
              <li>
                <strong className="text-foreground">
                  Model output causes downstream harm.
                </strong>{" "}
                Hallucinated citations in a brief, an incorrect figure in a
                financial report, or a recommendation acted on without review.
                The technical issue is the model, but the failure is in the
                review step. Capture the workflow path, strengthen the review
                control, and feed the example into training.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 9: Common pitfalls */}
        <section id="pitfalls" className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-6 sm:mb-8">
              Common pitfalls
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              These are the patterns we see most often when we walk into a
              regulated environment that has been using Claude informally. None
              are exotic. All are avoidable.
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-base text-muted-foreground leading-relaxed">
              <li>
                <strong className="text-foreground">
                  Letting individual employees buy seats without IT or security
                  review.
                </strong>{" "}
                Personal Pro accounts on work laptops creates a pile of shadow
                data flows that nobody can audit. Centralize procurement before
                the bill grows.
              </li>
              <li>
                <strong className="text-foreground">
                  Pasting sensitive data without redaction.
                </strong>{" "}
                Almost always done by helpful, senior people who are trying to
                move fast. Training and prompt-hygiene tooling fix this far
                better than memos.
              </li>
              <li>
                <strong className="text-foreground">
                  Skipping vendor risk review entirely.
                </strong>{" "}
                The argument is usually &ldquo;it&rsquo;s just a tool.&rdquo;
                The first time a customer security questionnaire asks for your
                AI vendor file, that argument disappears.
              </li>
              <li>
                <strong className="text-foreground">
                  No incident response runbook for AI scenarios.
                </strong>{" "}
                When an exposure happens, the team improvises. Improvisation
                during an incident is how 24-hour notification windows get
                missed.
              </li>
              <li>
                <strong className="text-foreground">
                  Building shadow tooling around the model.
                </strong>{" "}
                Custom scripts and homegrown integrations that touch production
                data, written by enthusiastic engineers, deployed outside your
                normal change-management process. Bring these into the SDLC or
                shut them down.
              </li>
              <li>
                <strong className="text-foreground">
                  Treating governance as a one-time project.
                </strong>{" "}
                Models change, surfaces change, terms change, and your workflows
                change. A policy written in 2024 and never reviewed will not
                survive a 2026 audit.
              </li>
            </ol>
          </div>
        </section>

        {/* Section 10: Engagement options */}
        <section id="engage" className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-6 sm:mb-8">
              Engagement options
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-8">
              If you want help implementing any of this, two of our services are
              designed exactly for this work. Both are fixed-fee, scoped at
              kickoff, with a documented handoff at the end.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Link
                href="/services/ai-security-governance"
                className="group flex flex-col gap-3 sm:gap-4 rounded-2xl border border-border bg-muted/30 p-6 sm:p-8 transition-all hover:border-accent/40 hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  Service
                </span>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  AI Security &amp; Governance
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed flex-1">
                  We write your AI usage policy, build the vendor risk file,
                  configure logging and access, and deliver the audit-ready
                  documentation set referenced in this playbook.
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:translate-x-0.5 transition-transform mt-auto">
                  See the engagement
                  <ArrowRight className="size-4" />
                </span>
              </Link>

              <Link
                href="/services/ai-readiness-audit"
                className="group flex flex-col gap-3 sm:gap-4 rounded-2xl border border-border bg-muted/30 p-6 sm:p-8 transition-all hover:border-accent/40 hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  Service
                </span>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  AI Readiness Audit
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed flex-1">
                  A two-week diagnostic that identifies the highest-leverage
                  Claude use cases for your organization and gives you a
                  prioritized roadmap before you commit to a larger build.
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:translate-x-0.5 transition-transform mt-auto">
                  See the engagement
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 sm:py-20 md:py-32 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4 sm:mb-5">
              Want this implemented in your environment?
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto mb-8">
              Book a 30-minute discovery call. We&rsquo;ll walk through where
              you are, what regulators and customers will ask for, and which
              parts of this playbook are worth implementing first. You&rsquo;ll
              leave with a clear next step, whether or not we end up working
              together.
            </p>
            <Link
              href="/#book"
              className={cn(
                buttonVariants({ size: "lg" }),
                "gap-2 px-8 h-12 text-base bg-accent text-accent-foreground hover:bg-accent/90 border-0",
              )}
            >
              Book a 30-min discovery call
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

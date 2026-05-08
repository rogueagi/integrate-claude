"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const CAL_LINK = "integrateclaude/discovery-call-integrate-claude";
const NAMESPACE = "discovery-call";

export function BookingEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: NAMESPACE });
      cal("ui", {
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#C66E48",
          },
          dark: {
            "cal-brand": "#C66E48",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="rounded-2xl bg-background shadow-xl overflow-hidden">
      <Cal
        namespace={NAMESPACE}
        calLink={CAL_LINK}
        style={{
          width: "100%",
          height: "760px",
          minHeight: "760px",
        }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

// Lazy-initialise so the route still type-checks at build time even
// when RESEND_API_KEY isn't set (e.g. preview deploys without secrets).
function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "Integrate Claude <onboarding@resend.dev>";
const REPLY_TO = process.env.RESEND_REPLY_TO ?? "hello@integrateclaude.com";
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

const SITE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://integrate-claude.vercel.app";
const PLAYBOOK_URL = `${SITE_URL}/deployment-playbook`;

interface RequestBody {
  email?: string;
  firstName?: string;
  company?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: RequestBody;
  try {
    body = (await request.json()) as RequestBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }

  const email = body.email?.trim().toLowerCase();
  const firstName = body.firstName?.trim() || undefined;
  const company = body.company?.trim() || undefined;

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const resend = getResend();
  if (!resend) {
    // Service not yet configured — capture the request server-side so
    // we don't lose leads, but tell the client honestly.
    console.error(
      "[playbook-signup] RESEND_API_KEY is not set; cannot send email.",
      { email, firstName, company },
    );
    return NextResponse.json(
      {
        error:
          "Email delivery is not yet configured. Please email hello@integrateclaude.com and we'll send it directly.",
      },
      { status: 503 },
    );
  }

  // 1. Add contact to the audience (best-effort; don't fail the whole
  //    request if audience isn't configured or the add fails).
  if (AUDIENCE_ID) {
    try {
      await resend.contacts.create({
        audienceId: AUDIENCE_ID,
        email,
        firstName,
        unsubscribed: false,
      });
    } catch (err) {
      console.error("[playbook-signup] audience add failed", err);
    }
  }

  // 2. Send the playbook email.
  const greeting = firstName ? `Hi ${firstName},` : "Hi,";

  const html = `
    <!DOCTYPE html>
    <html>
      <body style="font-family: Georgia, serif; color: #1F1D1A; max-width: 560px; margin: 0 auto; padding: 32px; line-height: 1.6;">
        <p style="margin: 0 0 16px;">${greeting}</p>
        <p style="margin: 0 0 16px;">
          Thanks for asking for the Claude Deployment Playbook for Regulated Industries. Here's the link:
        </p>
        <p style="margin: 0 0 24px;">
          <a
            href="${PLAYBOOK_URL}"
            style="display: inline-block; background-color: #C66E48; color: #FAFAF7; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-family: system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif;"
          >
            Read the playbook
          </a>
        </p>
        <p style="margin: 0 0 16px;">
          It covers AI governance, vendor risk for Anthropic, DPA language, employee training, and an audit-ready documentation map for NIST AI RMF, SOC 2, and ISO 42001.
        </p>
        <p style="margin: 0 0 16px;">
          You can read it on the page or use your browser's <em>Save as PDF</em> to keep a portable copy.
        </p>
        <p style="margin: 0 0 16px;">
          If you have a specific deployment you're working on, hit reply. We respond to every message.
        </p>
        <p style="margin: 0 0 4px;">Ben Frost</p>
        <p style="margin: 0; color: #6E665B; font-size: 14px;">Founder, Integrate Claude</p>
        <hr style="border: none; border-top: 1px solid #E5E0D5; margin: 32px 0 16px;" />
        <p style="margin: 0; color: #6E665B; font-size: 12px;">
          Integrate Claude is an independent consultancy. Not affiliated with, endorsed by, or sponsored by Anthropic, PBC. &ldquo;Claude&rdquo; is a trademark of Anthropic, PBC.
        </p>
      </body>
    </html>
  `;

  const text = [
    greeting,
    "",
    "Thanks for asking for the Claude Deployment Playbook for Regulated Industries. Here's the link:",
    "",
    PLAYBOOK_URL,
    "",
    "It covers AI governance, vendor risk for Anthropic, DPA language, employee training, and an audit-ready documentation map for NIST AI RMF, SOC 2, and ISO 42001.",
    "",
    "You can read it on the page or use your browser's Save as PDF to keep a portable copy.",
    "",
    "If you have a specific deployment you're working on, hit reply. We respond to every message.",
    "",
    "Ben Frost",
    "Founder, Integrate Claude",
    "",
    "---",
    'Integrate Claude is an independent consultancy. Not affiliated with, endorsed by, or sponsored by Anthropic, PBC. "Claude" is a trademark of Anthropic, PBC.',
  ].join("\n");

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      replyTo: REPLY_TO,
      subject: "Your Claude Deployment Playbook",
      html,
      text,
    });
  } catch (err) {
    console.error("[playbook-signup] email send failed", err);
    return NextResponse.json(
      {
        error:
          "We couldn't send the email right now. Please try again or email hello@integrateclaude.com directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}

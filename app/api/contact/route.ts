import { NextResponse } from "next/server";
import { Resend } from "resend";

// Contact form -> email to Tim. Runs as a serverless function on Vercel.
export const runtime = "nodejs";

const TO_EMAIL = "torourke358@hotmail.com";
// Before smartaiforaccountants.com is verified in Resend, "onboarding@resend.dev"
// can send to the address the Resend account was created with (Tim's Hotmail).
// After the domain is verified, set CONTACT_FROM_EMAIL to e.g.
// "Smart AI <hello@smartaiforaccountants.com>".
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Smart AI Website <onboarding@resend.dev>";

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = str(body.name);
  const email = str(body.email);
  const phone = str(body.phone);
  const contactMethod = str(body.contactMethod);
  const message = str(body.message);
  const honeypot = str(body.company); // hidden field; humans leave it blank

  // Silently accept bot submissions without sending.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please add your name, email, and a note about what you'd like to discuss." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "That email address doesn't look right." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — cannot send contact email.");
    return NextResponse.json(
      { error: "The form isn't fully configured yet. Please email torourke358@hotmail.com directly." },
      { status: 503 },
    );
  }

  const text = [
    "New contact request from the Smart AI Automations site.",
    "",
    `Name:              ${name}`,
    `Email:             ${email}`,
    `Phone:             ${phone || "—"}`,
    `Best way to reach: ${contactMethod || "—"}`,
    "",
    "What they'd like to talk about:",
    message,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New audit request from ${name}`,
      text,
    });
    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        { error: "Something went wrong sending your message. Please email torourke358@hotmail.com directly." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Unexpected error sending contact email:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please email torourke358@hotmail.com directly." },
      { status: 502 },
    );
  }
}

"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "mt-1 w-full rounded-md border border-navy/20 bg-white px-3 py-2 text-navy shadow-sm outline-none transition-colors placeholder:text-navy/40 focus:border-accent focus:ring-2 focus:ring-accent/40";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          contactMethod: fd.get("contactMethod"),
          message: fd.get("message"),
          company: fd.get("company"), // honeypot
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-navy/10 bg-white p-8 text-center shadow-sm">
        <p className="text-xl font-bold text-navy">Thanks — got it.</p>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-navy/70">
          Your message is on its way to Tim. You&rsquo;ll get a reply within one
          business day to set up a time to talk.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8"
    >
      {/* Honeypot: hidden from humans, catches bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-navy">
              Your name <span className="text-accent-dark">*</span>
            </label>
            <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-navy">
              Email <span className="text-accent-dark">*</span>
            </label>
            <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-navy">
              Phone <span className="font-normal text-navy/40">(optional)</span>
            </label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="contactMethod" className="block text-sm font-semibold text-navy">
              Best way to reach you
            </label>
            <select id="contactMethod" name="contactMethod" defaultValue="Email" className={fieldClass}>
              <option>Email</option>
              <option>Phone call</option>
              <option>Text message</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-navy">
            What would you like to talk about? <span className="text-accent-dark">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="A couple of sentences about the process, subscription, or problem you'd like to look at."
            className={`${fieldClass} resize-y`}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-md bg-accent px-6 py-3 text-base font-semibold text-navy transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send my request"}
      </button>

      {status === "error" && (
        <p className="mt-4 text-sm font-medium text-red-600">{errorMsg}</p>
      )}

      <p className="mt-4 text-xs text-navy/50">
        Goes straight to Tim&rsquo;s inbox — no scheduling, no spam.
      </p>
    </form>
  );
}

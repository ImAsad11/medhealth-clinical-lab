"use client";

import { useState } from "react";
import { LOCATIONS, SITE } from "@/lib/site-data";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const test = String(form.get("test") || "").trim();
    const locationSlug = String(form.get("location") || "");
    const collection = String(form.get("collection") || "");
    const message = String(form.get("message") || "").trim();

    const locationLabel =
      LOCATIONS.find((loc) => loc.slug === locationSlug)?.city ?? locationSlug;

    const lines = [
      `Hi Med Health Clinical Lab, I'd like to book an appointment.`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Test(s) needed: ${test || "Not specified"}`,
      `Preferred location: ${locationLabel}`,
      `Collection type: ${collection}`,
    ];
    if (message) lines.push(`Message: ${message}`);

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${SITE.whatsappNumber}&text=${encodeURIComponent(
      lines.join("\n")
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="border border-line bg-panel p-8">
        <p className="eyebrow text-teal-500">WhatsApp opened</p>
        <h3 className="mt-3 font-display text-xl font-semibold text-ink">
          We&rsquo;ve pre-filled your details in WhatsApp
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/60">
          Just hit send on WhatsApp to confirm your request. If it didn&rsquo;t open
          automatically, call or WhatsApp us directly at {SITE.phone}.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-6"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-medium text-ink/60">
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            placeholder="Your name"
            className="mt-2 w-full border border-line bg-white px-4 py-3 text-sm outline-none focus:border-teal-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-xs font-medium text-ink/60">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            placeholder="03XX XXXXXXX"
            className="mt-2 w-full border border-line bg-white px-4 py-3 text-sm outline-none focus:border-teal-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="test" className="text-xs font-medium text-ink/60">
          Test(s) needed
        </label>
        <input
          id="test"
          name="test"
          type="text"
          placeholder="e.g. CBC, Lipid Profile"
          className="mt-2 w-full border border-line bg-white px-4 py-3 text-sm outline-none focus:border-teal-500"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="location" className="text-xs font-medium text-ink/60">
            Preferred location
          </label>
          <select
            id="location"
            name="location"
            className="mt-2 w-full border border-line bg-white px-4 py-3 text-sm outline-none focus:border-teal-500"
          >
            {LOCATIONS.map((loc) => (
              <option key={loc.slug} value={loc.slug}>
                {loc.city}
                {loc.isHQ ? " (HQ)" : ""}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="collection" className="text-xs font-medium text-ink/60">
            Collection type
          </label>
          <select
            id="collection"
            name="collection"
            className="mt-2 w-full border border-line bg-white px-4 py-3 text-sm outline-none focus:border-teal-500"
          >
            <option>Visit the lab</option>
            <option>Home sample collection</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-medium text-ink/60">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Anything else we should know?"
          className="mt-2 w-full border border-line bg-white px-4 py-3 text-sm outline-none focus:border-teal-500"
        />
      </div>

      <button type="submit" className="btn-coral w-full justify-center sm:w-auto">
        Request appointment via WhatsApp
      </button>
    </form>
  );
}

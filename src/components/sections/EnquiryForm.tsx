"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ChevronDown, Send } from "lucide-react";
import { SITE } from "@/constants/site";

const COUNTRIES = [
  "India",
  "Sri Lanka",
  "Bangladesh",
  "Nepal",
  "Myanmar",
  "Kenya",
  "Tanzania",
  "Uganda",
  "South Africa",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Oman",
  "Other",
];

const INQUIRY_TYPES = ["Product Enquiries", "Business Partnerships", "Export Opportunities", "General Queries"];
const MAX_MESSAGE = 500;

const fieldCls =
  "h-10 w-full rounded-[4px] border border-line bg-white px-3 text-[13px] text-ink placeholder:text-muted/70 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20";
const labelCls = "mb-1 block text-[12px] font-semibold text-ink";

/**
 * Enquiry form. There is no backend yet, so submitting composes an email in the
 * visitor's mail app addressed to the company. Swap `onSubmit` for an API call
 * (or a Server Action) when a mail/CRM service is available.
 */
export function EnquiryForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "composed">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const type = get("inquiryType") || "General Queries";
    const to = type === "Export Opportunities" ? SITE.exportEmail : SITE.infoEmail;
    const body = [
      `Name: ${get("name")}`,
      `Company: ${get("company") || "-"}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Country: ${get("country") || "-"}`,
      `Inquiry type: ${type}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(`Website enquiry – ${type}`)}&body=${encodeURIComponent(body)}`;
    setStatus("composed");
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="enquiry-title"
      className="rounded-md bg-white p-6 text-ink shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
    >
      <h2 id="enquiry-title" className="text-[24px] font-semibold leading-tight">
        Send Us a Query
      </h2>
      <p className="mt-1 text-[13px] text-muted">We’ll get back to you soon.</p>

      <div className="mt-4 grid gap-x-4 gap-y-3 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Full Name <span aria-hidden>*</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Enter your name" className={fieldCls} />
        </div>
        <div>
          <label htmlFor="company" className={labelCls}>
            Company Name
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" placeholder="Enter company name" className={fieldCls} />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email Address <span aria-hidden>*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="Enter your email" className={fieldCls} />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone Number <span aria-hidden>*</span>
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="Enter your phone number" className={fieldCls} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="country" className={labelCls}>
            Country
          </label>
          <div className="relative">
            <select id="country" name="country" defaultValue="" className={`${fieldCls} appearance-none pr-9 text-muted`}>
              <option value="" disabled>
                Select your country
              </option>
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <ChevronDown aria-hidden className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="inquiryType" className={labelCls}>
            Inquiry Type
          </label>
          <div className="relative">
            <select id="inquiryType" name="inquiryType" defaultValue="" className={`${fieldCls} appearance-none pr-9 text-muted`}>
              <option value="" disabled>
                Select inquiry type
              </option>
              {INQUIRY_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <ChevronDown aria-hidden className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>
            Your Message <span aria-hidden>*</span>
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              maxLength={MAX_MESSAGE}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us how we can help you…"
              className={`${fieldCls} h-auto resize-none py-2.5`}
            />
            <span className="pointer-events-none absolute bottom-2 right-3 text-[11px] text-muted">
              {message.length}/{MAX_MESSAGE}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex items-center gap-2 text-[12px] text-ink">
          <input type="checkbox" required className="size-4 accent-[var(--color-brand-600)]" />
          <span>
            I agree to the{" "}
            <Link href="/terms" className="text-brand-600 underline">
              Terms &amp; Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="text-brand-600 underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        <button
          type="submit"
          className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-[4px] bg-brand-600 px-6 text-sm font-medium text-white transition-colors hover:bg-brand-700"
        >
          <Send aria-hidden className="size-4" />
          Send Inquiry
        </button>
      </div>

      <p role="status" className="mt-3 min-h-4 text-[12px] text-muted">
        {status === "composed"
          ? "Your email app should now open with this enquiry pre-filled. Please press send there to complete it."
          : ""}
      </p>
    </form>
  );
}

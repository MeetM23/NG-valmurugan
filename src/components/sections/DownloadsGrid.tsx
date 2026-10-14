"use client";

import Link from "next/link";
import { useState } from "react";
import { Download as DownloadIcon } from "lucide-react";
import { downloadHref } from "@/constants/site";
import type { Download } from "@/types";

const TABS = ["All", "Company Information", "Product Brochures", "Technical Documents", "Certifications"] as const;

const TONES: Record<Download["tone"], string> = {
  green: "bg-brand-600",
  blue: "bg-[#2563eb]",
  red: "bg-[#dc2626]",
  orange: "bg-[#f97316]",
};

export function DownloadsGrid({ docs }: { docs: Download[] }) {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");
  const visible = tab === "All" ? docs : docs.filter((d) => d.category === tab);

  return (
    <div>
      <div role="tablist" aria-label="Filter downloads" className="flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`rounded-full border px-4 py-1.5 text-[12px] font-medium transition-colors ${
              tab === t
                ? "border-brand-600 bg-brand-600 text-white"
                : "border-line bg-white text-ink hover:border-brand-600 hover:text-brand-600"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-4 text-[13px] text-muted">No documents in this category yet.</p>
      ) : (
        <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {visible.map((d) => (
            <li key={d.title} className="card-soft flex flex-col p-4">
              <span
                aria-hidden
                className={`flex h-9 w-8 items-end justify-center rounded-[3px] pb-1 text-[9px] font-bold text-white ${TONES[d.tone]}`}
              >
                PDF
              </span>
              <h3 className="mt-3 text-[14px] font-semibold leading-tight text-brand-700">{d.title}</h3>
              <p className="mt-1.5 flex-1 text-[12px] leading-snug text-muted">{d.description}</p>
              <Link
                href={downloadHref(d)}
                {...(d.available ? { download: true } : {})}
                className="mt-3 inline-flex h-8 items-center justify-center gap-1.5 rounded-[4px] border border-brand-600 text-[12px] font-medium text-brand-700 transition-colors hover:bg-brand-50"
              >
                Download
                <DownloadIcon aria-hidden className="size-3.5" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

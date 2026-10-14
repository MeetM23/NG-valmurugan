import type { Metadata } from "next";
import { SimplePage } from "@/components/sections/SimplePage";
import { SITE } from "@/constants/site";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <SimplePage title="Terms & Conditions">
      <p>The full terms and conditions for this website will be published here.</p>
      <p>
        For questions, write to{" "}
        <a href={`mailto:${SITE.infoEmail}`} className="text-brand-600 underline">
          {SITE.infoEmail}
        </a>
        .
      </p>
    </SimplePage>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { SimplePage } from "@/components/sections/SimplePage";
import { SITE } from "@/constants/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <SimplePage title="Privacy Policy">
      <p>The full privacy policy for this website will be published here.</p>
      <p>
        Until then, any details you send through our{" "}
        <Link href="/contact#enquiry" className="text-brand-600 underline">
          enquiry form
        </Link>{" "}
        are used only to respond to your enquiry. For questions, write to{" "}
        <a href={`mailto:${SITE.infoEmail}`} className="text-brand-600 underline">
          {SITE.infoEmail}
        </a>
        .
      </p>
    </SimplePage>
  );
}

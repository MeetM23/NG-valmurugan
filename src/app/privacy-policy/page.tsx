import type { Metadata } from "next";
import Link from "next/link";
import { SimplePage } from "@/components/sections/SimplePage";
import { SITE } from "@/constants/site";

export const metadata: Metadata = { title: "Privacy Policy" };

const h2 = "pt-4 text-[18px] font-semibold text-brand-800";
const mail = (
  <a href={`mailto:${SITE.infoEmail}`} className="text-brand-600 underline">
    {SITE.infoEmail}
  </a>
);

export default function PrivacyPolicyPage() {
  return (
    <SimplePage title="Privacy Policy">
      <p>
        This policy explains how {SITE.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects and uses the information you
        share through this website.
      </p>

      <h2 className={h2}>Information we collect</h2>
      <p>
        When you submit our{" "}
        <Link href="/contact#enquiry" className="text-brand-600 underline">
          enquiry form
        </Link>{" "}
        or request a call back, we collect the details you provide, such as your name, phone number, email address,
        company and message.
      </p>

      <h2 className={h2}>How we use it</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>To respond to your enquiry and share product or pricing information.</li>
        <li>To follow up on business requests, including export enquiries.</li>
        <li>To improve our website and services.</li>
      </ul>

      <h2 className={h2}>Sharing</h2>
      <p>
        We do not sell your personal information. We share it only with service providers who help us operate the
        website or respond to you, or where the law requires it.
      </p>

      <h2 className={h2}>Cookies and analytics</h2>
      <p>
        This website may use cookies or similar technologies to understand how visitors use the site. You can disable
        cookies in your browser settings.
      </p>

      <h2 className={h2}>Data retention and security</h2>
      <p>
        We keep enquiry details only as long as needed to handle your request and for legitimate business records, and
        we take reasonable steps to protect them.
      </p>

      <h2 className={h2}>Your choices</h2>
      <p>You may ask us to access, correct or delete the information you have shared by writing to {mail}.</p>

      <h2 className={h2}>Changes to this policy</h2>
      <p>We may update this policy from time to time. The latest version will always be available on this page.</p>

      <h2 className={h2}>Contact</h2>
      <p>
        {SITE.name}, {SITE.addressOneLine}. Email: {mail}.
      </p>
    </SimplePage>
  );
}

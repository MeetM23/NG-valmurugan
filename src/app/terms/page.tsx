import type { Metadata } from "next";
import { SimplePage } from "@/components/sections/SimplePage";
import { SITE } from "@/constants/site";

export const metadata: Metadata = { title: "Terms & Conditions" };

const h2 = "pt-4 text-[18px] font-semibold text-brand-800";

export default function TermsPage() {
  return (
    <SimplePage title="Terms & Conditions">
      <p>
        By using this website you agree to the terms below. If you do not agree, please do not use the site.
      </p>

      <h2 className={h2}>Use of the website</h2>
      <p>
        The content on this website is provided for general information about {SITE.name} and its products. You may
        not misuse the site, attempt to disrupt it, or copy its content for commercial purposes without our written
        permission.
      </p>

      <h2 className={h2}>Product information</h2>
      <p>
        We take care to keep product descriptions, specifications and images accurate, but they may change without
        notice and are not a binding offer. Application rates and results vary with soil, crop and climate; please
        follow the label and technical data sheet, or seek agronomic advice.
      </p>

      <h2 className={h2}>Enquiries and orders</h2>
      <p>
        Submitting an enquiry does not create a contract. Prices, availability and delivery terms are confirmed only
        in a written quotation or order confirmation from us.
      </p>

      <h2 className={h2}>Intellectual property</h2>
      <p>
        The name, logo, images, text and design on this website belong to {SITE.name} or its licensors and are
        protected by applicable law.
      </p>

      <h2 className={h2}>Limitation of liability</h2>
      <p>
        To the extent permitted by law, we are not liable for any loss arising from your use of, or reliance on, this
        website. Links to third-party sites are provided for convenience and we are not responsible for their content.
      </p>

      <h2 className={h2}>Governing law</h2>
      <p>These terms are governed by the laws of India, with jurisdiction in the courts of Tamil Nadu.</p>

      <h2 className={h2}>Contact</h2>
      <p>
        Questions about these terms? Write to{" "}
        <a href={`mailto:${SITE.infoEmail}`} className="text-brand-600 underline">
          {SITE.infoEmail}
        </a>
        .
      </p>
    </SimplePage>
  );
}

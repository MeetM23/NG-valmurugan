import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { DownloadsGrid } from "@/components/sections/DownloadsGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { DOWNLOADS } from "@/constants/site";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Company profile, product catalogue, technical documents, certifications and export documentation.",
};

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        crumb="Downloads"
        title="Downloads"
        subtitle="Useful Information at Your Fingertips"
        description="Access our company profile, product information, technical documents and other resources."
        cta={{ label: "View All Downloads", href: "#documents" }}
        image={{ src: "/images/research-hand.jpg", alt: "Hands holding a seedling in soil", position: "center" }}
      />
      <section id="documents" className="container-page my-10">
        <DownloadsGrid docs={DOWNLOADS} />
      </section>
      <CtaBand
        title="Need a Document We Haven’t Listed?"
        text="Ask our team for specifications, COA, TDS, SDS or export documentation for your requirement."
        primary={{ label: "Get in Touch", href: "/contact#enquiry" }}
      />
    </>
  );
}

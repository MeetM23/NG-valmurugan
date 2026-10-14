import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Markets We Serve",
  description:
    "Velmurugan Fertiliser Company serves Domestic, Pan-India and International markets, including distributors, dealers, importers and OEM / private label partners.",
};

const MARKETS = [
  { src: "/images/market-asia.jpg", title: "Domestic", text: "Serving farmers and distributors across India", href: "/contact#enquiry", cta: "Domestic Enquiry" },
  { src: "/images/market-americas.jpg", title: "Pan-India", text: "Expanding our reach across key markets", href: "/contact#enquiry", cta: "Distributor Enquiry" },
  { src: "/images/hero-ship.jpg", title: "International", text: "Developing global partnerships", href: "/international-business", cta: "International Business" },
];

export default function MarketsPage() {
  return (
    <>
      <PageHero
        crumb="Markets"
        title="Markets We Serve"
        subtitle="From Farms to the World"
        description="We serve customers across Domestic, Pan-India and International markets, including distributors, dealers, importers and OEM / private label partners."
        cta={{ label: "Our Markets", href: "#markets" }}
        image={{ src: "/images/market-americas.jpg", alt: "Rows of green crops in a field", position: "center" }}
      />
      <section id="markets" className="container-page my-10">
        <ul className="grid gap-5 md:grid-cols-3">
          {MARKETS.map((m) => (
            <li key={m.title} className="card-soft overflow-hidden">
              <div className="relative aspect-[16/10]">
                <Image src={m.src} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-5">
                <h2 className="text-[20px] font-semibold">{m.title}</h2>
                <p className="mt-1.5 text-[14px] leading-snug text-muted">{m.text}</p>
                <Button href={m.href} variant="outline" size="sm" className="mt-4">
                  {m.cta}
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand
        title="Let’s Grow Together"
        text="Whether you are a distributor, dealer, importer or private label partner, we would like to hear from you."
        primary={{ label: "Enquire Now", href: "/contact#enquiry" }}
      />
    </>
  );
}

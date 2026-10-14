import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Gem,
  Globe,
  Handshake,
  Leaf,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureStrip } from "@/components/sections/FeatureStrip";
import { CtaBand } from "@/components/sections/CtaBand";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CertMark, type CertKind } from "@/components/ui/CertMark";

export const metadata: Metadata = {
  title: "International Business",
  description:
    "Velmurugan Fertiliser Company supplies high-quality fertilisers and specialty nutrients to importers, distributors and agribusiness partners worldwide.",
};

const MARKETS = [
  { name: "Asia", src: "/images/market-asia.jpg", places: ["Sri Lanka", "Bangladesh", "Nepal", "Myanmar", "Other Asian Countries"] },
  { name: "Africa", src: "/images/market-africa.jpg", places: ["Kenya", "Tanzania", "Uganda", "South Africa", "Other African Countries"] },
  { name: "Middle East", src: "/images/market-me.jpg", places: ["UAE", "Saudi Arabia", "Qatar", "Oman", "Other GCC Countries"] },
  { name: "Europe", src: "/images/market-europe.jpg", places: ["Selected European Markets"] },
  { name: "Americas", src: "/images/market-americas.jpg", places: ["Latin America", "Caribbean", "Other Countries"] },
  { name: "Other Regions", src: "/images/market-other.jpg", places: ["Expanding to new markets"] },
];

const REASONS = [
  { icon: Gem, title: "High-Quality Products", text: "Consistent quality and performance" },
  { icon: ShieldCheck, title: "Reliable Supply", text: "Timely and secure deliveries" },
  { icon: Settings, title: "Custom Solutions", text: "Products tailored to local needs" },
  { icon: Users, title: "Experienced Team", text: "Dedicated support for international clients" },
  { icon: Leaf, title: "Sustainable Approach", text: "Contributing to global food security" },
];

const CERTS: { kind: CertKind | "docs"; label: string }[] = [
  { kind: "iso", label: "ISO 9001:2015" },
  { kind: "fco", label: "FCO Compliant" },
  { kind: "reach", label: "REACH Compliant" },
  { kind: "docs", label: "Customised Documentation" },
];

export default function InternationalBusinessPage() {
  return (
    <>
      <PageHero
        crumb="International Business"
        title="International Business"
        subtitle="Nourishing Global Growth"
        description="We supply high-quality fertilisers and specialty nutrient products to customers across the globe, supporting sustainable agriculture and food security. With consistent quality, reliable supply and customer-focused service, we are a preferred partner in international markets."
        cta={{ label: "Explore Global Opportunities", href: "#markets" }}
        image={{ src: "/images/hero-ship.jpg", alt: "Container ship loading at port", position: "center 60%" }}
        script={["From", "India to", "a Greener", "World"]}
      />
      <FeatureStrip
        items={[
          { icon: Globe, lines: ["Export to", "Multiple Countries"] },
          { icon: Handshake, lines: ["Reliable", "Supply Chain"] },
          { icon: ShieldCheck, lines: ["Consistent", "Quality Standards"] },
          { icon: Users, lines: ["Long-Term", "Global Partnerships"] },
          { icon: Leaf, lines: ["Supporting", "Sustainable Agriculture"] },
        ]}
      />

      <section className="container-page mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.2fr_0.75fr]">
        <div className="rounded-md bg-brand-50 p-6">
          <SectionTitle>
            <span className="block">Expanding Possibilities</span>
            <span className="block">Across Borders</span>
          </SectionTitle>
          <p className="mt-4 text-[14px] leading-[1.65] text-muted">
            Our international business is driven by a vision to make quality nutrition accessible to farmers
            worldwide. We work with importers, distributors and agribusiness partners across regions, providing
            tailored solutions to meet local crop, soil and market requirements.
          </p>
          <Button href="/contact#enquiry" className="mt-5">
            Partner with Us
          </Button>
        </div>
        <div className="relative min-h-[220px]">
          <Image
            src="/images/world-map.jpg"
            alt="World map showing existing and expanding export markets connected to India"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-contain"
          />
        </div>
        <div className="rounded-md bg-sky-50/70 p-5">
          <h3 className="text-[18px] font-semibold">Our Global Presence</h3>
          <ul className="mt-3 space-y-2 text-[13px]">
            <li className="flex items-center gap-2.5">
              <span aria-hidden className="size-3 rounded-full bg-brand-700" /> Existing Markets
            </li>
            <li className="flex items-center gap-2.5">
              <span aria-hidden className="size-3 rounded-full bg-sky-400" /> Expanding Markets
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-3 rounded-md bg-white p-3 text-[12px] leading-snug">
            <Globe aria-hidden className="size-9 shrink-0 text-brand-600" strokeWidth={1.3} />
            Building a healthier, more productive world through trusted partnerships.
          </div>
        </div>
      </section>

      <section id="markets" className="container-page mt-10">
        <SectionTitle>Key Export Markets</SectionTitle>
        <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {MARKETS.map((m) => (
            <li key={m.name} className="card-soft overflow-hidden">
              <div className="relative aspect-[153/99]">
                <Image src={m.src} alt={`${m.name} region`} fill sizes="(min-width: 1024px) 16vw, 50vw" className="object-cover" />
              </div>
              <div className="p-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-[14px] font-semibold">{m.name}</h3>
                  <Link
                    href="/contact#enquiry"
                    aria-label={`Enquire about ${m.name}`}
                    className="flex size-6 shrink-0 items-center justify-center rounded-full border border-brand-600 text-brand-600 transition-colors hover:bg-brand-600 hover:text-white"
                  >
                    <ArrowRight aria-hidden className="size-3.5" />
                  </Link>
                </div>
                <ul className="mt-1 space-y-px text-[11px] leading-snug text-muted">
                  {m.places.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page mb-10 mt-10 grid gap-5 lg:grid-cols-[0.9fr_0.75fr_1.15fr]">
        <div>
          <SectionTitle>Why Global Partners Choose Us</SectionTitle>
          <ul className="mt-4 space-y-4">
            {REASONS.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-center gap-3.5">
                <Icon aria-hidden className="size-8 shrink-0 text-brand-600" strokeWidth={1.3} />
                <div>
                  <h3 className="text-[14px] font-semibold leading-tight">{title}</h3>
                  <p className="text-[12px] text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative min-h-[260px] overflow-hidden rounded-md bg-brand-900 text-white">
          <Image src="/images/intl-plant.jpg" alt="" fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover object-bottom" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-brand-950/80 via-brand-950/20 to-transparent" />
          <figcaption className="relative flex gap-2 p-5 text-[20px] font-semibold leading-snug">
            <span aria-hidden className="font-display text-[44px] leading-none text-brand-400">“</span>
            <span className="max-w-[150px]">Growing Global Partnerships for a Sustainable Tomorrow.</span>
          </figcaption>
        </figure>

        <div>
          <SectionTitle>Certifications &amp; Compliance</SectionTitle>
          <p className="mt-3 text-[13px] leading-snug text-muted">
            Our products meet international quality and safety standards, ensuring trust and reliability in global
            markets.
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {CERTS.map((c) => (
              <li key={c.label} className="card-soft flex flex-col items-center px-2 py-4 text-center">
                <div className="flex h-11 items-center">
                  {c.kind === "docs" ? (
                    <FileText aria-hidden className="size-9 text-brand-600" strokeWidth={1.3} />
                  ) : (
                    <CertMark kind={c.kind} />
                  )}
                </div>
                <p className="mt-2 text-[12px] font-medium leading-tight">{c.label}</p>
              </li>
            ))}
          </ul>
          <p className="mt-3 flex items-center gap-3 rounded-md bg-brand-50 p-4 text-[13px] leading-snug text-brand-700">
            <FileText aria-hidden className="size-9 shrink-0 text-brand-600" strokeWidth={1.3} />
            We provide all necessary export documentation as per destination country requirements.
          </p>
        </div>
      </section>

      <CtaBand
        title="Let’s Build a Healthier, Greener World Together"
        text="Partner with Velmurugan Fertiliser Company for reliable supply, quality products and long-term collaboration."
        primary={{ label: "Enquire for Export Opportunities", href: "/contact#enquiry" }}
      />
    </>
  );
}

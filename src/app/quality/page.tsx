import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  FlaskConical,
  Gem,
  Handshake,
  Leaf,
  Package,
  Settings,
  ShieldCheck,
  Target,
  Truck,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureStrip } from "@/components/sections/FeatureStrip";
import { CtaBand } from "@/components/sections/CtaBand";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CertMark, type CertKind } from "@/components/ui/CertMark";

export const metadata: Metadata = {
  title: "Quality",
  description:
    "Stringent quality control, advanced testing facilities and international standards behind every Velmurugan fertiliser.",
};

const STEPS = [
  { icon: Leaf, label: "Raw Material Inspection" },
  { icon: FlaskConical, label: "In-Process Testing" },
  { icon: Settings, label: "Quality Control & Analysis" },
  { icon: Package, label: "Final Product Approval" },
  { icon: Truck, label: "Safe & Reliable Delivery" },
];

const LAB = [
  { src: "/images/lab-raw.jpg", label: "Raw Material Analysis" },
  { src: "/images/lab-micro.jpg", label: "In-Process Quality Testing" },
  { src: "/images/lab-nutrient.jpg", label: "Nutrient Content Analysis" },
  { src: "/images/lab-instruments.jpg", label: "Advanced Analytical Instruments" },
];

const CERTS: { kind?: CertKind; icon?: typeof Leaf; title: string; sub: string }[] = [
  { kind: "iso", title: "ISO 9001:2015", sub: "Quality Management System" },
  { kind: "fco", title: "FCO Compliant", sub: "As per Government of India" },
  { kind: "reach", title: "REACH Compliant", sub: "Meets EU Chemical Regulations" },
  { icon: Leaf, title: "Environmentally Responsible", sub: "Sustainable Manufacturing" },
  { icon: Package, title: "Customised Documentation", sub: "As per Importer Requirements" },
];

const PROMISES = [
  { icon: Gem, title: "Pure & Safe Products", text: "Free from harmful impurities and contaminants." },
  { icon: Target, title: "Consistent Nutrient Content", text: "Reliable performance in every batch." },
  { icon: Leaf, title: "Supports Sustainable Agriculture", text: "Environmentally responsible production." },
  { icon: Handshake, title: "Trusted by Global Partners", text: "Meeting diverse international quality requirements." },
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        crumb="Quality"
        title="Quality"
        subtitle="Our Commitment to a Healthier Tomorrow"
        description="At Velmurugan Fertiliser Company, quality is at the core of everything we do. From raw material sourcing to final product delivery, we follow strict quality control measures to ensure our products meet global standards and deliver consistent performance."
        cta={{ label: "Our Quality Approach", href: "#quality-process" }}
        image={{ src: "/images/hero-plant-quality.jpg", alt: "Seedling growing from soil", position: "center 40%" }}
        script={["Quality Today", "Greener", "Tomorrow"]}
      />
      <FeatureStrip
        items={[
          { icon: BadgeCheck, lines: ["Stringent", "Quality Control"] },
          { icon: FlaskConical, lines: ["Advanced", "Testing Facilities"] },
          { icon: ShieldCheck, lines: ["International", "Standards"] },
          { icon: Users, lines: ["Experienced", "QA Team"] },
          { icon: Leaf, lines: ["Consistent", "Product Performance"] },
        ]}
      />

      <section id="quality-process" className="container-page mt-8 grid gap-5 lg:grid-cols-[0.45fr_1fr]">
        <div className="rounded-md bg-brand-50 p-6">
          <SectionTitle as="h2">Quality at Every Step</SectionTitle>
          <p className="mt-3 text-[14px] leading-[1.6] text-muted">
            We follow a comprehensive quality management system to ensure that our fertilizers and specialty
            nutrient products are safe, effective and reliable for farmers across the world.
          </p>
          <Button href="/manufacturing#process" className="mt-5">
            View Quality Process
          </Button>
        </div>
        <ol className="flex flex-wrap items-center justify-between gap-y-6 rounded-md bg-brand-50 px-6 py-6 lg:flex-nowrap">
          {STEPS.map(({ icon: Icon, label }, i) => (
            <li key={label} className="flex items-center">
              <div className="flex w-[120px] flex-col items-center gap-3 text-center">
                <span className="flex size-[70px] items-center justify-center rounded-full border-2 border-brand-600 bg-white text-brand-600">
                  <Icon aria-hidden className="size-8" strokeWidth={1.4} />
                </span>
                <span className="text-[13px] font-medium leading-snug">{label}</span>
              </div>
              {i < STEPS.length - 1 && (
                <svg aria-hidden viewBox="0 0 24 12" className="mb-10 hidden h-3 w-6 shrink-0 text-brand-600 lg:block">
                  <path d="M0 6h20M15 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section id="laboratory" className="container-page mt-10">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <SectionTitle>State-of-the-Art Laboratory &amp; Testing</SectionTitle>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
            <p className="max-w-[400px] text-[13px] leading-snug text-muted">
              Our in-house laboratory is equipped with modern instruments and qualified professionals to ensure
              accurate and reliable testing.
            </p>
            <Button href="/infrastructure#infrastructure" variant="outline" size="sm" className="shrink-0">
              Our Lab Facilities
            </Button>
          </div>
        </div>
        <ul className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {LAB.map((item) => (
            <li key={item.label} className="overflow-hidden rounded-[3px]">
              <div className="relative aspect-[233/112]">
                <Image src={item.src} alt={item.label} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
              <p className="bg-brand-800 px-3 py-2.5 text-center text-[13px] font-medium text-white">{item.label}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="certifications" className="container-page mt-10">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <SectionTitle>Standards &amp; Certifications</SectionTitle>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-[12px] text-muted">
              Our products comply with national and international quality, safety and environmental standards.
            </p>
            <Button href="/infrastructure#downloads" variant="outline" size="sm" className="shrink-0">
              View Certificates
            </Button>
          </div>
        </div>
        <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-[repeat(5,1fr)_1.45fr]">
          {CERTS.map(({ kind, icon: Icon, title, sub }) => (
            <li key={title} className="card-soft flex flex-col items-center px-3 py-5 text-center">
              <div className="flex h-12 items-center justify-center">
                {kind ? <CertMark kind={kind} /> : Icon && <Icon aria-hidden className="size-10 text-brand-600" strokeWidth={1.3} />}
              </div>
              <p className="mt-2 text-[15px] font-semibold leading-tight">{title}</p>
              <p className="mt-2 text-[12px] leading-snug text-muted">{sub}</p>
            </li>
          ))}
          <li className="relative col-span-2 min-h-[150px] overflow-hidden rounded-md bg-brand-900 text-white md:col-span-3 lg:col-span-1">
            <Image
              src="/images/hand-plant.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 20vw, 100vw"
              className="object-cover object-right"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/55 to-transparent" />
            <div className="relative flex h-full items-center gap-3 p-4">
              <Leaf aria-hidden className="size-5 shrink-0 fill-brand-500 text-brand-500" />
              <p className="max-w-[140px] text-[18px] font-semibold leading-snug">
                Quality Products for a Sustainable Future
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className="container-page mb-10 mt-10">
        <SectionTitle>Our Quality Promise</SectionTitle>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PROMISES.map(({ icon: Icon, title, text }) => (
            <li key={title} className="card-soft flex items-center gap-4 px-5 py-5">
              <Icon aria-hidden className="size-11 shrink-0 text-brand-600" strokeWidth={1.3} />
              <div>
                <h3 className="text-[14px] font-semibold leading-snug">{title}</h3>
                <p className="mt-1 text-[13px] leading-snug text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand
        title="Quality Nutrition for a Better World"
        text="Our commitment to quality helps farmers grow healthier crops and build a more sustainable future."
        primary={{ label: "Partner with Us", href: "/contact#enquiry" }}
      />
    </>
  );
}

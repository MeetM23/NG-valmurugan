import type { Metadata } from "next";
import Image from "next/image";
import {
  Blend,
  Building2,
  Factory,
  FlaskConical,
  Funnel,
  Leaf,
  Package,
  Settings,
  ShieldCheck,
  Warehouse,
  Wind,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureStrip } from "@/components/sections/FeatureStrip";
import { CtaBand } from "@/components/sections/CtaBand";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Manufacturing & Unit II",
  description:
    "Unit II in Villupuram, Tamil Nadu: reactors, filtration, drying, steam, DM water and storage utilities for granulated, water-soluble and liquid fertilisers.",
};

const HIGHLIGHTS = [
  { icon: Factory, text: "Established Unit II Facility" },
  { icon: Settings, text: "Wide Range of Process Equipment" },
  { icon: FlaskConical, text: "Suitable for Granulated, Water-Soluble & Liquid Products" },
  { icon: ShieldCheck, text: "Quality-Focused Manufacturing" },
  { icon: Leaf, text: "Capacity for Product Development & Custom Formulations" },
];

const EQUIPMENT = [
  ["Filter Press (Teflon Plate & Frame)", "500 GPM", "40"],
  ["Glass-Lined Reactor (GLR)", "5 KL", "1"],
  ["Stainless Steel Reactor (SSR)", "4.5 KL", "1"],
  ["Stainless Steel Reactor (SSR)", "3 KL", "2"],
  ["Stainless Steel Reactor (SSR)", "1 KL", "1"],
  ["Agitated Nutsche Filter Dryer (ANFD)", "3 KL", "1"],
  ["Rotary Vacuum Paddle Dryer (RVPD)", "1000 kg", "1"],
  ["Rotary Vacuum Paddle Dryer (RVPD)", "500 kg", "1"],
  ["Electrical Oven Tray Dryer", "200 kg / 24 trays", "1"],
  ["Steam Boiler", "1.5 Ton", "1"],
  ["DM Water Unit", "1,000 L/hr", "1"],
  ["Acid Storage Tank (SS)", "10 KL", "1"],
] as const;

const GALLERY = [
  { src: "/images/eq-glr.jpg", label: "Glass-Lined Reactor (GLR)" },
  { src: "/images/eq-filterpress.jpg", label: "Filter Press" },
  { src: "/images/eq-rvpd.jpg", label: "Rotary Vacuum Paddle Dryer" },
  { src: "/images/eq-utility.jpg", label: "Utility Systems" },
  { src: "/images/eq-control.jpg", label: "Control Panel & Automation" },
  { src: "/images/eq-lab.jpg", label: "Laboratory & QC" },
];

const PROCESS = [
  { icon: Warehouse, label: "Raw Material Receipt & Storage" },
  { icon: FlaskConical, label: "Reaction / Mixing" },
  { icon: Funnel, label: "Filtration & Separation" },
  { icon: Wind, label: "Drying & Moisture Control" },
  { icon: Blend, label: "Formulation & Blending" },
  { icon: ShieldCheck, label: "Quality Control & Testing" },
  { icon: Package, label: "Packing & Dispatch" },
];

function HeroCard() {
  return (
    <div className="absolute right-8 top-10 hidden w-[190px] rounded-md bg-white/92 p-3.5 text-ink shadow-md xl:flex xl:gap-2.5">
      <Settings aria-hidden className="mt-0.5 size-9 shrink-0 text-brand-600" strokeWidth={1.3} />
      <div>
        <p className="text-[15px] font-semibold leading-tight">Built for Better Nutrition</p>
        <p className="mt-1.5 text-[11px] leading-snug text-muted">
          Advanced Infrastructure. Reliable Production. Sustainable Future.
        </p>
      </div>
    </div>
  );
}

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        crumb="Manufacturing & Unit II"
        title="Manufacturing & Unit II"
        subtitle="Technology. Capability. Consistency."
        description="Our Unit II manufacturing facility provides an established process platform for fertilizer and value-added product development, with reaction, filtration, drying, water treatment, storage and utility systems."
        cta={{ label: "Explore Our Facility", href: "#overview" }}
        image={{ src: "/images/hero-factory-mfg.jpg", alt: "Unit II process plant", position: "center 35%" }}
        aside={<HeroCard />}
      />
      <FeatureStrip
        layout="stacked"
        items={[
          { icon: Settings, lines: ["Advanced", "Process Equipment"] },
          { icon: FlaskConical, lines: ["Flexible", "Manufacturing"] },
          { icon: ShieldCheck, lines: ["Quality Controlled", "Operations"] },
          { icon: Building2, lines: ["Scalable", "Capacity"] },
          { icon: Leaf, lines: ["Value-Added", "Product Development"] },
        ]}
      />

      <section id="overview" className="container-page mt-8 grid gap-6 lg:grid-cols-[1fr_0.95fr_0.62fr] [&>*]:min-w-0">
        <div>
          <SectionTitle>Unit II – Overview</SectionTitle>
          <p className="mt-4 text-[14px] leading-[1.65] text-muted">
            Our Unit II, located in Villupuram, Tamil Nadu, is equipped with modern process equipment and
            utilities to manufacture and develop a wide range of fertilizer and specialty nutrient products. The
            facility is designed to support consistent quality, operational efficiency and future expansion.
          </p>
          <p className="mt-4 text-[14px] leading-[1.65] text-muted">
            The combination of reactors, filtration equipment, drying systems, steam, DM water and storage
            utilities provides the flexibility to produce granulated, water-soluble and liquid fertilizer
            products, including customised formulations.
          </p>
          <Button href="/infrastructure#infrastructure" className="mt-5">
            View Plant Layout
          </Button>
        </div>

        <div className="rounded-md bg-brand-50 p-6">
          <h3 className="text-[19px] font-semibold">Key Highlights</h3>
          <ul className="mt-4 space-y-3.5">
            {HIGHLIGHTS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-[13px] text-ink">
                <Icon aria-hidden className="size-7 shrink-0 text-brand-600" strokeWidth={1.4} />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <figure className="flex flex-col overflow-hidden rounded-[3px]">
          <div className="relative min-h-[200px] flex-1">
            <Image
              src="/images/facility-unit2.jpg"
              alt="Reactors and utilities inside the Unit II facility"
              fill
              sizes="(min-width: 1024px) 22vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="bg-brand-700 px-3 py-2.5 text-center text-[13px] font-medium text-white">
            Our Manufacturing Facility
          </figcaption>
        </figure>
      </section>

      <section id="equipment" className="container-page mt-10 grid gap-6 border-t border-line pt-8 lg:grid-cols-[1.2fr_1fr] [&>*]:min-w-0">
        <div>
          <SectionTitle>Major Equipment &amp; Installed Capacity</SectionTitle>
          <div className="mt-4 overflow-x-auto rounded-sm border border-line">
            <table className="w-full min-w-[520px] border-collapse text-left text-[13px]">
              <caption className="sr-only">Major equipment and installed capacity at Unit II</caption>
              <thead>
                <tr className="bg-brand-50 text-ink">
                  <th scope="col" className="w-14 border-b border-line px-3 py-2 font-semibold">S.No</th>
                  <th scope="col" className="border-b border-line px-3 py-2 font-semibold">Equipment / Facility</th>
                  <th scope="col" className="border-b border-line px-3 py-2 font-semibold">Capacity / Description</th>
                  <th scope="col" className="w-16 border-b border-line px-3 py-2 text-center font-semibold">Nos.</th>
                </tr>
              </thead>
              <tbody>
                {EQUIPMENT.map(([name, capacity, nos], i) => (
                  <tr key={`${name}-${capacity}`} className="odd:bg-white even:bg-brand-50/60">
                    <td className="border-b border-line/70 px-3 py-[7px]">{i + 1}</td>
                    <td className="border-b border-line/70 px-3 py-[7px]">{name}</td>
                    <td className="border-b border-line/70 px-3 py-[7px]">{capacity}</td>
                    <td className="border-b border-line/70 px-3 py-[7px] text-center">{nos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] text-muted">
              <strong className="font-semibold">Note:</strong> This is a key list of major equipment. For complete
              equipment details, please refer to our detailed facility documentation.
            </p>
            <Button href="/infrastructure#downloads" variant="outline" size="sm" className="shrink-0">
              View Complete Equipment List
            </Button>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-x-2.5 gap-y-2.5 self-start">
          {GALLERY.map((g) => (
            <li key={g.label} className="overflow-hidden rounded-[3px] border border-line bg-white">
              <div className="relative aspect-[186/92]">
                <Image src={g.src} alt={g.label} fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover" />
              </div>
              <p className="bg-brand-50 px-2 py-1.5 text-center text-[12px] font-medium">{g.label}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="process" className="container-page mb-10 mt-10 grid gap-6 xl:grid-cols-[1.9fr_0.9fr] [&>*]:min-w-0">
        <div>
          <SectionTitle>Manufacturing Process Flow</SectionTitle>
          <ol className="mt-5 flex flex-wrap items-start justify-between gap-y-5 xl:flex-nowrap">
            {PROCESS.map(({ icon: Icon, label }, i) => (
              <li key={label} className="flex items-start">
                <div className="flex w-[104px] flex-col items-center gap-2.5 text-center">
                  <span className="flex size-[62px] items-center justify-center rounded-full border-2 border-brand-600 bg-white text-brand-600">
                    <Icon aria-hidden className="size-7" strokeWidth={1.4} />
                  </span>
                  <span className="text-[12px] font-medium leading-snug">{label}</span>
                </div>
                {i < PROCESS.length - 1 && (
                  <svg aria-hidden viewBox="0 0 24 12" className="mt-[25px] hidden h-3 w-5 shrink-0 text-brand-600 xl:block">
                    <path d="M0 6h20M15 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                )}
              </li>
            ))}
          </ol>
        </div>
        <aside className="flex gap-4 self-start rounded-md bg-brand-50 p-5">
          <Settings aria-hidden className="size-9 shrink-0 text-brand-600" strokeWidth={1.3} />
          <div>
            <h3 className="text-[16px] font-semibold">Flexible Manufacturing</h3>
            <p className="mt-1.5 text-[12px] leading-relaxed text-muted">
              Our facility can be adapted to manufacture a wide range of fertilizer and specialty nutrient products
              based on market requirements and approved formulations.
            </p>
          </div>
        </aside>
      </section>

      <CtaBand
        title="Committed to Quality Manufacturing"
        text="Advanced technology, experienced team and a sustainable approach to deliver reliable fertilizer and specialty nutrient products."
        primary={{ label: "Discuss Your Manufacturing Requirements", href: "/contact#enquiry" }}
      />
    </>
  );
}

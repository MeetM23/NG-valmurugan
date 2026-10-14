"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  Blend,
  Droplets,
  FlaskConical,
  Leaf,
  Package,
  Sprout,
  TrendingUp,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Theme = "green" | "brown" | "orange" | "blue" | "teal" | "purple";

const THEMES: Record<Theme, { bg: string; title: string; accent: string; btn: string; line: string; icon: string }> = {
  green: { bg: "from-[#eaf4ec]", title: "text-ink", accent: "text-brand-700", btn: "bg-brand-600 hover:bg-brand-700", line: "bg-brand-600", icon: "text-brand-600" },
  brown: { bg: "from-[#fbf1ea]", title: "text-ink", accent: "text-[#8f2d17]", btn: "bg-brand-600 hover:bg-brand-700", line: "bg-[#c2410c]", icon: "text-[#b45309]" },
  orange: { bg: "from-[#fff4e4]", title: "text-ink", accent: "text-[#c2540a]", btn: "bg-[#e07a10] hover:bg-[#c96a0a]", line: "bg-[#e07a10]", icon: "text-[#d9730d]" },
  blue: { bg: "from-[#e8f3fb]", title: "text-ink", accent: "text-[#1273b5]", btn: "bg-[#1273b5] hover:bg-[#0e5f96]", line: "bg-[#1273b5]", icon: "text-[#1273b5]" },
  teal: { bg: "from-[#e8f6f5]", title: "text-ink", accent: "text-[#0f7e7a]", btn: "bg-[#0f8a86] hover:bg-[#0c716e]", line: "bg-[#0f8a86]", icon: "text-[#0f8a86]" },
  purple: { bg: "from-[#f1ecfa]", title: "text-ink", accent: "text-[#9b2fae]", btn: "bg-[#6f4cc0] hover:bg-[#5c3ca8]", line: "bg-[#6f4cc0]", icon: "text-[#7a4fc2]" },
};

const TABS = [
  { id: "all", label: "All Products" },
  { id: "granulated", label: "Granulated NPK" },
  { id: "organic", label: "Organic & Soil Conditioners" },
  { id: "potash", label: "Potash & Value Added" },
  { id: "water-soluble", label: "Water-Soluble" },
  { id: "liquids", label: "Specialty Liquids" },
  { id: "bio-stimulants", label: "Bio-Stimulants" },
  { id: "custom", label: "Custom Formulations" },
] as const;

type TabId = (typeof TABS)[number]["id"];

function Section({
  id,
  theme,
  title,
  subtitle,
  text,
  cta,
  children,
}: {
  id: string;
  theme: Theme;
  title: string;
  subtitle: ReactNode;
  text: string;
  cta: string;
  children: ReactNode;
}) {
  const t = THEMES[theme];
  return (
    <section id={id} className={`bg-gradient-to-r ${t.bg} to-white py-6`}>
      <div className="container-page grid gap-6 lg:grid-cols-[250px_1fr]">
        <div>
          <h2 className="flex items-center gap-3 text-[20px] font-semibold leading-tight">
            {title}
            <span aria-hidden className={`mt-1 hidden h-[2px] w-8 shrink-0 sm:block ${t.line}`} />
          </h2>
          <p className={`mt-3 text-[19px] font-semibold leading-snug ${t.accent}`}>{subtitle}</p>
          <p className="mt-2 text-[13px] leading-[1.55] text-muted">{text}</p>
          <Link
            href="/contact#enquiry"
            className={`mt-4 inline-flex h-10 items-center gap-2 rounded-[4px] px-4 text-[13px] font-medium text-white transition-colors ${t.btn}`}
          >
            {cta}
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

function ArrowLink({ label, className = "" }: { label: string; className?: string }) {
  return (
    <Link
      href="/contact#enquiry"
      aria-label={label}
      className={`flex size-6 shrink-0 items-center justify-center rounded-full border border-brand-600 text-brand-600 transition-colors hover:bg-brand-600 hover:text-white ${className}`}
    >
      <ArrowRight aria-hidden className="size-3.5" />
    </Link>
  );
}

function PackCard({
  img,
  title,
  text,
  pack,
  tall = false,
}: {
  img: string;
  title: string;
  text: string;
  pack?: string;
  tall?: boolean;
}) {
  return (
    <li className="card-soft flex flex-col p-3">
      <div className={`relative w-full ${tall ? "h-[104px]" : "h-[88px]"}`}>
        <Image src={img} alt={title} fill sizes="(min-width: 1024px) 14vw, 40vw" className="object-contain" />
      </div>
      <h3 className="mt-2 text-[13px] font-semibold leading-tight">{title}</h3>
      <p className="mt-1 flex-1 text-[12px] leading-snug text-muted">{text}</p>
      <div className="mt-2 flex items-center justify-between gap-2">
        <span className="text-[11px] text-ink">{pack}</span>
        <ArrowLink label={`Enquire about ${title}`} />
      </div>
    </li>
  );
}

function BenefitList({ items, icon: Icon, theme }: { items: string[]; icon: LucideIcon; theme: Theme }) {
  return (
    <ul className="space-y-2.5 rounded-md bg-white/70 p-4">
      {items.map((b) => (
        <li key={b} className="flex items-center gap-2.5 text-[12px] text-ink">
          <Icon aria-hidden className={`size-5 shrink-0 ${THEMES[theme].icon}`} strokeWidth={1.4} />
          {b}
        </li>
      ))}
    </ul>
  );
}

function SideImage({ src, caption, position = "center" }: { src: string; caption: string; position?: string }) {
  return (
    <div className="relative hidden min-h-[160px] overflow-hidden rounded-md bg-brand-900 text-white lg:block">
      <Image src={src} alt="" fill sizes="20vw" className="object-cover" style={{ objectPosition: position }} />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <Leaf aria-hidden className="mb-1 size-6 fill-white text-white" />
        <p className="text-[15px] font-semibold leading-snug">{caption}</p>
      </div>
    </div>
  );
}

const NPK = [
  { img: "/images/npk-1.jpg", title: "NPK 17:17:17", text: "Balanced nutrition for better yield." },
  { img: "/images/npk-2.jpg", title: "NPK 12:12:12", text: "Essential nutrients for all crops." },
  { img: "/images/npk-3.jpg", title: "NPK 20:20:0", text: "High nitrogen & phosphorous for vigorous growth." },
  { img: "/images/npk-4.jpg", title: "NPK 20:0:10", text: "High nitrogen & potassium for enhanced crop quality." },
];

const ORGANIC = [
  { img: "/images/org-prom.jpg", title: "PROM", text: "Phosphate Rich Organic Manure" },
  { img: "/images/org-cms.jpg", title: "CMS", text: "Calcium Magnesium Soil Conditioner" },
  { img: "/images/org-manure.jpg", title: "Organic Manure", text: "For healthier soil and sustainable growth." },
  { img: "/images/org-neem.jpg", title: "Neem Cake", text: "Natural soil enhancer and pest deterrent." },
  { img: "/images/org-npk-natural.jpg", title: "NPK Natural Fertilizer", text: "Organic enriched fertilizer for improved soil health." },
];

const LIQUIDS = [
  { img: "/images/liq-primary.jpg", title: "Primary Nutrient Liquids", text: "(N, P, K)" },
  { img: "/images/liq-secondary.jpg", title: "Secondary Nutrient Liquids", text: "(Ca, Mg, S)" },
  { img: "/images/liq-micro.jpg", title: "Micronutrient Liquids", text: "(Fe, Zn, Mn, Cu, B, Mo)" },
  { img: "/images/liq-specialty.jpg", title: "Specialty NPK Liquids", text: "(Custom Formulations)" },
];

const BIO = [
  { img: "/images/bio-humic.jpg", title: "Humic-Based Products" },
  { img: "/images/bio-seaweed.jpg", title: "Seaweed Products" },
  { img: "/images/bio-amino.jpg", title: "Amino Acid / Protein Hydrolysates" },
  { img: "/images/bio-other.jpg", title: "Other Plant Support Solutions" },
];

const CUSTOM = [
  { icon: FlaskConical, label: "Custom Nutrient Formulations" },
  { icon: Package, label: "OEM / Private Label Manufacturing" },
  { icon: Sprout, label: "Crop & Soil Specific Solutions" },
  { icon: Blend, label: "Flexible Packaging Options" },
];

export function ProductCatalog() {
  const [tab, setTab] = useState<TabId>("all");
  const show = (id: TabId) => tab === "all" || tab === id;

  return (
    <>
      <div className="container-page relative z-10 -mt-4">
        <div role="tablist" aria-label="Filter products" className="flex flex-wrap gap-2 rounded-md border border-line bg-white p-3 shadow-[0_4px_14px_rgba(2,42,32,0.08)]">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={`rounded-full border px-4 py-1.5 text-[12px] font-medium transition-colors ${
                tab === t.id
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-line bg-white text-ink hover:border-brand-600 hover:text-brand-600"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 space-y-px">
        {show("granulated") && (
          <Section
            id="granulated"
            theme="green"
            title="Granulated NPK Fertilizers"
            subtitle={<>Balanced Nutrition<br />for Every Crop</>}
            text="High-quality granulated NPK fertilisers designed to enhance soil fertility, promote healthy growth and deliver better yields."
            cta="View NPK Products"
          >
            <div className="grid gap-3 lg:grid-cols-[0.55fr_2fr]">
              <div className="relative hidden overflow-hidden rounded-md lg:block">
                <Image src="/images/prod-hand-granules.jpg" alt="Hand holding granulated NPK fertiliser" fill sizes="14vw" className="object-cover" />
              </div>
              <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {NPK.map((p) => (
                  <PackCard key={p.title} {...p} pack="50 kg (HDPE Bag)" tall />
                ))}
              </ul>
            </div>
          </Section>
        )}

        {show("organic") && (
          <Section
            id="organic"
            theme="brown"
            title="Organic Fertilizers & Soil Conditioners"
            subtitle={<>Enriching Soil.<br />Empowering Growth.</>}
            text="A range of organic fertilisers and soil conditioners that improve soil structure, enhance nutrient availability and promote long-term soil health."
            cta="View Organic Products"
          >
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
              {ORGANIC.map((p) => (
                <PackCard key={p.title} {...p} tall />
              ))}
            </ul>
          </Section>
        )}

        {show("potash") && (
          <Section
            id="potash"
            theme="orange"
            title="Potash & Value-Added Fertilizers"
            subtitle={<>Strengthening Crops<br />for Better Yields</>}
            text="Value-added potash products to enhance plant strength, improve quality and increase stress tolerance."
            cta="View Potash Products"
          >
            <div className="grid gap-3 lg:grid-cols-[1.1fr_1fr_0.9fr]">
              <div className="card-soft flex items-center gap-3 p-3">
                <div className="relative h-[110px] w-[100px] shrink-0">
                  <Image src="/images/pdm.jpg" alt="Potash Derived from Molasses bag" fill sizes="100px" className="object-contain" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[13px] font-semibold leading-tight">Potash Derived from Molasses (PDM)</h3>
                  <p className="mt-1 text-[12px] leading-snug text-muted">Potassium 14.5% (Min)</p>
                  <p className="text-[12px] leading-snug text-muted">Enhances plant strength and quality.</p>
                  <div className="mt-2 flex items-center justify-between gap-2 text-[11px]">
                    50 kg (Woven Bag)
                    <ArrowLink label="Enquire about Potash Derived from Molasses" />
                  </div>
                </div>
              </div>
              <BenefitList
                theme="orange"
                icon={TrendingUp}
                items={["Improves plant strength", "Enhances quality", "Better stress tolerance", "Supports higher yields"]}
              />
              <SideImage src="/images/sugarcane-plant.jpg" caption="From Natural Resources to Stronger Crops" />
            </div>
          </Section>
        )}

        {show("water-soluble") && (
          <Section
            id="water-soluble"
            theme="blue"
            title="Water-Soluble Fertilizers"
            subtitle={<>Quick Nutrition.<br />Visible Results.</>}
            text="High purity water-soluble fertilisers for fertigation and foliar application to meet the nutritional needs of crops efficiently."
            cta="View Water-Soluble Products"
          >
            <div className="grid gap-3 lg:grid-cols-[1.35fr_1fr_0.8fr]">
              <div className="card-soft flex items-center gap-4 p-3">
                <div className="relative h-[120px] w-[84px] shrink-0">
                  <Image src="/images/potassium-nitrate.jpg" alt="Potassium Nitrate 13:0:45 bag" fill sizes="90px" className="object-contain" />
                </div>
                <div className="min-w-0 text-[12px] leading-snug">
                  <h3 className="text-[13px] font-semibold leading-tight">Potassium Nitrate 13:0:45 Water-Soluble Fertilizer</h3>
                  <p className="mt-1 text-muted">High purity product for fertigation and foliar application.</p>
                  <p className="mt-2 font-semibold">Available Packing:</p>
                  <ul className="mt-0.5 list-disc pl-4 text-muted">
                    <li>1 kg</li>
                    <li>25 kg</li>
                  </ul>
                </div>
              </div>
              <BenefitList
                theme="blue"
                icon={Droplets}
                items={["100% Water Soluble", "High Purity", "Suitable for Drip & Foliar Use", "For High Value Crops"]}
              />
              <SideImage src="/images/bio-other.jpg" caption="Precision Nutrition for Higher Yields" />
            </div>
          </Section>
        )}

        {show("liquids") && (
          <Section
            id="liquids"
            theme="teal"
            title="Specialty Liquid Fertilizers"
            subtitle={<>Advanced Nutrition<br />for Higher Productivity</>}
            text="Specialty liquid fertilisers to meet specific crop requirements, improve nutrient uptake and enhance productivity."
            cta="Explore Liquid Products"
          >
            <div className="grid gap-3 lg:grid-cols-[2.6fr_0.8fr]">
              <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {LIQUIDS.map((p) => (
                  <li key={p.title} className="card-soft overflow-hidden">
                    <div className="relative h-[88px]">
                      <Image src={p.img} alt={p.title} fill sizes="(min-width: 1024px) 14vw, 40vw" className="object-cover" />
                    </div>
                    <div className="p-2.5">
                      <h3 className="text-[12px] font-semibold leading-tight text-[#0f7e7a]">{p.title}</h3>
                      <p className="mt-0.5 text-[11px] text-muted">{p.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <SideImage src="/images/bio-humic.jpg" caption="Tailored Nutrition for Every Stage" />
            </div>
          </Section>
        )}

        {show("bio-stimulants") && (
          <Section
            id="bio-stimulants"
            theme="purple"
            title="Bio-Stimulants & Plant Support Products"
            subtitle={<>Natural Solutions<br />for Resilient Crops</>}
            text="Bio-stimulants and plant support products to improve plant health, boost stress tolerance and enhance yield."
            cta="Explore Bio-Stimulants"
          >
            <div className="grid gap-3 lg:grid-cols-[2.6fr_0.8fr]">
              <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {BIO.map((p) => (
                  <li key={p.title} className="card-soft overflow-hidden">
                    <div className="relative h-[84px]">
                      <Image src={p.img} alt={p.title} fill sizes="(min-width: 1024px) 14vw, 40vw" className="object-cover" />
                    </div>
                    <h3 className="p-2.5 text-[12px] font-semibold leading-tight">{p.title}</h3>
                  </li>
                ))}
              </ul>
              <BenefitList
                theme="purple"
                icon={Zap}
                items={["Better nutrient uptake", "Enhanced stress tolerance", "Healthier and stronger plants", "Improved yield and quality"]}
              />
            </div>
          </Section>
        )}

        {show("custom") && (
          <Section
            id="custom"
            theme="teal"
            title="Custom Formulations / OEM & Private Label"
            subtitle={<>Your Requirements.<br />Our Expertise.</>}
            text="We develop tailor-made fertiliser and nutrient solutions as per your crop, soil and market needs. OEM and private label opportunities are available."
            cta="Discuss Your Requirement"
          >
            <div className="grid gap-3 lg:grid-cols-[2.6fr_1fr]">
              <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {CUSTOM.map(({ icon: Icon, label }) => (
                  <li key={label} className="card-soft flex flex-col items-center gap-2 px-2 py-5 text-center">
                    <span className="flex size-11 items-center justify-center rounded-full bg-[#0f8a86] text-white">
                      <Icon aria-hidden className="size-5" strokeWidth={1.5} />
                    </span>
                    <span className="text-[12px] font-medium leading-snug">{label}</span>
                  </li>
                ))}
              </ul>
              <div className="relative hidden min-h-[120px] overflow-hidden rounded-md bg-brand-900 lg:block">
                <Image src="/images/hero-plant-about.jpg" alt="" fill sizes="22vw" className="object-cover" />
                <div aria-hidden className="absolute inset-0 bg-brand-950/60" />
                <p className="relative p-4 text-[16px] font-semibold leading-snug text-white">
                  Partner with Us for Innovative Nutrition Solutions
                </p>
              </div>
            </div>
          </Section>
        )}
      </div>
    </>
  );
}

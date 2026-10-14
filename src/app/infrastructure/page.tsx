import type { Metadata } from "next";
import Image from "next/image";
import {
  ChartNoAxesColumn,
  Factory,
  Globe,
  Leaf,
  Lightbulb,
  Settings,
  ShieldCheck,
  FileText,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureStrip } from "@/components/sections/FeatureStrip";
import { CtaBand } from "@/components/sections/CtaBand";
import { DownloadsGrid } from "@/components/sections/DownloadsGrid";
import { Button } from "@/components/ui/Button";
import { DOWNLOADS } from "@/constants/site";

export const metadata: Metadata = {
  title: "Infrastructure, Research & Downloads",
  description:
    "Manufacturing units, quality control laboratory, storage and logistics, market research and downloadable company documents.",
};

const INFRA_FEATURES = [
  { icon: Factory, label: "Advanced Manufacturing Units" },
  { icon: Settings, label: "Efficient Production Processes" },
  { icon: ShieldCheck, label: "Strict Safety Standards" },
  { icon: Leaf, label: "Environmentally Responsible Operations" },
];

const INFRA_PHOTOS = [
  { src: "/images/infra-unit1.jpg", title: "Manufacturing Unit – Unit I", sub: "Granulated & Organic Fertilizers" },
  { src: "/images/infra-unit2.jpg", title: "Manufacturing Unit – Unit II", sub: "Specialty & Liquid Fertilizers" },
  { src: "/images/infra-lab.jpg", title: "Quality Control Laboratory", sub: "Advanced Testing Facilities" },
  { src: "/images/infra-storage.jpg", title: "Storage & Logistics", sub: "Reliable Supply Chain" },
  { src: "/images/infra-sustain.jpg", title: "Sustainable Practices", sub: "Effluent Treatment & Green Initiatives" },
];

const RESEARCH = [
  { icon: ChartNoAxesColumn, label: "Global & Domestic Market Analysis" },
  { icon: Leaf, label: "Crop & Soil Nutrient Trends" },
  { icon: Users, label: "Customer & Partner Feedback" },
  { icon: Lightbulb, label: "New Product Opportunities" },
  { icon: Globe, label: "Sustainable Agriculture Insights" },
];

function SectionHead({
  no,
  title,
  sub,
  text,
  cta,
}: {
  no: string;
  title: string;
  sub: string;
  text: string;
  cta: { label: string; href: string };
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="rounded-sm border border-line bg-brand-50 px-2 py-0.5 text-[12px] font-semibold text-brand-700">
          {no}
        </span>
        <span aria-hidden className="h-[2px] w-10 bg-brand-600" />
      </div>
      <h2 className="mt-3 text-[28px] font-semibold leading-tight">{title}</h2>
      <p className="mt-1 text-[16px] font-semibold leading-snug">{sub}</p>
      <p className="mt-2 text-[13px] leading-[1.6] text-muted">{text}</p>
      <Button href={cta.href} size="md" className="mt-4">
        {cta.label}
      </Button>
    </div>
  );
}

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        crumb="Infrastructure, Research & Downloads"
        title={
          <>
            Built on Strength.
            <br />
            Driven by Knowledge.
            <br />
            Shared for a Better Tomorrow.
          </>
        }
        description="Our facilities, market insights and knowledge resources work together to create value for farmers, partners and a healthier planet."
        image={{ src: "/images/hero-tank.jpg", alt: "Storage tank and process towers at the plant", position: "center 40%" }}
        script={["Stronger", "Facilities", "Smarter Insights", "Brighter", "Tomorrows"]}
        className="[&_h1]:text-[34px] lg:[&_h1]:text-[40px]"
      />
      <FeatureStrip
        items={[
          { icon: Settings, lines: ["Modern Infrastructure", "For consistent quality"] },
          { icon: ShieldCheck, lines: ["Research-Driven Approach", "Understanding market needs"] },
          { icon: FileText, lines: ["Knowledge Resources", "Access our latest documents"] },
          { icon: Leaf, lines: ["Sustainable Growth", "Creating value for a greener world"] },
        ]}
      />

      <section id="infrastructure" className="container-page mt-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.4fr]">
          <SectionHead
            no="01"
            title="Our Infrastructure"
            sub="Modern Facilities for a Brighter Future"
            text="Our state-of-the-art manufacturing facilities are equipped with advanced technology, efficient processes and robust quality control systems to ensure consistent, high-quality products."
            cta={{ label: "Explore Our Infrastructure", href: "/manufacturing" }}
          />
          <ul className="grid grid-cols-2 gap-3 self-start rounded-md bg-brand-50 p-3 sm:grid-cols-4">
            {INFRA_FEATURES.map(({ icon: Icon, label }) => (
              <li key={label} className="flex flex-col items-center gap-2 rounded-sm border border-line bg-white px-2 py-4 text-center">
                <Icon aria-hidden className="size-9 text-brand-600" strokeWidth={1.3} />
                <span className="text-[12px] font-medium leading-snug">{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <ul className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
          {INFRA_PHOTOS.map((p) => (
            <li key={p.title} className="relative aspect-[199/184] overflow-hidden rounded-[3px]">
              <Image src={p.src} alt={p.title} fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover" />
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-950/95 to-transparent" />
              <p className="absolute inset-x-0 bottom-0 p-2.5 text-white">
                <span className="block text-[13px] font-semibold leading-tight">{p.title}</span>
                <span className="mt-0.5 block text-[11px] leading-tight text-white/85">{p.sub}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section id="research" className="mt-10 bg-brand-50/70 py-8">
        <div className="container-page grid gap-6 lg:grid-cols-[0.8fr_1.4fr]">
          <SectionHead
            no="02"
            title="Market Research"
            sub="Insights for Informed Decisions"
            text="We continuously study global and domestic market trends, crop nutrition needs and emerging opportunities to develop solutions that create real value for farmers and our partners."
            cta={{ label: "Explore Market Insights", href: "/contact#enquiry" }}
          />
          <div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {RESEARCH.map(({ icon: Icon, label }) => (
                <li key={label} className="flex flex-col items-center gap-2 rounded-sm border border-line bg-white px-2 py-4 text-center">
                  <Icon aria-hidden className="size-8 text-brand-600" strokeWidth={1.3} />
                  <span className="text-[12px] font-medium leading-snug">{label}</span>
                </li>
              ))}
            </ul>
            <div className="relative mt-3 flex min-h-[92px] items-center overflow-hidden rounded-md bg-brand-900 text-white">
              <Image src="/images/research-hand.jpg" alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-left" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-950/70 to-brand-950/95" />
              <div className="relative ml-auto px-8 py-4 sm:w-[55%]">
                <p className="text-[20px] font-semibold leading-tight">Data. Insights. Solutions.</p>
                <p className="mt-1 text-[13px] text-white/90">Understanding today’s needs for a healthier tomorrow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="downloads" className="container-page mb-10 mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.4fr]">
        <SectionHead
          no="03"
          title="Downloads"
          sub="Documents at Your Fingertips"
          text="Access our company profile, product brochures, technical information and other resources to learn more about our solutions and capabilities."
          cta={{ label: "Browse All Downloads", href: "#downloads" }}
        />
        <DownloadsGrid docs={DOWNLOADS} />
      </section>

      <CtaBand
        title="Let’s Grow a Healthier Tomorrow"
        text="Together with the right infrastructure, deeper insights and shared knowledge, we can build a more sustainable and food-secure world."
        primary={{ label: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}

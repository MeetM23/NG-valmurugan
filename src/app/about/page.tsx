import type { Metadata } from "next";
import Image from "next/image";
import {
  Award,
  ChartNoAxesColumn,
  Eye,
  Factory,
  Gem,
  Globe,
  Handshake,
  Leaf,
  Settings,
  ShieldCheck,
  Target,
  FlaskConical,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureStrip } from "@/components/sections/FeatureStrip";
import { CtaBand } from "@/components/sections/CtaBand";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Velmurugan Fertiliser Company is an established fertiliser manufacturer in Villupuram, Tamil Nadu with more than 50 years of industry experience.",
};

const OVERVIEW_POINTS = [
  { icon: Factory, lines: ["Modern", "Manufacturing Facilities"] },
  { icon: FlaskConical, lines: ["Wide Product", "Development Capability"] },
  { icon: Settings, lines: ["Quality-Focused", "Operations"] },
  { icon: Globe, lines: ["Serving Global", "Customers"] },
  { icon: Handshake, lines: ["Long-Term", "Partnerships"] },
];

const JOURNEY = [
  { icon: Leaf, years: "1970+", text: "Early Foundations in Fertilizer Business" },
  { icon: Factory, years: "1980-1990", text: "Expanded Manufacturing & Market Presence" },
  { icon: Settings, years: "2000-2010", text: "Product Development & Customer Network Growth" },
  { icon: Globe, years: "2010-2020", text: "Strengthened Operations & Pan-India Reach" },
  { icon: ChartNoAxesColumn, years: "2020+", text: "Unit II Expansion, Specialty Products & International Markets" },
];

const VALUES = [
  "Customer Focus",
  "Integrity",
  "Quality",
  "Innovation",
  "Sustainable Growth",
  "Long-Term Partnerships",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        title="About Us"
        subtitle="A Strong Legacy. A Healthier Tomorrow."
        description="Velmurugan Fertiliser Company is an established fertilizer manufacturing enterprise with more than 50 years of industry experience, serving farmers and partners across Domestic, Pan-India and International markets."
        cta={{ label: "Our Journey", href: "#journey" }}
        image={{ src: "/images/hero-plant-about.jpg", alt: "Young plant in soil", position: "center 55%" }}
        script={["Nourishing", "Agriculture", "Enriching", "Tomorrow."]}
      />
      <FeatureStrip
        layout="stacked"
        items={[
          { icon: ShieldCheck, lines: ["Established", "Manufacturing Enterprise"] },
          { icon: Award, lines: ["50+ Years", "of Industry Experience"] },
          { icon: Factory, lines: ["Unit II", "Manufacturing Infrastructure"] },
          { icon: Globe, lines: ["Domestic | Pan-India", "International Markets"] },
          { icon: Leaf, lines: ["Value-Added &", "Specialty Nutrient Products"] },
        ]}
      />

      <section id="overview" className="container-page mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionTitle>Company Overview</SectionTitle>
          <p className="mt-4 text-[14px] leading-[1.65] text-muted">
            Velmurugan Fertiliser Company, based in Villupuram, Tamil Nadu, is a well-established fertilizer
            manufacturing enterprise with more than 50 years of experience in the fertilizer industry. The company
            has developed long-standing expertise in fertilizer manufacturing, product development, marketing,
            customer service and market expansion.
          </p>
          <p className="mt-4 text-[14px] leading-[1.65] text-muted">
            Through our Unit II manufacturing facility, we are strengthening our business with enhanced production
            capabilities, product diversification and a focus on value-added and specialty nutrient products. Our
            strategic direction is to serve the established domestic market, expand across Pan-India markets and
            develop a stronger international customer base.
          </p>
          <Button href="#values" className="mt-5">
            Our Strengths
          </Button>
        </div>

        <div className="grid overflow-hidden rounded-md bg-brand-900 text-white sm:grid-cols-[1.6fr_1fr]">
          <div className="relative min-h-[220px]">
            <Image
              src="/images/about-factory.jpg"
              alt="Unit II manufacturing structures against a blue sky"
              fill
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="object-cover"
            />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-950/95 to-transparent" />
            <p className="absolute inset-x-0 bottom-0 flex items-end gap-2 p-4 text-[13px] leading-snug">
              <span aria-hidden className="font-display text-[40px] leading-none text-brand-400">“</span>
              <span>Our purpose is to support sustainable agriculture with reliable, high-quality nutrient solutions.</span>
            </p>
          </div>
          <ul className="flex flex-col justify-center gap-3.5 px-5 py-5">
            {OVERVIEW_POINTS.map(({ icon: Icon, lines }) => (
              <li key={lines.join()} className="flex items-center gap-3 text-[12px] leading-snug">
                <Icon aria-hidden className="size-6 shrink-0 text-white" strokeWidth={1.3} />
                <span>
                  {lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="journey" className="container-page mt-10 border-t border-line pt-8">
        <SectionTitle>Our Journey</SectionTitle>
        <p className="mt-2 max-w-[560px] text-[14px] leading-snug text-muted">
          A legacy built on experience, strengthened by innovation, and driven by a commitment to farmers and
          partners worldwide.
        </p>
        <div className="mt-5 grid gap-6 lg:grid-cols-[2.6fr_1fr]">
          <ol className="grid gap-5 sm:grid-cols-5">
            {JOURNEY.map(({ icon: Icon, years, text }, i) => (
              <li key={years} className="relative">
                {i < JOURNEY.length - 1 && (
                  <span aria-hidden className="absolute left-[56px] right-0 top-[27px] hidden h-px bg-brand-400 sm:block" />
                )}
                <span className="relative flex size-[54px] items-center justify-center rounded-full border-2 border-brand-600 bg-brand-50 text-brand-600">
                  <Icon aria-hidden className="size-6" strokeWidth={1.4} />
                </span>
                <p className="mt-3 text-[15px] font-semibold">{years}</p>
                <p className="mt-1 max-w-[150px] text-[12px] leading-snug text-muted">{text}</p>
              </li>
            ))}
          </ol>
          <aside className="rounded-md bg-brand-50 p-5">
            <div className="flex gap-3">
              <Leaf aria-hidden className="size-6 shrink-0 fill-brand-600 text-brand-600" />
              <p className="font-display text-[17px] font-medium leading-snug">“From strong roots to a greener future.”</p>
            </div>
            <p className="mt-3 text-[12px] leading-relaxed text-muted">
              Continuing our commitment to agriculture, farmers and a healthier tomorrow.
            </p>
          </aside>
        </div>
      </section>

      <section id="values" className="container-page mt-8 grid gap-3 lg:grid-cols-[1fr_1fr_0.85fr_1.1fr]">
        <article className="rounded-md bg-brand-50 p-5">
          <h3 className="flex items-center gap-3 text-[18px] font-semibold">
            <Eye aria-hidden className="size-7 text-brand-600" strokeWidth={1.4} />
            Our Vision
          </h3>
          <p className="mt-3 text-[13px] leading-[1.6] text-muted">
            To be a reliable and technically capable fertilizer manufacturing partner, known for quality products,
            customer-focused solutions and long-term relationships across domestic and international markets.
          </p>
        </article>
        <article className="rounded-md bg-brand-50 p-5">
          <h3 className="flex items-center gap-3 text-[18px] font-semibold">
            <Target aria-hidden className="size-7 text-brand-600" strokeWidth={1.4} />
            Our Mission
          </h3>
          <p className="mt-3 text-[13px] leading-[1.6] text-muted">
            To manufacture and supply quality fertilizer and specialty nutrient products with clear specifications,
            reliable service and a strong commitment to sustainable agriculture and customer success.
          </p>
        </article>
        <article className="rounded-md bg-brand-50 p-5">
          <h3 className="flex items-center gap-3 text-[18px] font-semibold">
            <Gem aria-hidden className="size-7 text-brand-600" strokeWidth={1.4} />
            Our Values
          </h3>
          <ul className="mt-3 space-y-1.5 text-[13px] text-muted">
            {VALUES.map((v) => (
              <li key={v} className="flex items-center gap-2.5">
                <span aria-hidden className="size-1.5 rounded-full bg-brand-600" />
                {v}
              </li>
            ))}
          </ul>
        </article>
        <div className="relative min-h-[190px] overflow-hidden rounded-md">
          <Image src="/images/about-soil.jpg" alt="" fill sizes="(min-width: 1024px) 28vw, 100vw" className="object-cover object-left" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-white/70" />
          <div className="relative flex h-full items-end justify-end p-5">
            <p className="text-[13px] font-semibold leading-snug">
              Healthy Soil
              <br />
              Productive Crops
              <br />A Better Tomorrow
            </p>
          </div>
        </div>
      </section>

      <section id="team" className="container-page mb-10 mt-8 grid items-center gap-5 lg:grid-cols-[0.75fr_1.6fr_0.7fr]">
        <div>
          <SectionTitle>Leadership &amp; Team</SectionTitle>
          <p className="mt-3 text-[14px] leading-[1.65] text-muted">
            Our experienced leadership and dedicated team bring together deep industry knowledge, technical
            expertise and a shared commitment to delivering value to our customers, partners and the farming
            community.
          </p>
          <Button href="/contact" className="mt-5">
            Meet Our Team
          </Button>
        </div>
        <div className="relative aspect-[481/152] overflow-hidden rounded-md">
          <Image
            src="/images/about-team.jpg"
            alt="Members of the Velmurugan leadership and plant team in discussion"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <aside className="rounded-md bg-brand-50 p-5">
          <p className="font-display text-[20px] font-semibold leading-snug">
            “ People.
            <br />
            Process.
            <br />
            Progress.”
          </p>
          <p className="mt-3 text-[12px] leading-snug text-muted">Working together for a stronger, greener future.</p>
        </aside>
      </section>

      <CtaBand
        title="Let’s Grow a Healthier Tomorrow"
        text="Partner with us for reliable fertilizer solutions and a more sustainable future."
        primary={{ label: "Enquire Now", href: "/contact#enquiry" }}
      />
    </>
  );
}

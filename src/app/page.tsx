import Image from "next/image";
import Link from "next/link";
import {
  Award,
  FileText,
  Factory,
  Globe,
  Handshake,
  Leaf,
  Lightbulb,
  Package,
  Settings,
  ShieldCheck,
  Sprout,
  TrendingUp,
  Users,
  Ship,
  Tag,
} from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";
import { Button } from "@/components/ui/Button";
import { CertMark } from "@/components/ui/CertMark";
import { Eyebrow } from "@/components/ui/SectionTitle";
import { DOWNLOADS, downloadHref } from "@/constants/site";

const HERO_POINTS = [
  { icon: Factory, lines: ["Established", "Manufacturing", "Enterprise"] },
  { icon: Settings, lines: ["Unit II", "Manufacturing", "Infrastructure"] },
  { icon: Globe, lines: ["Serving", "Domestic, Pan-India &", "International Markets"] },
];

const STATS = [
  { icon: Factory, lines: ["Established", "Unit II Infrastructure"] },
  { icon: Package, lines: ["Wide Product", "Portfolio"] },
  { icon: ShieldCheck, lines: ["Quality", "Focused"] },
  { icon: Globe, lines: ["Domestic | Pan-India", "International Markets"] },
  { icon: Users, lines: ["Customer-Specific", "Formulations"] },
];

const STRENGTHS = [
  { icon: Sprout, label: "Sustainable Agriculture" },
  { icon: Leaf, label: "Soil Health" },
  { icon: TrendingUp, label: "Better Crop Yield" },
  { icon: Handshake, label: "Farmer Prosperity" },
  { icon: Globe, label: "A Greener Tomorrow" },
];

const PRODUCT_RANGE = [
  { src: "/images/home-granulated.jpg", name: "Granulated Fertilizers", text: "Balanced nutrients for better yield" },
  { src: "/images/home-water-soluble.jpg", name: "Water-Soluble Fertilizers", text: "High solubility for efficient nutrition" },
  { src: "/images/home-liquid.jpg", name: "Specialty Liquid Fertilizers", text: "Advanced nutrition for higher productivity" },
  { src: "/images/home-organic.jpg", name: "Organic & Soil Conditioners", text: "Natural and sustainable growth" },
  { src: "/images/home-bio.jpg", name: "Seaweed & Bio-Stimulants", text: "Natural solutions for plant vitality" },
  { src: "/images/home-micro.jpg", name: "Micronutrient Products", text: "Essential nutrients for stronger crops" },
  { src: "/images/home-custom.jpg", name: "Custom Formulations", text: "Solutions tailored to your needs" },
];

const MFG_PHOTOS = [
  "/images/eq-glr.jpg",
  "/images/eq-filterpress.jpg",
  "/images/eq-utility.jpg",
  "/images/eq-lab.jpg",
];

const INTL_POINTS = [
  { icon: Ship, label: "Export-Ready Capabilities" },
  { icon: Handshake, label: "Competitive Pricing" },
  { icon: FileText, label: "Reliable Documentation" },
  { icon: Globe, label: "Long-Term Partnerships" },
];

const WHY = [
  { icon: Award, lines: ["50+ Years", "of Experience"] },
  { icon: Factory, lines: ["Established", "Infrastructure"] },
  { icon: Settings, lines: ["Quality", "Focus"] },
  { icon: Lightbulb, lines: ["Product", "Development"] },
  { icon: Users, lines: ["Customer-Centric", "Approach"] },
  { icon: Globe, lines: ["Domestic, Pan-India", "& International"] },
  { icon: ShieldCheck, lines: ["Reliable", "Partnerships"] },
];

const CERTIFIED_SCOPE = [
  "Granulated NPK Fertilizers",
  "PROM (Phosphate Rich Organic Manure)",
  "CMS Soil Conditioner",
  "Potash Derived from Molasses (PDM)",
  "Water-Soluble Fertilizers",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#e9f2ec] to-[#f7faf6]">
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[56%]"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, #000 40%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 40%)",
          }}
        >
          <Image
            src="/images/hero-factory-mfg.jpg"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 62vw, 100vw"
            className="object-cover object-[60%_30%]"
          />
          <div aria-hidden className="absolute inset-0 bg-white/60 lg:hidden" />
        </div>
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-brand-600/70 via-brand-600/25 to-transparent" />

        <div className="container-page relative flex min-h-[560px] flex-col justify-center py-14">
          <h1 className="max-w-[580px] text-[38px] font-semibold leading-[1.12] text-brand-800 lg:text-[44px]">
            Fertilizer Manufacturing with 50+ Years of Industry Experience
          </h1>
          <p className="mt-5 max-w-[560px] text-[15px] leading-[1.65] text-ink/85">
            Manufacturing and supplying granulated fertilizers, water-soluble fertilizers, specialty liquid
            fertilizers and value-added nutrient products for Domestic, Pan-India and International markets.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
            {HERO_POINTS.map(({ icon: Icon, lines }) => (
              <li key={lines.join()} className="flex items-center gap-3 text-[12px] font-medium leading-tight">
                <span className="flex size-12 items-center justify-center rounded-full border border-brand-600 text-brand-600">
                  <Icon aria-hidden className="size-6" strokeWidth={1.3} />
                </span>
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
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/products">Explore Our Products</Button>
            <Button href="/international-business" variant="outline">
              International Enquiry
            </Button>
          </div>
        </div>

        <p
          aria-hidden
          className="pointer-events-none absolute right-10 top-8 hidden -rotate-6 font-script text-[28px] leading-tight text-brand-800 xl:block"
        >
          For a Greener
          <br />
          <span className="ml-6">Healthier Tomorrow</span>
        </p>
        <div className="absolute bottom-6 right-10 hidden items-center gap-3 rounded-md bg-white/95 px-5 py-3 shadow-md xl:flex">
          <Leaf aria-hidden className="size-7 fill-brand-600 text-brand-600" />
          <p className="text-[14px] font-semibold leading-snug text-brand-800">
            Nourishing Soil
            <br />
            Empowering Farmers
            <br />
            Growing a Better Tomorrow
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section aria-label="Company highlights" className="bg-brand-50">
        <ul className="container-page grid grid-cols-2 gap-y-5 py-5 md:grid-cols-3 lg:flex lg:gap-y-0">
          <li className="flex items-center gap-3 px-4 lg:flex-1 lg:justify-center">
            <Leaf aria-hidden className="size-9 fill-brand-600 text-brand-600" />
            <span className="font-display text-[38px] font-semibold leading-none text-brand-700">50+</span>
            <span className="text-[12px] leading-tight">
              Years of industry
              <br />
              Experience
            </span>
          </li>
          {STATS.map(({ icon: Icon, lines }) => (
            <li key={lines.join()} className="flex items-center gap-3 px-4 lg:flex-1 lg:justify-center lg:border-l lg:border-brand-100">
              <Icon aria-hidden className="size-9 shrink-0 text-brand-600" strokeWidth={1.3} />
              <span className="text-[12px] font-medium leading-tight">
                {lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Welcome */}
      <section className="container-page mt-10 grid items-stretch gap-6 lg:grid-cols-[1fr_0.95fr_0.7fr]">
        <div className="self-center">
          <Eyebrow>Welcome to Velmurugan Fertiliser Company</Eyebrow>
          <h2 className="mt-2 text-[32px] font-semibold leading-[1.15] text-brand-800">
            A Strong Legacy.
            <br />A Healthier Tomorrow.
          </h2>
          <p className="mt-4 text-[14px] leading-[1.65] text-muted">
            Velmurugan Fertiliser Company is an established fertilizer manufacturing enterprise based in Villupuram,
            Tamil Nadu, with more than 50 years of experience in the fertilizer industry.
          </p>
          <p className="mt-3 text-[14px] leading-[1.65] text-muted">
            With our Unit II manufacturing infrastructure and product development capabilities, we supply a wide
            range of fertilizer and specialty nutrient products for domestic, Pan-India and international markets,
            and we also work on customer-specific formulations.
          </p>
          <Button href="/about" className="mt-5">
            Our Story
          </Button>
        </div>
        <div className="relative min-h-[260px] overflow-hidden rounded-md">
          <Image src="/images/about-soil.jpg" alt="Young seedling in soil" fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
        </div>
        <ul className="flex flex-col justify-center gap-4 rounded-md bg-brand-900 px-6 py-6 text-white">
          {STRENGTHS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-[13px]">
              <Icon aria-hidden className="size-6 shrink-0 text-white" strokeWidth={1.3} />
              {label}
            </li>
          ))}
        </ul>
      </section>

      {/* Product range */}
      <section className="container-page mt-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <Eyebrow>Nutrition for every crop</Eyebrow>
            <h2 className="mt-1 text-[30px] font-semibold leading-tight">Our Product Range</h2>
          </div>
          <Link href="/products" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-600 hover:underline">
            View All Products <span aria-hidden>→</span>
          </Link>
        </div>
        <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {PRODUCT_RANGE.map((p) => (
            <li key={p.name} className="card-soft overflow-hidden">
              <Link href="/products" className="block h-full">
                <div className="relative aspect-[66/59]">
                  <Image src={p.src} alt="" fill sizes="(min-width: 1024px) 14vw, 25vw" className="object-cover" />
                </div>
                <div className="p-3">
                  <h3 className="text-[12.5px] font-semibold leading-tight">{p.name}</h3>
                  <p className="mt-1 text-[11px] leading-snug text-muted">{p.text}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Manufacturing */}
      <section className="mt-10 bg-brand-50/80 py-9">
        <div className="container-page grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Technology. Capability. Consistency.</Eyebrow>
            <h2 className="mt-2 text-[32px] font-semibold leading-tight text-brand-800">Manufacturing &amp; Unit II</h2>
            <p className="mt-4 text-[14px] leading-[1.65] text-muted">
              Our Unit II facility provides an established process platform with reaction, filtration, drying,
              formulation, storage and utility systems. With modern equipment and a dedicated team, we manufacture
              and develop a wide range of fertilizer and specialty nutrient products.
            </p>
            <Button href="/manufacturing" className="mt-5">
              Explore Our Manufacturing
            </Button>
          </div>
          <div className="grid h-[290px] grid-cols-[1.35fr_1fr_1fr] grid-rows-2 gap-2">
            <div className="relative row-span-2 overflow-hidden rounded-[3px]">
              <Image src="/images/hero-factory-mfg.jpg" alt="Unit II process plant" fill sizes="(min-width: 1024px) 28vw, 100vw" className="object-cover" />
            </div>
            {MFG_PHOTOS.map((src) => (
              <div key={src} className="relative overflow-hidden rounded-[3px]">
                <Image src={src} alt="" fill sizes="(min-width: 1024px) 16vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International */}
      <section className="relative isolate overflow-hidden bg-brand-950 text-white">
        <Image src="/images/hero-ship.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover object-[50%_60%] opacity-60" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950/95 via-brand-950/70 to-brand-950/30" />
        <div className="container-page grid items-center gap-8 py-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-400">
              Global opportunities. Stronger partnerships.
            </p>
            <h2 className="mt-2 text-[32px] font-semibold leading-tight">International Business</h2>
            <p className="mt-3 max-w-[480px] text-[14px] leading-[1.65] text-white/90">
              We are actively developing international business opportunities and welcoming enquiries from importers,
              distributors, fertilizer companies and agricultural businesses worldwide.
            </p>
            <Button href="/international-business" className="mt-5">
              International Enquiry
            </Button>
          </div>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {INTL_POINTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex flex-col items-center gap-3 text-center text-[13px] font-medium leading-snug">
                <Icon aria-hidden className="size-10 text-brand-400" strokeWidth={1.2} />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose us */}
      <section className="container-page mt-10">
        <Eyebrow>Our strength</Eyebrow>
        <h2 className="mt-1 text-[30px] font-semibold leading-tight">Why Choose Us</h2>
        <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {WHY.map(({ icon: Icon, lines }) => (
            <li key={lines.join()} className="card-soft flex flex-col items-center gap-2.5 px-2 py-5 text-center">
              <Icon aria-hidden className="size-9 text-brand-600" strokeWidth={1.3} />
              <span className="text-[12.5px] font-medium leading-snug">
                {lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* OEM + Quality */}
      <section className="container-page mb-10 mt-6 grid gap-4 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative isolate overflow-hidden rounded-md bg-brand-900 text-white">
          <Image src="/images/hero-plant-about.jpg" alt="" fill sizes="(min-width: 1024px) 45vw, 100vw" className="-z-10 object-cover object-left" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-brand-950/70 to-brand-950/95" />
          <div className="ml-auto flex min-h-[230px] max-w-[330px] flex-col justify-center gap-2 p-6 sm:max-w-[60%]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-400">OEM / Private label</p>
            <h2 className="text-[24px] font-semibold leading-tight">Your Brand. Our Manufacturing Capability.</h2>
            <p className="text-[13px] leading-snug text-white/90">
              We offer OEM and private-label manufacturing services for eligible products. From concept to final
              product, we ensure quality, confidentiality and reliability.
            </p>
            <div className="mt-2">
              <Button href="/contact#enquiry" size="sm">
                Discuss Your Requirement
              </Button>
            </div>
          </div>
        </div>

        <div className="card-soft grid gap-5 p-6 sm:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>Quality in every step</Eyebrow>
            <h2 className="mt-1 text-[24px] font-semibold leading-tight text-brand-800">Quality &amp; Certification</h2>
            <p className="mt-3 text-[13px] leading-[1.6] text-muted">
              Our Unit II is ISO 9001:2015 certified for specific products. We follow a robust quality control
              process and provide COA, TDS and SDS support where applicable.
            </p>
            <Button href="/quality" size="sm" className="mt-4">
              Our Quality Process
            </Button>
          </div>
          <div className="rounded-md border border-line p-4">
            <div className="flex items-center gap-3">
              <CertMark kind="iso" />
              <p className="font-display text-[13px] font-semibold leading-tight">
                ISO 9001:2015
                <span className="block text-[11px] font-medium tracking-wide text-brand-600">CERTIFIED</span>
              </p>
            </div>
            <ul className="mt-3 space-y-1.5">
              {CERTIFIED_SCOPE.map((s) => (
                <li key={s} className="flex items-start gap-2 text-[11.5px] leading-snug">
                  <Tag aria-hidden className="mt-0.5 size-3 shrink-0 text-brand-600" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-[10px] text-muted">(Certified Scope)</p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let’s Grow Agriculture Together Around the World."
        text="We are committed to delivering quality fertilizer and specialty nutrient solutions that create value for your business and the farmers you serve."
        primary={{ label: "Send an Enquiry", href: "/contact#enquiry" }}
        secondary={{ label: "Download Company Profile", href: downloadHref(DOWNLOADS[0]) }}
      />
    </>
  );
}

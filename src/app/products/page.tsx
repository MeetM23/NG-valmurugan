import type { Metadata } from "next";
import { FlaskConical, Globe, Leaf, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ProductCatalog } from "@/components/sections/ProductCatalog";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Granulated NPK, organic and soil conditioners, potash, water-soluble and specialty liquid fertilisers, bio-stimulants and custom formulations.",
};

const HIGHLIGHTS = [
  { icon: Leaf, lines: ["Wide Range", "of Products"] },
  { icon: ShieldCheck, lines: ["Consistent", "Quality"] },
  { icon: FlaskConical, lines: ["Backed by", "R&D"] },
  { icon: Globe, lines: ["Serving", "Global Markets"] },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        crumb="Products"
        title="Our Products"
        subtitle="Trusted Nutrition for a Greener Tomorrow"
        description="A comprehensive range of high-quality fertilisers, specialty nutrients and custom solutions for healthier soil, stronger crops and higher yields."
        image={{ src: "/images/hero-plant-products.jpg", alt: "Seedling leaves in morning light", position: "center 45%" }}
        script={["Healthy Soil", "Productive Crops", "Brighter Tomorrow"]}
        extra={
          <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
            {HIGHLIGHTS.map(({ icon: Icon, lines }) => (
              <li key={lines.join()} className="flex items-center gap-2.5 text-[12px] leading-tight text-white/95">
                <Icon aria-hidden className="size-7" strokeWidth={1.3} />
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
        }
      />
      <ProductCatalog />
      <CtaBand
        className="mt-6"
        title="Let’s Grow a Healthier Tomorrow"
        text="Partner with us for reliable products and a more sustainable future."
        primary={{ label: "Enquire Now", href: "/contact#enquiry" }}
      />
    </>
  );
}

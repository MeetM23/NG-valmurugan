import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface HeroImage {
  src: string;
  alt: string;
  /** CSS object-position, e.g. "center 40%". */
  position?: string;
}

interface PageHeroProps {
  /** Current page name shown in the breadcrumb. */
  crumb: string;
  title: ReactNode;
  subtitle?: string;
  description: string;
  cta?: { label: string; href: string };
  image: HeroImage;
  /** Handwritten tagline displayed at the top right of the hero. */
  script?: string[];
  /** Extra content rendered inside the hero's text column, below the CTA. */
  extra?: ReactNode;
  /** Extra content rendered in the right-hand area (cards, etc.). */
  aside?: ReactNode;
  className?: string;
}

function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className}>
      <path d="M20 3c-9 0-15 4-15 11 0 1.4.3 2.7.9 3.7C7.4 14 11 11 15 9.5 11.5 12 8.5 15.5 7 19.4c1.3.9 2.9 1.4 4.6 1.4C18 20.8 20 12 20 3Z" />
    </svg>
  );
}

export function PageHero({
  crumb,
  title,
  subtitle,
  description,
  cta,
  image,
  script,
  extra,
  aside,
  className = "",
}: PageHeroProps) {
  return (
    <section
      className={`relative isolate overflow-hidden bg-gradient-to-r from-brand-950 via-brand-900 to-brand-800 text-white ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 -z-10 w-full lg:right-[6%] lg:w-[50%]"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, #000 32%, #000 78%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 32%, #000 78%, transparent 100%)",
        }}
      >
        <Image
          src={image.src}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          style={{ objectPosition: image.position ?? "center" }}
        />
        <div className="absolute inset-0 bg-brand-950/55 lg:hidden" />
      </div>

      <div className="container-page relative flex min-h-[300px] flex-col justify-center py-8">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-[12px] text-white/85">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight aria-hidden className="size-3" />
          <span aria-current="page">{crumb}</span>
        </nav>
        <h1 className="text-[38px] font-semibold leading-[1.1] lg:text-[42px]">{title}</h1>
        {subtitle && <p className="mt-1 text-[19px] font-medium leading-snug lg:text-[21px]">{subtitle}</p>}
        <p className="mt-3 max-w-[540px] text-[14px] leading-[1.55] text-white/90">{description}</p>
        {cta && (
          <div className="mt-5">
            <Button href={cta.href} size="md">
              {cta.label}
            </Button>
          </div>
        )}
        {extra}
      </div>

      {script && (
        <p
          aria-hidden
          className="pointer-events-none absolute right-8 top-10 hidden -rotate-[8deg] font-script text-[26px] leading-[1.15] text-white xl:block"
        >
          {script.map((line, i) => (
            <span key={line} className="block" style={{ marginLeft: i * 10 }}>
              {line}
            </span>
          ))}
          <Leaf className="absolute -right-8 -top-5 size-10 rotate-[20deg] fill-brand-500" />
        </p>
      )}
      {aside}
    </section>
  );
}

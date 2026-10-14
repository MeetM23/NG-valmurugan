import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

interface CtaBandProps {
  title: string;
  text: ReactNode;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  image?: string;
  imagePosition?: string;
  className?: string;
}

/** Full-width dark-green call-to-action band with a faded photo on the right. */
export function CtaBand({
  title,
  text,
  primary,
  secondary,
  image = "/images/cta-field.jpg",
  imagePosition = "center",
  className = "",
}: CtaBandProps) {
  return (
    <section className={`relative isolate overflow-hidden bg-brand-900 text-white ${className}`}>
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 -z-10 w-full opacity-70 lg:w-[70%] lg:opacity-100"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, #000 55%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 55%)",
        }}
      >
        <Image
          src={image}
          alt=""
          fill
          sizes="70vw"
          className="object-cover"
          style={{ objectPosition: imagePosition }}
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-brand-950/35" aria-hidden />
      <div className="container-page flex flex-col gap-5 py-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[640px]">
          <h2 className="text-[26px] font-semibold leading-tight lg:text-[30px]">{title}</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-white/90">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={primary.href}>{primary.label}</Button>
          {secondary && (
            <Button href={secondary.href} variant="outline-light" arrow={false}>
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

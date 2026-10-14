import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Clock,
  Factory,
  Globe,
  Handshake,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  Mail,
  Ship,
} from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Velmurugan Fertiliser Company for product enquiries, business partnerships, export opportunities and general queries.",
};

const TOPICS = [
  { icon: Leaf, label: "Product Enquiries" },
  { icon: Handshake, label: "Business Partnerships" },
  { icon: Globe, label: "Export Opportunities" },
  { icon: MessageCircle, label: "General Queries" },
];

const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`;
const mapsDirections = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapQuery)}`;

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-brand-950 via-brand-900 to-brand-800 text-white">
        <div
          aria-hidden
          className="absolute inset-y-0 left-[34%] -z-10 hidden w-[34%] lg:block"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, #000 35%, #000 75%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 35%, #000 75%, transparent 100%)",
          }}
        >
          <Image src="/images/hero-plant-about.jpg" alt="" fill priority sizes="45vw" className="object-cover object-center" />
        </div>
        <div className="container-page grid items-center gap-8 py-10 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="text-[14px] font-medium uppercase tracking-wide">Contact Us</p>
            <h1 className="mt-3 text-[44px] font-semibold leading-[1.08] lg:text-[52px]">
              Let’s Grow
              <br />
              <span className="text-brand-400">a Greener</span>
              <br />
              Tomorrow
            </h1>
            <p className="mt-4 max-w-[400px] text-[14px] leading-[1.6] text-white/90">
              We are here to answer your queries, explore new opportunities and build lasting partnerships.
            </p>
            <ul className="mt-6 grid max-w-[460px] grid-cols-4 gap-3">
              {TOPICS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex flex-col items-center gap-2 text-center text-[12px] leading-tight">
                  <span className="flex size-[54px] items-center justify-center rounded-full border border-white/80">
                    <Icon aria-hidden className="size-6" strokeWidth={1.3} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <div id="enquiry" className="scroll-mt-28">
            <EnquiryForm />
          </div>
        </div>
      </section>

      <section className="container-page mt-8 grid gap-6 lg:grid-cols-[1fr_2fr]">
        <div>
          <SectionTitle size="lg">Contact Us</SectionTitle>
          <h2 className="mt-3 text-[20px] font-semibold">Get in Touch</h2>
          <p className="mt-2 text-[14px] leading-[1.6] text-muted">
            We look forward to hearing from you. Whether you are a farmer, distributor, business partner or
            investor, our team is ready to assist you.
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-3">
          <li className="rounded-md bg-brand-50 p-5 text-center">
            <Phone aria-hidden className="mx-auto size-8 text-brand-600" strokeWidth={1.4} />
            <h3 className="mt-2 text-[16px] font-semibold">Call Us</h3>
            {SITE.phones.map((p) => (
              <p key={p} className="mt-1 text-[13px]">
                <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-brand-600">
                  {p}
                </a>
              </p>
            ))}
          </li>
          <li className="rounded-md bg-brand-50 p-5 text-center">
            <Mail aria-hidden className="mx-auto size-8 text-brand-600" strokeWidth={1.4} />
            <h3 className="mt-2 text-[16px] font-semibold">Email Us</h3>
            <p className="mt-1 break-all text-[13px]">
              <a href={`mailto:${SITE.exportEmail}`} className="hover:text-brand-600">
                {SITE.exportEmail}
              </a>
            </p>
            <p className="mt-1 break-all text-[13px]">
              <a href={`mailto:${SITE.infoEmail}`} className="hover:text-brand-600">
                {SITE.infoEmail}
              </a>
            </p>
          </li>
          <li className="rounded-md bg-brand-50 p-5 text-center">
            <Clock aria-hidden className="mx-auto size-8 text-brand-600" strokeWidth={1.4} />
            <h3 className="mt-2 text-[16px] font-semibold">Business Hours</h3>
            <p className="mt-1 text-[13px]">Monday - Saturday</p>
            <p className="text-[13px]">9:00 AM - 6:00 PM (IST)</p>
            <p className="text-[13px]">Sunday - Closed</p>
          </li>
        </ul>
      </section>

      <section className="container-page mt-5 grid gap-4 lg:grid-cols-[0.8fr_2fr]">
        <div className="flex flex-col justify-center rounded-md bg-brand-800 p-6 text-white">
          <div className="flex gap-4">
            <MapPin aria-hidden className="mt-1 size-8 shrink-0 fill-brand-500 text-brand-500" />
            <div>
              <h2 className="text-[16px] font-semibold">Registered Office &amp; Manufacturing Unit I</h2>
              <address className="mt-3 text-[16px] not-italic leading-snug">
                {SITE.address.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
            </div>
          </div>
          <a
            href={mapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex h-11 w-fit items-center gap-2 rounded-[4px] border border-white/60 bg-brand-700 px-5 text-sm font-medium transition-colors hover:bg-brand-600"
          >
            Get Directions <ArrowRight aria-hidden className="size-4" />
          </a>
        </div>
        <div className="min-h-[240px] overflow-hidden rounded-md border border-line">
          <iframe
            title="Map showing the Velmurugan Fertiliser Company location near Arasur, Villupuram"
            src={mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[240px] w-full border-0"
          />
        </div>
      </section>

      <section className="container-page mb-10 mt-5 grid gap-4 md:grid-cols-3">
        <article className="card-soft overflow-hidden">
          <div className="relative aspect-[303/106]">
            <Image src="/images/contact-unit2.jpg" alt="Manufacturing Unit II" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
          </div>
          <div className="flex gap-3 p-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
              <Factory aria-hidden className="size-5" />
            </span>
            <div>
              <h3 className="text-[16px] font-semibold">Manufacturing Unit II</h3>
              <p className="mt-1 text-[13px] leading-snug text-muted">
                Asur Village, Thiruvennainallur Taluk, Villupuram District – 607 107, Tamil Nadu, India.
              </p>
            </div>
          </div>
        </article>
        <article className="card-soft overflow-hidden">
          <div className="relative aspect-[303/106]">
            <Image src="/images/contact-office.jpg" alt="Corporate office building in Chennai" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
          </div>
          <div className="flex gap-3 p-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
              <Building2 aria-hidden className="size-5" />
            </span>
            <div>
              <h3 className="text-[16px] font-semibold">Corporate Office (Chennai)</h3>
              <p className="mt-1 text-[13px] leading-snug text-muted">
                New No. 45, Old No. 21, 2nd Floor, 3rd Main Road, R.A. Puram, Chennai – 600 028, Tamil Nadu, India.
              </p>
            </div>
          </div>
        </article>
        <article className="card-soft overflow-hidden">
          <div className="relative aspect-[303/106]">
            <Image src="/images/contact-export.jpg" alt="Container terminal at sunset" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
          </div>
          <div className="flex gap-3 p-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
              <Ship aria-hidden className="size-5" />
            </span>
            <div>
              <h3 className="text-[16px] font-semibold">Export Division</h3>
              <p className="mt-1 text-[13px] leading-snug text-muted">
                For international enquiries, please contact our export team at{" "}
                <a href={`mailto:${SITE.exportEmail}`} className="break-all font-medium text-brand-600 hover:underline">
                  {SITE.exportEmail}
                </a>
              </p>
            </div>
          </div>
        </article>
      </section>

      <CtaBand
        title="Partner with Us for a Greener Tomorrow"
        text="Together, we can create a healthier, more productive and sustainable world."
        primary={{ label: "Start a Conversation", href: "#enquiry" }}
      />
    </>
  );
}

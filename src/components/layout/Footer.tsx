import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FOOTER_LINKS, FOOTER_PRODUCTS, SITE } from "@/constants/site";
import { SocialIcons } from "@/components/ui/SocialIcons";

const heading = "mb-4 text-[15px] font-semibold text-white";
const linkCls = "text-[13px] text-white/80 transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="overflow-x-clip bg-brand-900 text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.45fr]">
        <div>
          <Image
            src="/images/logo-footer.png"
            alt="Velmurugan Fertiliser Company"
            width={420}
            height={120}
            className="h-[60px] w-auto"
          />
          <p className="mt-5 flex gap-2 text-[13px] leading-relaxed text-white/85">
            <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
            <span>
              {SITE.address.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </span>
          </p>
          <SocialIcons className="mt-5" />
        </div>

        <nav aria-label="Quick links">
          <h2 className={heading}>Quick Links</h2>
          <ul className="space-y-2.5">
            {FOOTER_LINKS.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className={linkCls}>
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Our products">
          <h2 className={heading}>Our Products</h2>
          <ul className="space-y-2.5">
            {FOOTER_PRODUCTS.map((i) => (
              <li key={i.label}>
                <Link href={i.href} className={linkCls}>
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={heading}>Contact Us</h2>
          <ul className="space-y-3 text-[13px] text-white/85">
            <li className="flex items-center gap-2.5">
              <Phone aria-hidden className="size-4 text-brand-400" />
              <a href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}>{SITE.phones[0]}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle aria-hidden className="size-4 text-brand-400" />
              <a href={`tel:${SITE.phones[1].replace(/\s/g, "")}`}>{SITE.phones[1]}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail aria-hidden className="size-4 text-brand-400" />
              <a href={`mailto:${SITE.exportEmail}`} className="break-all">
                {SITE.exportEmail}
              </a>
            </li>
          </ul>
          <Link
            href="/contact#enquiry"
            className="mt-5 inline-flex h-11 items-center gap-2 rounded-[4px] bg-brand-600 px-5 text-sm font-medium text-white transition-colors hover:bg-brand-500"
          >
            Request a Call Back <ArrowRight aria-hidden className="size-4" />
          </Link>
          <p aria-hidden className="relative mt-9 -rotate-3 whitespace-nowrap font-script text-[22px] leading-snug text-white/95">
            Together for
            <br />
            <span className="ml-3">a Greener Tomorrow</span>
            <svg viewBox="0 0 24 24" className="absolute -top-3 left-[210px] size-8 rotate-12 fill-brand-500">
              <path d="M20 3c-9 0-15 4-15 11 0 1.4.3 2.7.9 3.7C7.4 14 11 11 15 9.5 11.5 12 8.5 15.5 7 19.4c1.3.9 2.9 1.4 4.6 1.4C18 20.8 20 12 20 3Z" />
            </svg>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 bg-brand-950">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-4 text-[12px] text-white/80 sm:flex-row">
          <p>© {SITE.copyrightYear} Velmurugan Fertiliser Company. All Rights Reserved.</p>
          <ul className="flex items-center gap-3">
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li aria-hidden className="h-3 w-px bg-white/30" />
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms &amp; Conditions
              </Link>
            </li>
            <li aria-hidden className="h-3 w-px bg-white/30" />
            <li>
              <Link href="/sitemap-page" className="hover:text-white">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

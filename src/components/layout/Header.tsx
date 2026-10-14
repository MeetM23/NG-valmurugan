"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/constants/site";

export function Header() {
  const pathname = usePathname();
  // Remember which path the menu was opened on so it closes itself on navigation.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label="Velmurugan Fertiliser Company – Home" className="shrink-0">
          <Image
            src="/images/logo-header.png"
            alt="Velmurugan Fertiliser Company – Nourishing Agriculture. Enriching Tomorrow."
            width={360}
            height={104}
            priority
            className="h-[52px] w-auto"
          />
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-[18px] whitespace-nowrap text-[12.5px] font-medium text-ink">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative block py-[26px] transition-colors hover:text-brand-600 ${
                      active ? "font-semibold text-brand-600" : ""
                    }`}
                  >
                    {item.label}
                    {active && <span aria-hidden className="absolute inset-x-0 bottom-[14px] h-[2px] bg-brand-600" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact#enquiry"
            className="hidden h-11 items-center gap-2 whitespace-nowrap rounded-[4px] bg-brand-600 px-6 text-sm font-medium text-white transition-colors hover:bg-brand-700 sm:inline-flex"
          >
            Enquire Now
            <ArrowRight aria-hidden className="size-4" />
          </Link>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded border border-line text-ink xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpenedOn(open ? null : pathname)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-white xl:hidden">
          <ul className="container-page flex flex-col py-2 text-sm font-medium">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block border-b border-line/70 py-3 ${active ? "text-brand-600" : "text-ink"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="py-3">
              <Link
                href="/contact#enquiry"
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-[4px] bg-brand-600 text-white"
              >
                Enquire Now <ArrowRight aria-hidden className="size-4" />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

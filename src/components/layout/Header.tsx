"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { NAV_GROUPS } from "@/constants/site";
import type { NavGroup } from "@/types";

export function Header() {
  const pathname = usePathname();
  // Remember which path the menu was opened on so it closes itself on navigation.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const isGroupActive = (item: NavGroup) =>
    item.children ? item.children.some((c) => isActive(c.href)) : isActive(item.href);

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
          <ul className="flex items-center gap-4 whitespace-nowrap text-[12.5px] font-medium text-ink">
            {NAV_GROUPS.map((item) => {
              const active = isGroupActive(item);
              return (
                <li key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    aria-current={active && !item.children ? "page" : undefined}
                    className={`relative flex items-center gap-1 py-[26px] transition-colors hover:text-brand-600 ${
                      active ? "font-semibold text-brand-600" : ""
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        aria-hidden
                        className="size-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                      />
                    )}
                    {active && <span aria-hidden className="absolute inset-x-0 bottom-[14px] h-[2px] bg-brand-600" />}
                  </Link>
                  {item.children && (
                    <ul className="invisible absolute left-0 top-full z-50 min-w-[220px] rounded-b-[4px] border border-line bg-white py-2 opacity-0 shadow-lg transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            aria-current={pathname === child.href ? "page" : undefined}
                            className={`block px-5 py-2.5 transition-colors hover:bg-brand-600/5 hover:text-brand-600 ${
                              pathname === child.href ? "font-semibold text-brand-600" : ""
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
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
            {NAV_GROUPS.map((item) => {
              const active = isGroupActive(item);
              if (item.children) {
                return (
                  <li key={item.label} className="border-b border-line/70">
                    <details open={active} className="group">
                      <summary
                        className={`flex cursor-pointer list-none items-center justify-between py-3 [&::-webkit-details-marker]:hidden ${
                          active ? "text-brand-600" : "text-ink"
                        }`}
                      >
                        {item.label}
                        <ChevronDown aria-hidden className="size-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <ul className="pb-2 pl-4">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              aria-current={pathname === child.href ? "page" : undefined}
                              className={`block py-2 text-[13px] ${
                                pathname === child.href ? "text-brand-600" : "text-ink/80"
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                );
              }
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

import type { Metadata } from "next";
import Link from "next/link";
import { SimplePage } from "@/components/sections/SimplePage";
import { NAV_GROUPS } from "@/constants/site";

export const metadata: Metadata = { title: "Sitemap" };

const linkCls = "text-brand-600 hover:underline";

export default function SitemapPage() {
  return (
    <SimplePage title="Sitemap">
      <ul className="space-y-3">
        {NAV_GROUPS.map((item) => (
          <li key={item.label}>
            {item.children ? (
              <>
                <span className="font-semibold text-brand-800">{item.label}</span>
                <ul className="mt-1.5 space-y-1.5 border-l border-line pl-4">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} className={linkCls}>
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link href={item.href} className={`${linkCls} font-semibold`}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
        <li>
          <span className="font-semibold text-brand-800">Legal</span>
          <ul className="mt-1.5 space-y-1.5 border-l border-line pl-4">
            <li>
              <Link href="/privacy-policy" className={linkCls}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className={linkCls}>
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </SimplePage>
  );
}

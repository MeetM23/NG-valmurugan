import type { Metadata } from "next";
import Link from "next/link";
import { SimplePage } from "@/components/sections/SimplePage";
import { NAV_ITEMS } from "@/constants/site";

export const metadata: Metadata = { title: "Sitemap" };

export default function SitemapPage() {
  return (
    <SimplePage title="Sitemap">
      <ul className="space-y-2">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-brand-600 hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/privacy-policy" className="text-brand-600 hover:underline">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/terms" className="text-brand-600 hover:underline">Terms &amp; Conditions</Link>
        </li>
      </ul>
    </SimplePage>
  );
}

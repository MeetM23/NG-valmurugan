import { Globe, Leaf, Mail, Phone } from "lucide-react";
import { SITE } from "@/constants/site";

export function TopBar() {
  return (
    <div className="bg-brand-950 text-[12px] text-white/90">
      <div className="container-page flex h-9 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <Leaf aria-hidden className="size-3.5 text-brand-400" />
            50+ Years of Industry Experience
          </span>
          <span className="hidden items-center gap-2 md:flex">
            <Globe aria-hidden className="size-3.5 text-brand-400" />
            Domestic | Pan-India | International Markets
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
            className="hidden items-center gap-2 hover:text-white sm:flex"
          >
            <Phone aria-hidden className="size-3.5 text-brand-400" />
            {SITE.phones[0]}
          </a>
          <a href={`mailto:${SITE.exportEmail}`} className="hidden items-center gap-2 hover:text-white lg:flex">
            <Mail aria-hidden className="size-3.5 text-brand-400" />
            {SITE.exportEmail}
          </a>
          <span className="flex items-center gap-1.5" aria-label="Language: English">
            <Globe aria-hidden className="size-3.5" />
            EN
          </span>
        </div>
      </div>
    </div>
  );
}

import type { LucideIcon } from "lucide-react";

export interface FeatureItem {
  icon: LucideIcon;
  /** Label lines as set in the reference; rendered on separate lines. */
  lines: string[];
}

interface FeatureStripProps {
  items: FeatureItem[];
  /** "inline" puts the icon beside the text; "stacked" centres it above. */
  layout?: "inline" | "stacked";
  className?: string;
}

/** White card of icon + label columns that overlaps the bottom of a page hero. */
export function FeatureStrip({ items, layout = "inline", className = "" }: FeatureStripProps) {
  const stacked = layout === "stacked";
  return (
    <div className={`container-page relative z-10 -mt-4 ${className}`}>
      <ul className="grid grid-cols-2 gap-y-5 rounded-md border border-line bg-white py-5 shadow-[0_4px_14px_rgba(2,42,32,0.08)] lg:flex lg:gap-y-0">
        {items.map(({ icon: Icon, lines }) => (
          <li
            key={lines.join(" ")}
            className={`flex px-4 lg:flex-1 lg:border-l lg:border-line lg:first:border-l-0 ${
              stacked
                ? "flex-col items-center gap-2 text-center"
                : "items-center gap-4 lg:justify-center"
            }`}
          >
            <Icon
              aria-hidden
              className={`shrink-0 text-brand-600 ${stacked ? "size-8" : "size-10"}`}
              strokeWidth={1.4}
            />
            <span className="text-[13px] font-medium leading-snug text-ink">
              {lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

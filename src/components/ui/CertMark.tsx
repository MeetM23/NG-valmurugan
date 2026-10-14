import { Landmark } from "lucide-react";

export type CertKind = "iso" | "fco" | "reach";

/** Simple vector marks standing in for certification logos until official artwork is supplied. */
export function CertMark({ kind, className = "" }: { kind: CertKind; className?: string }) {
  if (kind === "iso") {
    return (
      <span aria-hidden className={`flex flex-col items-center leading-none ${className}`}>
        <span className="relative flex h-10 w-14 items-center justify-center overflow-hidden rounded-full border-[3px] border-[#1a3f9c] font-display text-[22px] font-extrabold tracking-tight text-[#1a3f9c]">
          ISO
        </span>
      </span>
    );
  }
  if (kind === "fco") {
    return <Landmark aria-hidden className={`size-10 text-[#6b6b6b] ${className}`} strokeWidth={1.3} />;
  }
  const stars = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2;
    return { x: 30 + Math.cos(a) * 11, y: 20 + Math.sin(a) * 11 };
  });
  return (
    <svg aria-hidden viewBox="0 0 60 40" className={`h-10 w-[60px] ${className}`}>
      <rect width="60" height="40" fill="#0b3e9e" />
      {stars.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r="1.6" fill="#ffcc00" />
      ))}
    </svg>
  );
}

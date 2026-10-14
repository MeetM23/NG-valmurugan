import { SITE } from "@/constants/site";

const BASE =
  "inline-flex size-8 items-center justify-center rounded-[5px] transition-opacity hover:opacity-85";

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={SITE.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={`${BASE} bg-[#0a66c2]`}
      >
        <svg viewBox="0 0 24 24" className="size-[18px] fill-white" aria-hidden>
          <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.2a2 2 0 1 0 0 4.01 2 2 0 0 0 0-4.01ZM20.44 13.4c0-3.1-1.65-4.55-3.86-4.55-1.78 0-2.58.98-3.02 1.67V8.5h-3.37c.04.95 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.69.13-.93.27-.69.89-1.4 1.93-1.4 1.36 0 1.9 1.04 1.9 2.57V20h3.37v-6.6Z" />
        </svg>
      </a>
      <a
        href={SITE.social.youtube}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className={`${BASE} bg-[#e11d1d]`}
      >
        <svg viewBox="0 0 24 24" className="size-[20px]" aria-hidden>
          <rect x="3" y="6" width="18" height="12" rx="3.5" fill="#fff" />
          <path d="M10.2 9.4v5.2l4.6-2.6-4.6-2.6Z" fill="#e11d1d" />
        </svg>
      </a>
      <a
        href={SITE.social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={`${BASE} bg-[#1877f2]`}
      >
        <svg viewBox="0 0 24 24" className="size-[20px] fill-white" aria-hidden>
          <path d="M13.5 21v-7.4h2.5l.4-2.9h-2.9V8.9c0-.83.23-1.4 1.43-1.4h1.53V4.9c-.27-.04-1.18-.12-2.24-.12-2.2 0-3.7 1.34-3.7 3.8v2.12H8v2.9h2.5V21h3Z" />
        </svg>
      </a>
    </div>
  );
}

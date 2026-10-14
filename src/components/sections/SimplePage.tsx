import type { ReactNode } from "react";

export function SimplePage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="container-page py-14">
      <h1 className="text-[32px] font-semibold text-brand-800">{title}</h1>
      <div className="mt-4 max-w-[720px] space-y-3 text-[14px] leading-[1.7] text-muted">{children}</div>
    </section>
  );
}

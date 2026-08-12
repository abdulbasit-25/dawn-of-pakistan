import type { ReactNode } from "react";
import { SectionHeader } from "./SectionHeader";

export function PageShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string | undefined;
  title: string;
  subtitle?: string | undefined;
  children?: ReactNode;
}) {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-5 pt-32 pb-24 sm:px-8">
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      {children}
    </main>
  );
}
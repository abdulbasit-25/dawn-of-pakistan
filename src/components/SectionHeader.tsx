export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string | undefined;
  title: string;
  subtitle?: string | undefined;
}) {
  return (
    <header className="max-w-3xl">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
        {title}
      </h1>
      {subtitle && <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>}
    </header>
  );
}
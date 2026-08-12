export function PlaceholderNotice({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 border border-dashed border-border bg-card/60 px-6 py-8">
      <p className="eyebrow text-accent-foreground">Placeholder — content pending</p>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

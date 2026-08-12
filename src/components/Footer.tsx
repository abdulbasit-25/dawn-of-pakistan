import { Link } from "@tanstack/react-router";
import { NAV_ITEMS } from "./Navigation";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-display text-2xl tracking-tight">The First Dawn</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Pakistan — From the dream to the nation.
          </p>
          <p className="mt-8 max-w-md text-xs leading-relaxed text-muted-foreground">
            This project is an independent digital historical experience. Content is presented in
            three clearly separated tiers: <strong>verified historical sources</strong> (cited on
            every item), <strong>reconstructed or illustrative material</strong> (labelled as such),
            and <strong>AI-generated narration or explanation</strong> (always marked before it is
            read or heard). Nothing unlabelled should be read as archival fact.
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-3 self-start">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useLanguage } from "@/hooks/use-language";

export const NAV_ITEMS = [
  { label: "The Story", to: "/" },
  { label: "Timeline", to: "/timeline" },
  { label: "1947", to: "/first-dawn" },
  { label: "Voices", to: "/voices" },
  { label: "Map", to: "/map" },
  { label: "People", to: "/people" },
  { label: "Archive", to: "/archive" },
  { label: "Ask Pakistan", to: "/ask" },
] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);
  const { mode, toggle } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const { language, toggle: toggleLanguage } = useLanguage();

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 backdrop-blur-[2px] sm:px-8">
        <Link
          to="/"
          className="font-display text-sm tracking-[0.28em] uppercase text-foreground"
          aria-label="The First Dawn — home"
        >
          The First Dawn
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              <span className="border-b border-transparent pb-1 data-[active]:border-current">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${mode === "archive" ? "cinematic" : "archive"} mode`}
            className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            {mode === "archive" ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </button>
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={`Switch language to ${language === "en" ? "Urdu" : "English"}`}
            className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            {language.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none lg:hidden"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>

      {open && (
        <div className="pointer-events-auto fixed inset-0 z-50 flex flex-col bg-background px-6 py-5">
          <div className="flex items-center justify-between">
            <span className="font-display text-sm tracking-[0.28em] uppercase">The First Dawn</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid size-9 place-items-center rounded-full border border-border"
            >
              <X className="size-4" />
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-16 flex flex-col gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="font-display text-3xl text-muted-foreground data-[status=active]:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

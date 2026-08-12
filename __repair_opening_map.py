from pathlib import Path
root = Path(r"b:\flow\DEV1\Projects\the-first-dawn")
opening_path = root / "src" / "sections" / "OpeningNarrative.tsx"
opening_path.write_text("""import { motion } from \"motion/react\";
import { Link } from \"@tanstack/react-router\";
import { useReducedMotion } from \"@/hooks/use-reduced-motion\";

export function OpeningNarrative() {
  const reduced = useReducedMotion();
  const animation = reduced
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <section className=\"bg-background px-5 py-20 text-foreground sm:px-8\">
      <div className=\"mx-auto max-w-5xl space-y-10\">
        <motion.div {...animation}>
          <p className=\"eyebrow\">Opening Narrative</p>
          <h2 className=\"mt-4 text-4xl font-display tracking-tight text-foreground sm:text-5xl\">
            The first days of a new nation, told through people, places, and pivotal choices.
          </h2>
          <p className=\"mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg\">
            Explore the archive of Partition-era decisions, the geography of migration, and the stories that shaped Pakistan's creation. This site combines timelines, sourced documents, and interactive maps to make the history feel immediate and grounded.
          </p>
        </motion.div>

        <motion.div {...animation} className=\"grid gap-6 sm:grid-cols-2\">
          <Link
            to=\"/people\"
            className=\"rounded-3xl border border-border bg-card px-8 py-8 text-left transition hover:border-primary hover:bg-primary/10\"
          >
            <p className=\"text-sm uppercase tracking-[0.22em] text-muted-foreground\">People</p>
            <p className=\"mt-4 text-xl font-semibold text-foreground\">Biographies and leadership in 1947</p>
          </Link>
          <Link
            to=\"/map\"
            className=\"rounded-3xl border border-border bg-card px-8 py-8 text-left transition hover:border-primary hover:bg-primary/10\"
          >
            <p className=\"text-sm uppercase tracking-[0.22em] text-muted-foreground\">Map</p>
            <p className=\"mt-4 text-xl font-semibold text-foreground\">Geographic context for the new country</p>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
""", encoding="utf-8")

pakistan_path = root / "src" / "components" / "PakistanMap.tsx"
text = pakistan_path.read_text(encoding="utf-8")
text = text.replace(
    "const shapeName = feature?.properties?.shapeName as string | undefined;",
    "const shapeName = feature?.properties?.['shapeName'] as string | undefined;",
)
text = text.replace(
    "const shapeName = feature.properties?.shapeName as string | undefined;",
    "const shapeName = feature.properties?.['shapeName'] as string | undefined;",
)
pakistan_path.write_text(text, encoding="utf-8")
"}
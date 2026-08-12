import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const LINES = [
  "Before there was a nation, there was a dream.",
  "Before the flag, there was a struggle.",
  "Before the first dawn, there was a journey.",
];

export function OpeningNarrative() {
  const reduced = useReducedMotion();

  return (
    <section className="dark grain bg-background px-5 py-32 text-foreground sm:px-8 sm:py-44">
      <div className="mx-auto max-w-3xl space-y-10">
        {LINES.map((line, i) => (
          <motion.p
            key={line}
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, delay: reduced ? 0 : i * 0.15 }}
            className="font-display text-[clamp(1.5rem,4.5vw,2.75rem)] leading-tight text-foreground/85"
          >
            {line}
          </motion.p>
        ))}

        <motion.p
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.4, delay: reduced ? 0 : 0.3 }}
          className="pt-6 font-display text-[clamp(1.75rem,5.5vw,3.5rem)] leading-tight text-primary"
        >
          This is the story of Pakistan.
        </motion.p>
      </div>
    </section>
  );
}
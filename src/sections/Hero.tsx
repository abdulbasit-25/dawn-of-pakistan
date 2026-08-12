import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Hero() {
  const reduced = useReducedMotion();
  const step = (delay: number) =>
    reduced
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="dark grain relative flex min-h-screen flex-col justify-center bg-background px-5 py-32 text-foreground sm:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <motion.p {...step(0.1)} className="eyebrow">
          14 August 1947
        </motion.p>

        <motion.h1
          {...step(0.6)}
          className="mt-6 font-display text-[clamp(2.75rem,11vw,8rem)] leading-[0.92] tracking-[-0.02em]"
        >
          The First Dawn
        </motion.h1>

        <motion.p
          {...step(1.2)}
          className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          Pakistan — From the dream to the nation.
        </motion.p>

        <motion.div {...step(1.7)} className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/archive"
            className="inline-flex items-center justify-center border border-primary bg-primary px-7 py-3.5 text-[11px] tracking-[0.22em] uppercase text-primary-foreground transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
          >
            Enter the Archive
          </Link>
          <Link
            to="/timeline"
            className="inline-flex items-center justify-center border border-border px-7 py-3.5 text-[11px] tracking-[0.22em] uppercase text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            Explore the Timeline
          </Link>
        </motion.div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
      />
    </section>
  );
}

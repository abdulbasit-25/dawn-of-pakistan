import { AnimatePresence, motion } from "motion";
import type { Person } from "@/types";

export function PersonProfile({ person }: { person: Person }) {
  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={person.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.2 }}
        className="rounded-3xl border border-[#1C211E]/10 bg-[#F4F0E6]/70 p-6 shadow-sm"
      >
        <div className="space-y-3 sm:flex sm:items-start sm:justify-between sm:gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#6D736C]">{person.role}</p>
            <h2 className="mt-2 text-3xl font-serif text-[#123C2A]">{person.name}</h2>
            {person.lifespan ? (
              <p className="mt-2 text-sm text-[#6D736C]">{person.lifespan}</p>
            ) : null}
          </div>
          <div className="rounded-3xl bg-white p-5 text-sm text-[#1C211E]/90">
            <p className="font-semibold text-[#123C2A]">Verification</p>
            <p className="mt-2 text-sm text-[#6D736C]">{person.verification}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl bg-white p-6">
            <h3 className="text-base font-semibold text-[#123C2A]">Biography</h3>
            <p className="mt-4 text-sm leading-relaxed text-[#1C211E]/90">{person.biography}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#6D736C]">Contributions</p>
                <ul className="mt-3 space-y-2 text-sm text-[#1C211E]/90">
                  {person.contributions.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#6D736C]">Sources</p>
                <ul className="mt-3 space-y-2 text-sm text-[#1C211E]/90">
                  {person.sources.map((source) => (
                    <li key={source.label}>
                      {source.url ? (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="underline underline-offset-2 hover:text-[#123C2A]"
                        >
                          {source.label}
                        </a>
                      ) : (
                        source.label
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6">
            <h3 className="text-base font-semibold text-[#123C2A]">Context</h3>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#1C211E]/90">
              {person.relatedEvents ? (
                <div>
                  <p className="uppercase tracking-[0.18em] text-[#6D736C]">
                    Related timeline events
                  </p>
                  <p className="mt-2">{person.relatedEvents.join(", ")}</p>
                </div>
              ) : null}
              {person.relatedPlaces ? (
                <div>
                  <p className="uppercase tracking-[0.18em] text-[#6D736C]">Related locations</p>
                  <p className="mt-2">{person.relatedPlaces.join(", ")}</p>
                </div>
              ) : null}
              {person.portrait ? (
                <div className="rounded-3xl border border-[#1C211E]/10 bg-[#F4F0E6]/80 p-4 text-sm text-[#6D736C]">
                  {person.portrait}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </motion.article>
    </AnimatePresence>
  );
}

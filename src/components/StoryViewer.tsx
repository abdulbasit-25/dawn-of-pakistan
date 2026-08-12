import { AnimatePresence, motion } from "motion";
import { type Story } from "@/types";

export function StoryViewer({ story }: { story: Story }) {
  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={story.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="rounded-3xl border border-[#1C211E]/10 bg-[#F4F0E6]/70 p-6 shadow-sm"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#6D736C]">{story.personName}</p>
            <h2 className="mt-2 text-2xl font-serif text-[#123C2A]">
              A journey from {story.origin} to {story.destination}
            </h2>
          </div>
          {story.verification === "reconstructed" ? (
            <span className="rounded-full bg-[#F3E2D8] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#8C4C2A]">
              Reconstructed account
            </span>
          ) : null}
        </div>

        <div className="mt-6 space-y-6">
          <div className="rounded-3xl bg-white p-5">
            <p className="text-sm leading-relaxed text-[#1C211E]/90">{story.story}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-4 rounded-3xl bg-white p-5">
              <h3 className="text-base font-semibold text-[#123C2A]">Historical context</h3>
              <p className="text-sm leading-relaxed text-[#1C211E]/90">{story.context}</p>
            </div>

            <div className="space-y-4 rounded-3xl bg-white p-5">
              <h3 className="text-base font-semibold text-[#123C2A]">Route</h3>
              <ol className="space-y-3 text-sm text-[#1C211E]/90">
                {story.route.map((place, index) => (
                  <li key={place} className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#E6E1D6] text-xs font-semibold text-[#123C2A]">
                      {index + 1}
                    </span>
                    <span>{place}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {story.audioUrl ? (
            <div className="rounded-3xl bg-white p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[#123C2A]">Audio narration</p>
                  <p className="text-xs text-[#6D736C]">
                    Optional playback only. No autoplay.
                    {story.audioIsAiGenerated ? " AI-generated narration." : ""}
                  </p>
                </div>
                {story.audioIsAiGenerated ? (
                  <span className="rounded-full bg-[#F3E2D8] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#8C4C2A]">
                    AI-generated narration
                  </span>
                ) : null}
              </div>
              <audio controls preload="none" className="mt-4 w-full rounded-xl bg-[#F4F0E6] p-2">
                <source src={story.audioUrl} />
                Your browser does not support audio playback.
              </audio>
            </div>
          ) : null}

          <div className="rounded-3xl bg-white p-5">
            <h3 className="text-base font-semibold text-[#123C2A]">Sources</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#1C211E]/90">
              {story.sources.map((source) => (
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
      </motion.article>
    </AnimatePresence>
  );
}

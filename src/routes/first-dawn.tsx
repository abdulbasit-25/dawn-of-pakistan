import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { events } from "@/data/events";

export const Route = createFileRoute("/first-dawn")({
  head: () => ({
    meta: [
      { title: "1947 — The First Dawn" },
      {
        name: "description",
        content:
          "The final days before independence, 14 August 1947, the first government, and the earliest challenges of nation-building.",
      },
      { property: "og:title", content: "1947 — The First Dawn" },
      { property: "og:description", content: "14 August 1947 and the birth of Pakistan." },
    ],
  }),
  component: FirstDawnPage,
});

function FirstDawnPage() {
  const spotlightEvents = events.filter((event) => event.spotlight);

  return (
    <PageShell
      eyebrow="Spotlight"
      title="1947 — The First Dawn"
      subtitle="The final days before independence, and the morning a nation woke up."
    >
      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
        A focused look at the Lahore Resolution, the launch of Pakistan on 14 August 1947, and the
        first steps of the new government amid the upheaval of Partition.
      </p>

      <div className="mt-10 space-y-8">
        {spotlightEvents.map((event) => (
          <article
            key={event.id}
            className="rounded-3xl border border-[#1C211E]/15 bg-[#F4F0E6] p-8 shadow-sm"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#6D736C]">
                  {event.date ?? event.year}
                </p>
                <h2 className="mt-2 text-3xl font-serif text-[#123C2A]">{event.title}</h2>
              </div>
              <span className="rounded-full bg-[#B99A5B]/15 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#7A5B24]">
                Spotlight
              </span>
            </div>

            {event.image ? (
              <div className="mt-6 overflow-hidden rounded-3xl bg-[#E6E1D6] p-6 text-sm text-[#6D736C]">
                {event.image}
              </div>
            ) : null}

            <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm leading-relaxed text-[#1C211E]/90">{event.description}</p>
              </div>
              <div className="rounded-3xl border border-[#1C211E]/10 bg-white p-5 text-sm text-[#1C211E]/90">
                <p className="font-semibold text-[#123C2A]">Significance</p>
                <p className="mt-3">{event.significance}</p>
                {event.location ? (
                  <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#6D736C]">
                    Location: {event.location}
                  </p>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}

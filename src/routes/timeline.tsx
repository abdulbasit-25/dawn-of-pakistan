import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Timeline } from "@/components/Timeline";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Timeline — The First Dawn" },
      {
        name: "description",
        content:
          "An interactive timeline of Pakistan's history, from 1857 through independence in 1947 to the present day.",
      },
      { property: "og:title", content: "Timeline — The First Dawn" },
      {
        property: "og:description",
        content: "Milestones in Pakistan's history, sourced and dated.",
      },
    ],
  }),
  component: TimelinePage,
});

function TimelinePage() {
  return (
    <PageShell
      eyebrow="Chapter I"
      title="The Timeline"
      subtitle="From 1857 to the present — the milestones that made a nation."
    >
      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
        Explore the milestones that shaped the path toward 1947 and the early history of Pakistan.
        On desktop, drag or scroll the horizontal timeline; on mobile, expand each stop in the
        vertical timeline.
      </p>
      <div className="mt-10">
        <Timeline />
      </div>
      <div className="mt-10 rounded-3xl border border-[#1C211E]/15 bg-[#F4F0E6]/80 p-6 shadow-sm">
        <p className="text-xs uppercase tracking-[0.22em] text-[#6D736C]">1947 spotlight</p>
        <h2 className="mt-2 text-2xl font-serif text-[#123C2A]">
          The final days before independence
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#1C211E]/90">
          The Lahore Resolution and the independence of 14 August 1947 are highlighted in the
          timeline. For a deeper focus on the first government, refugee migration, and early
          nation-building, visit the dedicated 1947 spotlight.
        </p>
        <Link
          to="/first-dawn"
          className="mt-5 inline-flex rounded-full bg-[#123C2A] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#0f2a20]"
        >
          Explore 1947 — THE FIRST DAWN
        </Link>
      </div>
    </PageShell>
  );
}

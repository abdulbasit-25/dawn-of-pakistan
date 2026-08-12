import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { MapPanels } from "@/components/MapPanels";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Maps — The First Dawn" },
      {
        name: "description",
        content:
          "Partition-era migration routes and a present-day interactive map of Pakistan's provinces, rivers, mountains and coast.",
      },
      { property: "og:title", content: "Maps — The First Dawn" },
      { property: "og:description", content: "Migration routes and the geography of Pakistan." },
    ],
  }),
  component: MapPage,
});

function MapPage() {
  return (
    <PageShell
      eyebrow="Chapter III"
      title="The Map"
      subtitle="Migration in 1947, and the land as it stands today."
    >
      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
        Partition-era migration and the modern geography of Pakistan are shown side by side here.
        Routes are presented as sourced approximations to avoid passing uncertain historical
        boundaries as exact.
      </p>

      <div className="mt-10">
        <MapPanels />
      </div>
    </PageShell>
  );
}

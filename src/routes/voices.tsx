import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { StoryCard } from "@/components/StoryCard";
import { StoryViewer } from "@/components/StoryViewer";
import { stories } from "@/data/stories";

export const Route = createFileRoute("/voices")({
  head: () => ({
    meta: [
      { title: "Voices of 1947 — The First Dawn" },
      {
        name: "description",
        content:
          "Personal accounts of Partition and migration in 1947. History is not only dates. It is people.",
      },
      { property: "og:title", content: "Voices of 1947 — The First Dawn" },
      { property: "og:description", content: "Personal accounts of Partition and migration." },
    ],
  }),
  component: VoicesPage,
});

function VoicesPage() {
  const [selectedId, setSelectedId] = useState(stories[0]?.id ?? "");
  const selectedStory = stories.find((story) => story.id === selectedId) ?? stories[0];

  return (
    <PageShell
      eyebrow="Chapter II"
      title="Voices of 1947"
      subtitle="History is not only dates. It is people."
    >
      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
        These stories trace personal journeys during Partition and the first migrations in 1947.
        Every entry includes a route, context, and source attribution; reconstructed accounts are
        clearly labeled.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(280px,1fr)_minmax(420px,1.2fr)]">
        <div className="space-y-4">
          {stories.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              selected={story.id === selectedId}
              onSelect={() => setSelectedId(story.id)}
            />
          ))}
        </div>

        <div className="space-y-4">
          {selectedStory ? <StoryViewer story={selectedStory} /> : null}
        </div>
      </div>
    </PageShell>
  );
}

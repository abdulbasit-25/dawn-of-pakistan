import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { AskGuide } from "@/components/AskGuide";

export const Route = createFileRoute("/ask")({
  head: () => ({
    meta: [
      { title: "Ask Pakistan — The First Dawn" },
      {
        name: "description",
        content:
          "Explore the archive with an AI historical guide grounded only in this site's sourced dataset.",
      },
      { property: "og:title", content: "Ask Pakistan — The First Dawn" },
      { property: "og:description", content: "An AI guide grounded in the archive." },
    ],
  }),
  component: AskPage,
});

function AskPage() {
  return (
    <PageShell
      eyebrow="Chapter VI"
      title="Ask Pakistan"
      subtitle="Explore the archive with an AI historical guide."
    >
      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
        Ask Pakistan about the archive's timeline, people, migration stories, and geography. Answers are served by a backend endpoint that uses the site's own curated dataset.
      </p>

      <div className="mt-10">
        <AskGuide />
      </div>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ArchiveExplorer } from "@/components/ArchiveExplorer";

export const Route = createFileRoute("/archive")({
  head: () => ({
    meta: [
      { title: "Historical Archive — The First Dawn" },
      {
        name: "description",
        content:
          "A searchable archive of documents, photographs, maps and speeches from Pakistan's history.",
      },
      { property: "og:title", content: "Historical Archive — The First Dawn" },
      { property: "og:description", content: "Documents, photographs, maps and speeches." },
    ],
  }),
  component: ArchivePage,
});

function ArchivePage() {
  return (
    <PageShell
      eyebrow="Chapter V"
      title="The Historical Archive"
      subtitle="Documents, photographs, maps, and speeches — each with its source."
    >
      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
        Search the archive by year, category and location. Every item is clearly sourced and labeled
        with its verification status.
      </p>

      <div className="mt-10">
        <ArchiveExplorer />
      </div>
    </PageShell>
  );
}

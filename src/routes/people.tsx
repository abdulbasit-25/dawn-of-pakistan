import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PersonCard } from "@/components/PersonCard";
import { PersonProfile } from "@/components/PersonProfile";
import { people } from "@/data/people";

export const Route = createFileRoute("/people")({
  head: () => ({
    meta: [
      { title: "People — The First Dawn" },
      {
        name: "description",
        content:
          "The people who shaped Pakistan: founders, thinkers, and leaders, with sourced biographies.",
      },
      { property: "og:title", content: "People — The First Dawn" },
      { property: "og:description", content: "The people who shaped a nation." },
    ],
  }),
  component: PeoplePage,
});

function PeoplePage() {
  const [selectedId, setSelectedId] = useState(people[0]?.id ?? "");
  const selectedPerson = people.find((person) => person.id === selectedId) ?? people[0];

  return (
    <PageShell
      eyebrow="Chapter IV"
      title="People Who Shaped the Nation"
      subtitle="Founders, thinkers, and the lives behind the dates."
    >
      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
        Explore archival biographies of leaders and thinkers whose ideas, speeches, and decisions shaped the path to Pakistan.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(280px,1fr)_minmax(520px,1.2fr)]">
        <div className="space-y-4">
          {people.map((person) => (
            <PersonCard
              key={person.id}
              person={person}
              selected={person.id === selectedId}
              onSelect={() => setSelectedId(person.id)}
            />
          ))}
        </div>
        <div>{selectedPerson ? <PersonProfile person={selectedPerson} /> : null}</div>
      </div>
    </PageShell>
  );
}

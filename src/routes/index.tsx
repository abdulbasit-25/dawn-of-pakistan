import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/sections/Hero";
import { OpeningNarrative } from "@/sections/OpeningNarrative";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The First Dawn — Pakistan, from the dream to the nation" },
      {
        name: "description",
        content:
          "A cinematic digital archive of Pakistan's journey: the independence movement, 14 August 1947, and the nation today.",
      },
      { property: "og:title", content: "The First Dawn — Pakistan, from the dream to the nation" },
      {
        property: "og:description",
        content:
          "A cinematic digital archive of Pakistan's journey, from the independence movement to today.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <h1 className="sr-only">The First Dawn — Pakistan, from the dream to the nation</h1>
      <Hero />
      <OpeningNarrative />
    </main>
  );
}

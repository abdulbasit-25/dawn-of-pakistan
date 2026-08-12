import { documents } from "@/data/documents";
import { events } from "@/data/events";
import { migrationRoutes } from "@/data/routes";
import { people } from "@/data/people";
import { places } from "@/data/places";
import { stories } from "@/data/stories";

function normalizeText(text: string) {
  return text.trim().toLowerCase();
}

function findBestMatch(question: string) {
  const normalized = normalizeText(question);

  const exactEvent = events.find((event) =>
    normalizeText(event.title).includes(normalized) || normalized.includes(event.id),
  );
  if (exactEvent) {
    return {
      answer: `${exactEvent.title} (${exactEvent.year}) — ${exactEvent.description}`,
      sources: exactEvent.sources.map((source) => source.label),
    };
  }

  const exactPerson = people.find((person) =>
    normalizeText(person.name).includes(normalized) || normalizeText(person.role).includes(normalized),
  );
  if (exactPerson) {
    return {
      answer: `${exactPerson.name} was ${exactPerson.role}. ${exactPerson.biography}`,
      sources: exactPerson.sources.map((source) => source.label),
    };
  }

  const exactStory = stories.find((story) =>
    normalizeText(story.personName).includes(normalized) || story.route.some((point) => normalizeText(point).includes(normalized)),
  );
  if (exactStory) {
    return {
      answer: `${exactStory.personName}'s story follows a migration path from ${exactStory.origin} to ${exactStory.destination}. ${exactStory.context}`,
      sources: exactStory.sources.map((source) => source.label),
    };
  }

  const exactPlace = places.find((place) => normalizeText(place.name).includes(normalized));
  if (exactPlace) {
    return {
      answer: `${exactPlace.name} is a ${exactPlace.category} with significance as: ${exactPlace.summary}`,
      sources: exactPlace.sources.map((source) => source.label),
    };
  }

  const exactDocument = documents.find((item) =>
    normalizeText(item.title).includes(normalized) || normalizeText(item.category).includes(normalized),
  );
  if (exactDocument) {
    return {
      answer: `${exactDocument.title} (${exactDocument.category}) — ${exactDocument.description}`,
      sources: exactDocument.sources.map((source) => source.label),
    };
  }

  return null;
}

export function answerArchiveQuestion(question: string, mode: string) {
  const normalized = normalizeText(question);

  const directMatch = findBestMatch(normalized);
  if (directMatch) {
    const prefix =
      mode === "DETAILED"
        ? "Based on the archive dataset, here is the information I found:\n"
        : "Here is what the archive contains:\n";
    return {
      answer: `${prefix}${directMatch.answer}`,
      sources: directMatch.sources,
    };
  }

  if (normalized.includes("migration") || normalized.includes("route") || normalized.includes("partition")) {
    const routeNames = migrationRoutes.map((route) => route.label).join(", ");
    const answer = `The archive includes migration routes such as ${routeNames}. These routes are presented as sourced approximations to reflect the historical uncertainty from 1947.`;
    return {
      answer,
      sources: migrationRoutes.flatMap((route) => route.sources.map((source) => source.label)),
    };
  }

  if (normalized.includes("people") || normalized.includes("leader") || normalized.includes("founder")) {
    const names = people.map((person) => person.name).join(", ");
    return {
      answer: `The archive includes biographies of people such as ${names}. Each entry is linked to verified or reconstructed sources where available.`,
      sources: people.flatMap((person) => person.sources.map((source) => source.label)),
    };
  }

  if (normalized.includes("archive") || normalized.includes("source") || normalized.includes("document")) {
    const categories = Array.from(new Set(documents.map((item) => item.category))).join(", ");
    return {
      answer: `This archive holds items across categories like ${categories}. Every item is labeled with its source and verification status.`,
      sources: documents.flatMap((item) => item.sources.map((source) => source.label)),
    };
  }

  return {
    answer:
      "I do not have a verified answer for that question from this archive. Please ask about the timeline, people, migration stories, places, or documented materials included in the site.",
    sources: [],
  };
}

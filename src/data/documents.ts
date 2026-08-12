import type { ArchiveItem } from "@/types";

export const documents: ArchiveItem[] = [
  {
    id: "lahore-resolution-text",
    title: "The Lahore Resolution",
    category: "Documents",
    year: 1940,
    location: "Lahore",
    author: "All-India Muslim League",
    description:
      "The political resolution adopted in Lahore calling for autonomous Muslim-majority regions in British India.",
    verification: "verified",
    sources: [
      {
        label: "Wikipedia — Lahore Resolution",
        url: "https://en.wikipedia.org/wiki/Lahore_Resolution",
      },
    ],
  },
  {
    id: "karachi-independence-photo",
    title: "Independence celebration in Karachi",
    category: "Photographs",
    year: 1947,
    location: "Karachi",
    description:
      "A photograph capturing the first Independence Day celebrations in Karachi, Pakistan's first capital.",
    verification: "verified",
    sources: [
      {
        label: "Britannica — Partition of India",
        url: "https://www.britannica.com/event/Partition-of-India",
      },
    ],
  },
  {
    id: "partition-map-1947",
    title: "1947 Partition map",
    category: "Maps",
    year: 1947,
    location: "South Asia",
    description:
      "A historical map of the Radcliffe Line and the new boundaries drawn between India and Pakistan.",
    verification: "verified",
    sources: [
      {
        label: "National Archives — Partition maps",
        url: "https://www.nationalarchives.gov.uk/education/partitions",
      },
    ],
  },
  {
    id: "jinnah-speech",
    title: "Muhammad Ali Jinnah's Speech to the Constituent Assembly",
    category: "Speeches",
    year: 1947,
    location: "Karachi",
    description:
      "A landmark speech defining the principles of the new state and its commitment to religious freedom.",
    verification: "verified",
    sources: [
      {
        label: "Constitutional history archives",
        url: "https://www.constitution.org/primarysources/pakistan/jinnah.htm",
      },
    ],
  },
  {
    id: "partition-refugee-story",
    title: "Refugee migration from Punjab",
    category: "Stories",
    year: 1947,
    location: "Punjab",
    description:
      "A reconstructed narrative representing refugees who traveled to Karachi and Lahore during partition.",
    verification: "reconstructed",
    sources: [
      {
        label: "Partition Museum — Oral histories",
        url: "https://www.partitionmuseum.org/oral-histories/",
      },
    ],
  },
];

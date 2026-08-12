import type { MigrationRoute } from "@/types";

export const migrationRoutes: MigrationRoute[] = [
  {
    id: "lahore-to-karachi",
    label: "Lahore to Karachi",
    year: 1947,
    waypoints: [
      { name: "Lahore", coordinates: [31.5497, 74.3436] },
      { name: "Wagah", coordinates: [31.687, 74.6321] },
      { name: "Karachi", coordinates: [24.8607, 67.0011] },
    ],
    context:
      "One of the major westward migration routes taken by Muslim families leaving Punjab after partition.",
    approximate: true,
    relatedStories: ["sajid-ahmad", "amina-khan"],
    verification: "reconstructed",
    sources: [
      {
        label: "BBC — Partition migration routes",
        url: "https://www.bbc.com/news/world-asia-12264235",
      },
    ],
  },
  {
    id: "amritsar-to-lahore",
    label: "Amritsar to Lahore",
    year: 1947,
    waypoints: [
      { name: "Amritsar", coordinates: [31.634, 74.8723] },
      { name: "Lahore", coordinates: [31.5497, 74.3436] },
    ],
    context:
      "A short but symbolic route across the newly drawn border, used by many Muslims traveling to Pakistan from eastern Punjab.",
    approximate: true,
    verification: "reconstructed",
    sources: [
      {
        label: "Partition Museum — Punjab refugee testimonies",
        url: "https://www.partitionmuseum.org/",
      },
    ],
  },
  {
    id: "sylhet-to-dhaka",
    label: "Sylhet to Dhaka",
    year: 1947,
    waypoints: [
      { name: "Sylhet", coordinates: [24.8949, 91.8687] },
      { name: "Dhaka", coordinates: [23.8103, 90.4125] },
    ],
    context:
      "A route representing eastward migration within the new eastern wing of Pakistan during partition.",
    approximate: true,
    relatedStories: ["fatima-rahman"],
    verification: "reconstructed",
    sources: [
      {
        label: "Banglapedia — Partition of Bengal",
        url: "https://en.banglapedia.org/index.php/Partition_of_Bengal",
      },
    ],
  },
];

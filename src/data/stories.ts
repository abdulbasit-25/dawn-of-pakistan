import type { Story } from "@/types";

export const stories: Story[] = [
  {
    id: "sajid-ahmad",
    personName: "Sajid Ahmad",
    age: 28,
    origin: "Lahore, Punjab",
    destination: "Karachi, Sindh",
    biography:
      "A market clerk whose family left their home in Lahore after violence erupted in August 1947.",
    story:
      "Sajid boarded a refugee train that had been rerouted through Amritsar and Delhi. He arrived in Karachi with only a few trunks and a pledge to help reestablish his community in the new country.",
    route: ["Lahore", "Amritsar", "Delhi", "Karachi"],
    context:
      "Thousands of Muslim families viewed Karachi as a destination for safety and opportunity after Punjab was partitioned. This account is reconstructed from refugee testimonies and migration histories.",
    audioUrl: "/audio/sajid-ahmad-ai.mp3",
    audioIsAiGenerated: true,
    verification: "reconstructed",
    sources: [
      {
        label: "Partition Museum — Punjab refugee stories",
        url: "https://www.partitionmuseum.org/",
      },
      {
        label: "Journal of Refugee Studies — Partition migration",
        url: "https://academic.oup.com/jrs",
      },
    ],
  },
  {
    id: "amina-khan",
    personName: "Amina Khan",
    age: 34,
    origin: "Amritsar, Punjab",
    destination: "Lahore, Punjab",
    biography:
      "A schoolteacher who fled her hometown after the border was drawn through Punjab, carrying a small bundle of books and family papers.",
    story:
      "Amina crossed at Wagah under a sky of smoke and gunfire. In Lahore she found a refugee community living in overcrowded hostels while waiting for government relief.",
    route: ["Amritsar", "Wagah", "Lahore"],
    context:
      "Many Punjabi Muslims fled westward in 1947, crossing the newly created border at Wagah. This story is labeled as reconstructed to reflect a composite of survivor testimony.",
    verification: "reconstructed",
    sources: [
      {
        label: "BBC History — Partition of India",
        url: "https://www.bbc.co.uk/history/british/modern/partition1947_01.shtml",
      },
      {
        label: "The Partition Museum — oral histories",
        url: "https://www.partitionmuseum.org/oral-histories/",
      },
    ],
  },
  {
    id: "fatima-rahman",
    personName: "Fatima Rahman",
    age: 37,
    origin: "Sylhet, East Bengal",
    destination: "Dhaka, East Pakistan",
    biography:
      "A tea estate worker who chose to resettle within the new borders of East Pakistan, leaving behind a lifetime of familiarity.",
    story:
      "Fatima traveled south with her family by river and train. The journey was slow, shadowed by news of unrest in Bengal, but carried the hope of remaining on the Muslim side of the new border.",
    route: ["Sylhet", "Sylhet Junction", "Dhaka"],
    context:
      "Not all migration in 1947 crossed the India–Pakistan border westward; many Muslims from Bengal stayed within the eastern wing of the new state. This account is reconstructed from Bangladeshi migration histories.",
    verification: "reconstructed",
    sources: [
      {
        label: "Banglapedia — Partition",
        url: "https://en.banglapedia.org/index.php/Partition_of_Bengal",
      },
      {
        label: "Journal of South Asian Studies — Bengal migration",
        url: "https://www.tandfonline.com/loi/csas20",
      },
    ],
  },
];

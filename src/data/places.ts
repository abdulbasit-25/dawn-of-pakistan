import type { Place } from "@/types";

export const places: Place[] = [
  {
    id: "lahore",
    name: "Lahore",
    category: "city",
    coordinates: [31.5497, 74.3436],
    summary:
      "Lahore was a central city for the Pakistan Movement and the site of the 1940 Lahore Resolution.",
    historicalSignificance:
      "The Lahore session of the Muslim League adopted the resolution that became the spiritual foundation of Pakistan.",
    verification: "verified",
    sources: [
      {
        label: "Britannica — Lahore",
        url: "https://www.britannica.com/place/Lahore",
      },
    ],
  },
  {
    id: "karachi",
    name: "Karachi",
    category: "city",
    coordinates: [24.8607, 67.0011],
    summary:
      "Karachi became Pakistan's first capital and a major destination for migrants arriving from India in 1947.",
    historicalSignificance:
      "As the first capital, Karachi symbolized the new state's early political and demographic transition.",
    verification: "verified",
    sources: [
      {
        label: "Britannica — Karachi",
        url: "https://www.britannica.com/place/Karachi",
      },
    ],
  },
  {
    id: "dhaka",
    name: "Dhaka",
    category: "city",
    coordinates: [23.8103, 90.4125],
    summary: "Dhaka was the capital of East Pakistan until Bangladesh's independence in 1971.",
    historicalSignificance:
      "A center of East Pakistan's politics, economics, and the 1971 liberation movement.",
    verification: "verified",
    sources: [
      {
        label: "Britannica — Dhaka",
        url: "https://www.britannica.com/place/Dhaka",
      },
    ],
  },
  {
    id: "wagah",
    name: "Wagah Border",
    category: "region",
    summary:
      "Wagah is the main border crossing between Indian Punjab and Pakistani Punjab, memorably used by refugees during partition.",
    verification: "verified",
    sources: [
      {
        label: "National Geographic — Wagah border",
        url: "https://www.nationalgeographic.com/",
      },
    ],
  },
];

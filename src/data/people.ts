import type { Person } from "@/types";

export const people: Person[] = [
  {
    id: "muhammad-ali-jinnah",
    name: "Muhammad Ali Jinnah",
    urduName: "محمد علی جناح",
    role: "Founder of Pakistan",
    lifespan: "1876–1948",
    biography:
      "A lawyer and statesman who led the All-India Muslim League and negotiated the creation of Pakistan. Jinnah is widely regarded as the principal founder of the nation.",
    contributions: [
      "Led the demand for a separate Muslim homeland",
      "Negotiated the terms of partition with British and Indian leaders",
      "Served as Pakistan's first Governor-General",
    ],
    relatedEvents: ["1940-lahore-resolution", "1947-independence"],
    relatedPlaces: ["Karachi", "Lahore"],
    portrait: "Placeholder: archival portrait of Muhammad Ali Jinnah.",
    verification: "verified",
    sources: [
      {
        label: "BBC — Muhammad Ali Jinnah",
        url: "https://www.bbc.com/news/world-asia-62007558",
      },
      {
        label: "Britannica — Muhammad Ali Jinnah",
        url: "https://www.britannica.com/biography/Mohammed-Ali-Jinnah",
      },
    ],
  },
  {
    id: "fatima-jinnah",
    name: "Fatima Jinnah",
    urduName: "فاطمہ جناح",
    role: "Leader of the Women's Movement",
    lifespan: "1893–1967",
    biography:
      "A dental surgeon, writer, and political activist, Fatima Jinnah supported the Pakistan Movement and later became a symbol of civil liberties and democratic opposition.",
    contributions: [
      "Promoted the role of women in the struggle for independence",
      "Advocated for democratic governance after independence",
      "Served as an important public voice for the early republic",
    ],
    relatedEvents: ["1947-independence"],
    relatedPlaces: ["Karachi"],
    portrait: "Placeholder: archival portrait of Fatima Jinnah.",
    verification: "verified",
    sources: [
      {
        label: "Britannica — Fatima Jinnah",
        url: "https://www.britannica.com/biography/Fatima-Jinnah",
      },
      {
        label: "National Assembly of Pakistan — Fatima Jinnah biography",
        url: "https://na.gov.pk/en/content.php?id=73",
      },
    ],
  },
  {
    id: "liaquat-ali-khan",
    name: "Liaquat Ali Khan",
    urduName: "لیاقت علی خان",
    role: "First Prime Minister of Pakistan",
    lifespan: "1895–1951",
    biography:
      "A close ally of Jinnah, Liaquat Ali Khan became Pakistan's first prime minister and steered the country through its earliest constitutional and diplomatic challenges.",
    contributions: [
      "Oversaw the first government of Pakistan",
      "Helped draft the early constitutional framework",
      "Established Pakistan's first foreign policy positions",
    ],
    relatedEvents: ["1947-independence", "1948-jinnah-kashmir"],
    relatedPlaces: ["Karachi", "Islamabad"],
    portrait: "Placeholder: archival portrait of Liaquat Ali Khan.",
    verification: "verified",
    sources: [
      {
        label: "Britannica — Liaquat Ali Khan",
        url: "https://www.britannica.com/biography/Liaquat-Ali-Khan",
      },
      {
        label: "Pakistan Government Archives — Early leadership",
        url: "https://www.pakistan.gov.pk/",
      },
    ],
  },
];

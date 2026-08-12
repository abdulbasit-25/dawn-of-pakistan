// src/data/pakistan-geo.ts
//
// Reference geographic data for the interactive Pakistan map.
// Province polygon geometry is NOT stored here — it's fetched at runtime
// from geoBoundaries (see PakistanMap.tsx) since it's large and best kept
// out of the JS bundle. Everything else (cities, rivers, ranges) is a small,
// hand-checked set of real coordinates.
//
// River paths are DELIBERATELY simplified to a handful of waypoints for a
// schematic on-map line — they are not survey-accurate hydrology. Label
// copy in the UI should say so; do not present them as precise.

export interface GeoSource {
  label: string;
  url?: string;
}

export interface CityPoint {
  id: string;
  name: string;
  lat: number;
  lng: number;
  province: string;
  note?: string;
}

export interface RiverPath {
  id: string;
  name: string;
  /** Ordered, simplified waypoints from source/entry to confluence or delta */
  path: [number, number][];
  description: string;
  sources: GeoSource[];
}

export interface RangePoint {
  id: string;
  name: string;
  lat: number;
  lng: number;
  description: string;
  sources: GeoSource[];
}

export interface ProvinceInfo {
  /** Must match the `shapeName` property in the geoBoundaries ADM1 dataset */
  shapeName: string;
  displayName: string;
  capital: string;
  description: string;
  sources: GeoSource[];
}

export const cities: CityPoint[] = [
  { id: "islamabad", name: "Islamabad", lat: 33.6844, lng: 73.0479, province: "Islamabad Capital Territory", note: "Federal capital, purpose-built from 1960 onward" },
  { id: "lahore", name: "Lahore", lat: 31.5497, lng: 74.3436, province: "Punjab" },
  { id: "karachi", name: "Karachi", lat: 24.8607, lng: 67.0011, province: "Sindh", note: "Pakistan's first capital (1947–1959) and largest city" },
  { id: "peshawar", name: "Peshawar", lat: 34.0151, lng: 71.5249, province: "Khyber Pakhtunkhwa" },
  { id: "quetta", name: "Quetta", lat: 30.1798, lng: 66.9750, province: "Balochistan" },
  { id: "multan", name: "Multan", lat: 30.1575, lng: 71.5249, province: "Punjab" },
  { id: "rawalpindi", name: "Rawalpindi", lat: 33.5651, lng: 73.0169, province: "Punjab" },
  { id: "gilgit", name: "Gilgit", lat: 35.9208, lng: 74.3144, province: "Gilgit-Baltistan" },
  { id: "muzaffarabad", name: "Muzaffarabad", lat: 34.3700, lng: 73.4711, province: "Azad Jammu and Kashmir" },
  { id: "skardu", name: "Skardu", lat: 35.2971, lng: 75.6333, province: "Gilgit-Baltistan" },
  { id: "gwadar", name: "Gwadar", lat: 25.1242, lng: 62.3255, province: "Balochistan", note: "Deep-water port on the Arabian Sea" },
];

export const rivers: RiverPath[] = [
  {
    id: "indus",
    name: "Indus",
    path: [
      [35.5, 74.9],
      [34.1, 73.2],
      [33.0, 71.9],
      [29.9, 70.4],
      [27.7, 68.9],
      [24.8, 67.4],
    ],
    description:
      "Pakistan's principal river, flowing the length of the country from the Karakoram/Himalaya region to the Arabian Sea, and the backbone of the country's irrigation system.",
    sources: [{ label: "Britannica — Indus River", url: "https://www.britannica.com/place/Indus-River" }],
  },
  {
    id: "jhelum",
    name: "Jhelum",
    path: [
      [34.4, 73.6],
      [33.0, 73.7],
      [31.2, 72.9],
    ],
    description:
      "Rises in Kashmir and flows southwest to join the Chenab, one of the five historic rivers of the Punjab.",
    sources: [{ label: "Britannica — Jhelum River", url: "https://www.britannica.com/place/Jhelum-River" }],
  },
  {
    id: "chenab",
    name: "Chenab",
    path: [
      [32.9, 75.9],
      [32.0, 74.2],
      [30.9, 71.8],
    ],
    description:
      "Enters Pakistani Punjab from Jammu and merges with the Jhelum and later the Sutlej system on its way to the Indus.",
    sources: [{ label: "Britannica — Chenab River", url: "https://www.britannica.com/place/Chenab-River" }],
  },
  {
    id: "ravi",
    name: "Ravi",
    path: [
      [32.2, 75.1],
      [31.55, 74.34],
      [30.6, 72.1],
    ],
    description: "Passes directly through Lahore before joining the Chenab further downstream.",
    sources: [{ label: "Britannica — Ravi River", url: "https://www.britannica.com/place/Ravi-River" }],
  },
  {
    id: "sutlej",
    name: "Sutlej",
    path: [
      [31.1, 75.3],
      [29.7, 71.9],
      [29.3, 71.1],
    ],
    description:
      "The easternmost of the five Punjab rivers, joining the Chenab–Indus system near the Panjnad confluence.",
    sources: [{ label: "Britannica — Sutlej River", url: "https://www.britannica.com/place/Sutlej-River" }],
  },
];

export const ranges: RangePoint[] = [
  {
    id: "karakoram",
    name: "Karakoram",
    lat: 35.88,
    lng: 76.51,
    description:
      "Home to K2, the world's second-highest peak, and one of the most heavily glaciated regions outside the polar areas.",
    sources: [{ label: "Britannica — Karakoram Range", url: "https://www.britannica.com/place/Karakoram-Range" }],
  },
  {
    id: "himalayas",
    name: "Himalayas (western extent)",
    lat: 35.24,
    lng: 74.59,
    description:
      "The western Himalayan ranges reach into northern Pakistan, including the Nanga Parbat massif.",
    sources: [{ label: "Britannica — Himalayas", url: "https://www.britannica.com/place/Himalayas" }],
  },
  {
    id: "hindu-kush",
    name: "Hindu Kush",
    lat: 36.28,
    lng: 71.84,
    description: "Stretches along Pakistan's northwest, into Chitral, and onward into Afghanistan.",
    sources: [{ label: "Britannica — Hindu Kush", url: "https://www.britannica.com/place/Hindu-Kush" }],
  },
];

export const deserts: RangePoint[] = [
  {
    id: "thar",
    name: "Thar Desert",
    lat: 25.5,
    lng: 70.2,
    description: "A large arid region straddling southeastern Sindh and the Pakistan–India border.",
    sources: [{ label: "Britannica — Thar Desert", url: "https://www.britannica.com/place/Thar-Desert" }],
  },
  {
    id: "cholistan",
    name: "Cholistan Desert",
    lat: 29.0,
    lng: 72.0,
    description: "An extension of the Thar in southern Punjab, historically linked to the now-dry Hakra riverbed.",
    sources: [{ label: "Britannica — Cholistan", url: "https://www.britannica.com/place/Cholistan-Desert" }],
  },
];

/**
 * Basic per-province summaries. Deliberately short and general — this is a
 * starting point, not a finished gazetteer. Anything not yet verified should
 * stay out rather than be guessed at.
 *
 * `shapeName` values should be checked against whatever the live geoBoundaries
 * PAK ADM1 file actually returns and adjusted if they don't match exactly.
 */
export const provinces: ProvinceInfo[] = [
  {
    shapeName: "Punjab",
    displayName: "Punjab",
    capital: "Lahore",
    description:
      "Pakistan's most populous province, historically the heartland of the 1947 Partition migration and home to Lahore, the site of the 1940 Resolution.",
    sources: [{ label: "Britannica — Punjab, Pakistan", url: "https://www.britannica.com/place/Punjab-province-Pakistan" }],
  },
  {
    shapeName: "Sindh",
    displayName: "Sindh",
    capital: "Karachi",
    description:
      "Home to Karachi, Pakistan's first capital and largest city, and to the Indus delta.",
    sources: [{ label: "Britannica — Sindh", url: "https://www.britannica.com/place/Sindh" }],
  },
  {
    shapeName: "Khyber Pakhtunkhwa",
    displayName: "Khyber Pakhtunkhwa",
    capital: "Peshawar",
    description: "A mountainous northwestern province bordering Afghanistan, centered on the Peshawar valley.",
    sources: [{ label: "Britannica — Khyber Pakhtunkhwa", url: "https://www.britannica.com/place/Khyber-Pakhtunkhwa" }],
  },
  {
    shapeName: "Balochistan",
    displayName: "Balochistan",
    capital: "Quetta",
    description:
      "Pakistan's largest province by area and least densely populated, stretching along the Arabian Sea coast to Gwadar.",
    sources: [{ label: "Britannica — Balochistan, Pakistan", url: "https://www.britannica.com/place/Balochistan-province-Pakistan" }],
  },
  {
    shapeName: "Gilgit-Baltistan",
    displayName: "Gilgit-Baltistan",
    capital: "Gilgit",
    description:
      "A mountainous northern territory containing much of the Karakoram range; its constitutional status differs from that of the four provinces.",
    sources: [{ label: "Britannica — Gilgit-Baltistan", url: "https://www.britannica.com/place/Gilgit-Baltistan" }],
  },
  {
    shapeName: "Azad Kashmir",
    displayName: "Azad Jammu and Kashmir",
    capital: "Muzaffarabad",
    description:
      "Pakistani-administered territory in the wider, long-disputed Kashmir region; its final status remains a matter of unresolved international dispute between Pakistan and India.",
    sources: [{ label: "Britannica — Kashmir", url: "https://www.britannica.com/place/Kashmir-region-Indian-subcontinent" }],
  },
  {
    shapeName: "Islamabad Capital Territory",
    displayName: "Islamabad Capital Territory",
    capital: "Islamabad",
    description: "A federal territory built from 1960 onward to house Pakistan's capital.",
    sources: [{ label: "Britannica — Islamabad", url: "https://www.britannica.com/place/Islamabad" }],
  },
];

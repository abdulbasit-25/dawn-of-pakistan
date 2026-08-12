/**
 * Core historical data model.
 * RULE: anything historical MUST carry a `sources` array. Unverified content
 * must be labelled via `verification` — never presented as fact.
 */

export type Verification = "verified" | "pending-source" | "reconstructed" | "placeholder";

export interface Source {
  label: string;
  url?: string;
  note?: string;
}

export interface HistoricalEvent {
  id: string;
  year: number;
  date?: string;
  title: string;
  description: string;
  significance?: string;
  location?: string;
  people?: string[];
  image?: string;
  spotlight?: boolean;
  verification: Verification;
  sources: Source[];
}

export interface Person {
  id: string;
  name: string;
  urduName?: string;
  role: string;
  lifespan?: string;
  biography: string;
  contributions: string[];
  relatedEvents?: string[];
  relatedPlaces?: string[];
  portrait?: string;
  verification: Verification;
  sources: Source[];
}

export interface Story {
  id: string;
  personName: string;
  age?: number;
  origin: string;
  destination: string;
  biography: string;
  story: string;
  route: string[];
  context: string;
  audioUrl?: string;
  audioIsAiGenerated?: boolean;
  verification: Verification;
  sources: Source[];
}

export type PlaceCategory =
  | "province"
  | "city"
  | "mountain"
  | "river"
  | "desert"
  | "coast"
  | "region";

export interface Place {
  id: string;
  name: string;
  category: PlaceCategory;
  coordinates?: [number, number];
  summary: string;
  details?: Record<string, string>;
  historicalSignificance?: string;
  verification: Verification;
  sources: Source[];
}

export interface MigrationRoute {
  id: string;
  label: string;
  year: number;
  waypoints: { name: string; coordinates: [number, number] }[];
  context: string;
  approximate: boolean;
  relatedStories?: string[];
  verification: Verification;
  sources: Source[];
}

export type ArchiveCategory =
  | "Documents"
  | "Photographs"
  | "Maps"
  | "Speeches"
  | "People"
  | "Events"
  | "Stories";

export interface ArchiveItem {
  id: string;
  title: string;
  category: ArchiveCategory;
  year?: number;
  location?: string;
  personIds?: string[];
  author?: string;
  description: string;
  image?: string;
  verification: Verification;
  sources: Source[];
}

export interface StatisticPoint {
  id: string;
  label: string;
  value: number;
  unit: string;
  year: number;
  category?: string;
  verification: Verification;
  sources: Source[];
}
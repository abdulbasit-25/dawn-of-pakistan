# The First Dawn Chronicle

🇵🇰 THE FIRST DAWN — Lovable Build Prompt

This is formatted specifically for Lovable (lovable.dev): one strong initial prompt to establish the whole app correctly, followed by a sequence of phase-by-phase follow-up prompts. Paste the Initial Prompt first, let Lovable scaffold the project, then feed the phase prompts one at a time in later messages — Lovable builds best incrementally rather than in one giant dump.

HOW TO USE THIS

Paste PROMPT 0 (Initial Setup) as your first message in a new Lovable project.

Once it scaffolds and you're happy with the shell, paste PROMPT 1, then PROMPT 2, etc., in order — one per message, waiting for each to finish and reviewing before moving to the next.

If Lovable pushes back on a feature (e.g. Mapbox needing a token, or true RAG needing a real backend), follow the fallback notes included in each prompt.

PROMPT 0 — Initial Setup & Foundation

Build a premium, cinematic, interactive digital experience called:

THE FIRST DAWN
Pakistan — From the dream to the nation.

This documents Pakistan's journey from the independence movement through the creation of Pakistan in 1947 to modern Pakistan today. It should feel like a digital historical museum crossed with a cinematic documentary — NOT a generic "Happy Independence Day" landing page.

TECH STACK
- React + TypeScript + Vite
- Tailwind CSS
- shadcn/ui for base components (restyled, not default look)
- Framer Motion for motion/transitions
- React Router for pages
- Recharts for any data visualization (used sparingly)

DESIGN DIRECTION
Editorial / museum aesthetic. Think: 1947 historical archive + modern digital museum + documentary film.

Avoid entirely: generic Pakistani flag templates, excessive bright green, cheap patriotic clip-art, cartoonish illustration, oversized rounded cards, glassmorphism, loud gradients, stock "corporate dashboard" styling, excessive animation.

Use instead: deep green, off-white/parchment, muted gold, charcoal, archival black-and-white photography, subtle paper/grain texture, newspaper-inspired typography, elegant serif display type paired with a clean modern sans-serif for UI/body text, thin hairline borders, generous whitespace, restrained motion that supports storytelling rather than decorates it.

COLOR SYSTEM (set these as Tailwind theme tokens, not one-off hex values)
- Background (parchment): #F4F0E6
- Paper: #E8E0D0
- Dark: #0B1511
- Pakistan Green (accent): #123C2A
- Deep Green: #08261A
- Muted Gold (accent): #B99A5B
- Text: #1C211E
- Muted text: #6D736C
- Archive Black: #111111

Green and gold are ACCENTS ONLY — the interface is not a wall of green. Set up a dark "cinematic" mode too (near-black background, parchment text) for the Hero and closing sections, and a light "archive" mode (parchment background, dark text) for the historical/editorial sections — this contrast is part of the emotional pacing of the site, so build it as a real theme toggle in the layout system, not a hack.

TYPOGRAPHY
Pick a strong display serif (Google Fonts is fine — something like Fraunces, Playfair Display, or similar editorial serif) for headings, years, and quotes. Pair it with a clean modern sans-serif (Inter, Söhne-alike, or similar) for navigation, metadata, body copy, and any AI/chat interface. Typography should feel like "historical publication meets modern technology."

ARCHITECTURE
Set up this folder structure and keep historical content OUT of components — all historical data lives in typed data files, never hardcoded inline in JSX:

src/
  components/       (reusable UI: Hero, Timeline, PersonCard, StoryCard, MigrationMap, PlaceCard, ArchiveCard, DocumentViewer, AIChat, SourceList, AudioPlayer, LanguageSwitcher, YearSelector, DataChart, Navigation, Footer, SectionHeader)
  sections/         (homepage sections composed from components)
  pages/            (routed pages: Home, Timeline, Voices, Map, People, Archive, AskPakistan, Today)
  data/             (typed JSON/TS files: events.ts, people.ts, stories.ts, places.ts, routes.ts, documents.ts, statistics.ts, sources.ts)
  hooks/
  utils/
  types/            (HistoricalEvent, Person, Story, Place, Source, etc.)
  assets/

DATA MODEL — set this up now, populate later
Define TypeScript interfaces with a mandatory `sources` field on anything historical, e.g.:

interface Source {
  label: string;
  url?: string;
  note?: string;
}

interface HistoricalEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  significance?: string;
  location?: string;
  people?: string[]; // person ids
  image?: string;
  sources: Source[];
}

Similar typed interfaces for Person, Story (with origin/destination/route), Place, StatisticPoint (value + year + unit + source), ArchiveItem.

CRITICAL DATA-INTEGRITY RULE (apply everywhere, always)
Never invent historical facts, quotes, statistics, migration stories, or newspaper headlines and present them as real. Where real verified content isn't available yet, use clearly-labeled placeholder data (e.g. an image placeholder that says "ARCHIVAL IMAGE REQUIRED", or a story card marked "Illustrative example — pending verified source") rather than fabricating something that looks authentic. Every populated historical claim needs a `sources` entry, even if it's just a placeholder source for now that I'll replace with real citations later.

FOR THIS FIRST PASS, BUILD:
1. The theme system (dark cinematic + light archive modes) and global layout/typography.
2. A floating, minimal navigation (THE STORY / TIMELINE / 1947 / VOICES / MAP / PEOPLE / ARCHIVE / ASK PAKISTAN) with a clean fullscreen mobile menu, highlighting the current section.
3. The Hero section on the homepage: full-screen dark cinematic opening, subtle grain texture, large sequential display of "14 AUGUST 1947" → "THE FIRST DAWN" → "Pakistan — From the dream to the nation." with two CTAs: "ENTER THE ARCHIVE" (primary) and "EXPLORE THE TIMELINE" (secondary).
4. A short cinematic opening narrative sequence directly under/after the hero, revealing short lines one at a time with Framer Motion (e.g. "Before there was a nation, there was a dream." / "Before the flag, there was a struggle." / "Before the first dawn, there was a journey.") ending on "This is the story of Pakistan."
5. A basic Footer with the site name, tagline, section links, and a line distinguishing verified historical sources from AI-generated or reconstructed content.

Do not build fake/dead navigation links — every nav item should route to a real (even if minimal for now) page. Do not use lorem ipsum or random stock photography; use clearly labeled placeholders instead. Make it fully responsive from the start, and respect prefers-reduced-motion by disabling the heavier cinematic animations when it's set.


PROMPT 1 — Historical Timeline

Now build the main interactive timeline page/section, powered entirely by the `data/events.ts` file we set up (add 12–15 real, verifiable milestone events spanning 1857 to today — e.g. 1857, 1906, 1930, 1940, 1946, 1947, 1948, 1956, 1965, 1971, 1973, 1998, and a couple of 2000s–2020s entries — each with year, title, short description, significance, and a `sources` array; use a clearly labeled placeholder image where a real archival photo isn't available).

Desktop: an immersive horizontal, scrollable/draggable timeline where each year is a stop the user can click to expand into the event's detail (title, description, significance, related people/location, sources).

Mobile: convert the same data into a vertical timeline — don't just shrink the desktop version, design the touch interaction intentionally.

Use Framer Motion for the reveal/expand transitions — keep it restrained, not flashy.

Within this same timeline, give the 1940 Lahore Resolution its own visually distinct, larger "spotlight" stop (title "1940", subtitle "The Resolution", with historical context, the Lahore location, and related personalities) that transitions naturally into a dedicated "1947 — THE FIRST DAWN" spotlight section: a dramatic centerpiece around 14 August 1947 covering the final days before independence, independence itself, the first government, and early nation-building challenges, with real photographs where available (placeholder-labeled otherwise) and full source attribution.


PROMPT 2 — Voices of 1947 (Personal Stories)

Build the "VOICES OF 1947" section/page — subtitle: "History is not only dates. It is people."

Populate `data/stories.ts` with a small number of story entries. For each: person, approximate age if reliably documented, origin, destination, short biography, story text, migration route as an ordered list of places, historical context, and a `sources` array. If a story is reconstructed/illustrative rather than a fully sourced individual account, mark it clearly with a "Reconstructed account" label in the UI — never present it as verified fact.

Build a StoryCard component for the grid/list view and a StoryViewer for the expanded/detail view. In the detail view, show the migration route as a simple vertical arrow sequence (e.g. LAHORE → AMRITSAR → DELHI → KARACHI, using each story's actual route data, not a fixed example).

Include an optional audio-narration control (Play/Pause/Mute) on the story detail view — no autoplay, and if narration is AI-generated, label it explicitly as "AI-generated narration" in the UI.


PROMPT 3 — Migration Map & Pakistan Map

Build two interactive maps as their own components:

1. MIGRATION MAP — a Partition-era map (use Leaflet with OpenStreetMap tiles, or Mapbox GL JS if a Mapbox token is available/added to env vars — default to Leaflet so it works with zero extra setup) showing major historical cities/regions and the migration routes drawn from `data/routes.ts`. Clicking a route highlights it and opens a panel with historical context, related stories (link back to the Voices section), and sources. Do not present approximate/uncertain routes as exact — say so in the UI copy.

2. PAKISTAN MAP — a present-day interactive map of Pakistan showing provinces, major cities, rivers, mountain ranges, deserts, and coastline, sourced from `data/places.ts`. Clicking a region opens a panel (e.g. "NORTHERN PAKISTAN": elevation, major peaks, major rivers, climate, major cities, historical significance, sources).

Add a compact year selector (1947 / 1960 / 1971 / 1980 / 1990 / 2000 / 2010 / 2020 / today) above the Pakistan Map that swaps in year-appropriate labels/boundaries/notes where we have verified data — where we don't yet have verified historical boundary data for a given year, show a clear "boundary data pending verification" note rather than guessing.


PROMPT 4 — People, Geography Explorer, Archive

Build three more sections:

1. PEOPLE WHO SHAPED THE NATION — a personality archive page from `data/people.ts` (e.g. Muhammad Ali Jinnah, Fatima Jinnah, Allama Muhammad Iqbal, Liaquat Ali Khan, Sir Syed Ahmad Khan, Chaudhry Rahmat Ali). PersonCard for the grid, PersonProfile for the detail view (portrait, role, biography, major contributions, related timeline events and locations, sources). Link person profiles back into timeline events where relevant.

2. PAKISTAN, IN LANDSCAPE — a geography explorer covering Mountains (Karakoram, Himalayas, Hindu Kush), Rivers (Indus, Jhelum, Chenab, Ravi, Sutlej), Deserts (Thar, Cholistan, Kharan), Coast (Arabian Sea, Karachi, Gwadar), and Cities (Islamabad, Lahore, Karachi, Peshawar, Quetta, Multan, Rawalpindi, Gilgit, Muzaffarabad, Skardu). Each item opens a clean info panel from `data/places.ts`.

3. HISTORICAL ARCHIVE — a searchable/filterable archive page (filters: Year, Category, Location, Person, Type; categories: Documents, Photographs, Maps, Speeches, People, Events, Stories) built from `data/documents.ts`, with an ArchiveCard grid and a DocumentViewer (zoom, fullscreen, metadata: date/author/source/description, archival-paper styling) for individual items. Every archive item must display its source.


PROMPT 5 — Ask Pakistan (AI Guide)

Build the "ASK PAKISTAN" page — subtitle: "Explore the archive with an AI historical guide."

This needs an actual backend call, not a fake canned-response chat, so set it up using Lovable's Supabase integration: enable Supabase, create an edge function that calls an LLM, and ground its answers ONLY in the site's own historical data (events, people, stories, places, sources) — pass the relevant structured data as context in the function rather than letting the model answer from open-ended general knowledge. If exact retrieval/RAG over the dataset isn't practical yet, at minimum inject the full curated dataset (or a relevant filtered slice by keyword match) into the prompt as grounding context.

Build the AIChat component with:
- A chat input and message list styled to match the site (not a generic bubble-chat look)
- Quick response "modes" the user can toggle: SIMPLE (beginner explanation), DETAILED (deeper explanation), TIMELINE (turn the answer into chronological bullet events), PEOPLE (surface related personalities with links to their profiles), PLACES (surface related locations, ideally with a link into the map), SOURCES (show the sources actually used)
- Every answer should show a compact "Sources" list under it, and if the assistant is uncertain or the topic is historically disputed, it should say so explicitly rather than asserting one version as fact
- Never let the AI invent historical facts not present in the grounding data — the system prompt for the edge function should explicitly instruct the model to say "I don't have verified information on that" rather than fabricate

Add a language switcher (EN / اردو) across the site's header, and make sure this AI page in particular supports asking and answering in Urdu with correct RTL layout and an appropriate Urdu-supporting font when that language is active.


PROMPT 6 — Pakistan Today & Closing

Build the final two sections:

1. PAKISTAN TODAY — after the historical journey, transition visually from the parchment/archival palette into a cleaner, more modern interface (still using our theme tokens, just leaning into the "light archive" mode more crisply) covering present-day Pakistan: provinces, major cities, geography, culture, technology, education, science, sports, industry, and arts, using `data/statistics.ts` (every number needs year + unit + source — never invent a statistic) with a couple of restrained Recharts visualizations.

2. THE FINAL DAWN — a cinematic closing section, dark background, slow sequential typography: "1947" → "2026" → "The story continues." → "THE FIRST DAWN" → "Pakistan — From the dream to the nation." → "14 August 1947 → 2026". Mirror the Hero's tone as bookends of the experience.

Also finish the Footer: site name/tagline, links (Timeline, Archive, Map, Voices, Ask Pakistan, Sources, About), the line "This project is an independent digital historical experience," and a clear breakdown distinguishing verified historical sources, AI-generated narration, AI-generated explanations, and any digital reconstructions used on the site.


PROMPT 7 — Polish Pass (do this last)

Do a polish pass across the whole site:

- Audit every animation against the rule "motion should support storytelling, not decorate it" — remove or tone down anything gratuitous.
- Verify keyboard navigation, focus states, alt text, and ARIA labels across all interactive components (timeline, maps, chat, archive filters, document viewer).
- Confirm prefers-reduced-motion disables the heavier cinematic transitions site-wide.
- Check color contrast in both the dark cinematic mode and the light archive mode.
- Make sure images are responsive/lazy-loaded and the maps aren't loaded until their section is in view.
- Do a full responsive pass on mobile portrait, mobile landscape, tablet, and small laptop widths — confirm nothing is just a shrunk desktop layout, especially the timeline, maps, and Ask Pakistan chat.
- Double check there are no dead navigation links, no lorem ipsum left anywhere, and every placeholder is clearly labeled as a placeholder rather than looking like real historical content.


Notes / fallbacks

Maps: Leaflet + OpenStreetMap needs no API key and is the safer default in Lovable; only ask for a Mapbox token if you specifically want Mapbox's styling.

AI backend: Lovable's native path for this is enabling Supabase and writing an edge function — this satisfies the "use RAG if implementing a backend" requirement from the master spec without you needing to stand up a separate server.

Real historical assets: Lovable can't source verified archival photographs or citations for you. Keep using the "ARCHIVAL IMAGE REQUIRED" / "pending verified source" placeholder pattern until you drop in real, sourced material — that's intentional, not a gap to rush past.

If any single prompt above feels too big for one Lovable pass, split it further (e.g. Prompt 3 into "Migration Map" then "Pakistan Map" as two separate messages).

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cb9d715a-4215-4118-905a-608a6367ceb7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

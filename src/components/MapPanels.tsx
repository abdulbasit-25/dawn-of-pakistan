import { useMemo, useState } from "react";
import { migrationRoutes } from "@/data/routes";
import { places } from "@/data/places";

const timelineYears = [1947, 1960, 1971, 1980, 1990, 2000, 2010, 2020, 2024] as const;

const bounds = {
  latMin: 20,
  latMax: 37,
  lonMin: 60,
  lonMax: 80,
};

function normalize([lat, lon]: [number, number]) {
  const x = ((lon - bounds.lonMin) / (bounds.lonMax - bounds.lonMin)) * 520 + 20;
  const y = 340 - ((lat - bounds.latMin) / (bounds.latMax - bounds.latMin)) * 320;
  return [x, y] as const;
}

export function MapPanels() {
  const [selectedRouteId, setSelectedRouteId] = useState(migrationRoutes[0]?.id ?? "");
  const [selectedYear, setSelectedYear] = useState<(typeof timelineYears)[number]>(1947);

  const selectedRoute =
    migrationRoutes.find((route) => route.id === selectedRouteId) ?? migrationRoutes[0];

  const selectedPlaces = useMemo(
    () => places.filter((place) => place.category === "province" || place.category === "city"),
    [],
  );

  return (
    <div className="space-y-12">
      <section className="space-y-6 rounded-3xl border border-[#1C211E]/10 bg-[#F4F0E6]/70 p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#6D736C]">Migration map</p>
            <h2 className="mt-2 text-2xl font-serif text-[#123C2A]">Partition-era routes</h2>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-[#1C211E]/90">
            Highlighted routes are drawn from documented migration corridors in 1947. They are
            approximate maps of historical journeys, not exact reconnaissance drawings.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_0.7fr]">
          <div className="rounded-3xl border border-[#1C211E]/10 bg-white p-6">
            <div className="overflow-hidden rounded-3xl border border-[#1C211E]/10 bg-[#E6E1D6] p-4">
              <svg viewBox="0 0 560 360" className="h-[320px] w-full">
                <rect width="560" height="360" fill="#F7F4EB" />
                <g stroke="#123C2A" strokeWidth="2" fill="none" strokeLinecap="round">
                  {selectedRoute.waypoints.map((point, index) => {
                    const [x, y] = normalize(point.coordinates);
                    if (index === 0) return null;
                    const [px, py] = normalize(selectedRoute.waypoints[index - 1].coordinates);
                    return <line key={`${px}-${py}-${x}-${y}`} x1={px} y1={py} x2={x} y2={y} />;
                  })}
                </g>
                {selectedRoute.waypoints.map((point, index) => {
                  const [x, y] = normalize(point.coordinates);
                  return (
                    <g key={point.name}>
                      <circle cx={x} cy={y} r="8" fill="#B99A5B" />
                      <text
                        x={x + 12}
                        y={y + 4}
                        fontSize="11"
                        fill="#111"
                        fontFamily="Inter, sans-serif"
                      >
                        {point.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl border border-[#1C211E]/10 bg-[#F4F0E6]/80 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[#6D736C]">Selected route</p>
                <p className="mt-2 text-lg font-semibold text-[#123C2A]">{selectedRoute.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#1C211E]/90">
                  {selectedRoute.context}
                </p>
                {selectedRoute.approximate ? (
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[#6D736C]">
                    Approximate route. Historical record notes the corridor in general terms.
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-[#1C211E]/10 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-[#6D736C]">Routes</p>
              <div className="mt-4 space-y-3">
                {migrationRoutes.map((route) => (
                  <button
                    key={route.id}
                    type="button"
                    onClick={() => setSelectedRouteId(route.id)}
                    className={[
                      "w-full rounded-3xl border px-4 py-4 text-left transition",
                      route.id === selectedRouteId
                        ? "border-[#B99A5B] bg-[#F4F0E6]"
                        : "border-[#E3DCC9] bg-white hover:bg-[#F7F5EF]",
                    ].join(" ")}
                  >
                    <p className="font-semibold text-[#123C2A]">{route.label}</p>
                    <p className="mt-2 text-sm text-[#6D736C]">{route.year}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#1C211E]/10 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-[#6D736C]">Related stories</p>
              <ul className="mt-4 space-y-3 text-sm text-[#1C211E]/90">
                {selectedRoute.relatedStories?.map((storyId) => (
                  <li key={storyId}>{storyId.replace(/-/g, " ")}</li>
                )) ?? <li>No direct story links available yet.</li>}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-[#1C211E]/10 bg-[#F4F0E6]/70 p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#6D736C]">Pakistan map</p>
            <h2 className="mt-2 text-2xl font-serif text-[#123C2A]">Present-day geography</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {timelineYears.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => setSelectedYear(year)}
                className={[
                  "rounded-full border px-4 py-2 text-xs font-semibold transition",
                  year === selectedYear
                    ? "border-[#B99A5B] bg-[#F4F0E6] text-[#123C2A]"
                    : "border-[#E3DCC9] bg-white text-[#6D736C] hover:bg-[#F7F5EF]",
                ].join(" ")}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_0.8fr]">
          <div className="rounded-3xl border border-[#1C211E]/10 bg-white p-6">
            <div className="overflow-hidden rounded-3xl border border-[#1C211E]/10 bg-[#E6E1D6] p-4">
              <div className="relative aspect-[16/9] bg-[radial-gradient(circle_at_top,_rgba(181,154,91,0.16),transparent_40%),linear-gradient(#f4f0e6,#e8e0d0)]">
                <div className="absolute inset-0 opacity-80" />
                <div className="absolute left-8 top-8 text-sm text-[#123C2A]">
                  Map art placeholder
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl border border-[#1C211E]/10 bg-[#F4F0E6]/80 p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-[#6D736C]">Boundary note</p>
              <p className="mt-3 text-sm leading-relaxed text-[#1C211E]/90">
                {selectedYear === 1947
                  ? "1947 is shown as the partition era boundary moment. Details are approximate and based on verified historical maps where available."
                  : "Boundary data for this year is pending verification. The gallery describes major places and regions without claiming precise historical lines."}
              </p>
            </div>

            <div className="rounded-3xl border border-[#1C211E]/10 bg-white p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-[#6D736C]">Major places</p>
              <ul className="mt-4 space-y-3 text-sm text-[#1C211E]/90">
                {selectedPlaces.slice(0, 6).map((place) => (
                  <li key={place.id}>
                    <p className="font-semibold text-[#123C2A]">{place.name}</p>
                    <p>{place.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// src/components/PakistanMap.tsx
//
// Interactive map of present-day Pakistan: provinces (clickable), major
// cities, rivers (schematic), and mountain ranges, with a Map/Satellite/
// Terrain layer switcher.
//
// Requires: `npm install react-leaflet leaflet` (or bun equivalent), plus
// `import "leaflet/dist/leaflet.css"` once globally (see note at bottom).
//
// PROVINCE DATA: geometry is fetched at runtime from geoBoundaries (CC-BY 4.0,
// clipped to boundaries per the US Department of State — a neutral source,
// not a Pakistani- or Indian-government dataset). This keeps a ~150KB+
// polygon file out of the JS bundle. For production, mirror this file in
// your own storage rather than depending on GitHub raw at runtime — GitHub
// does not guarantee raw-content uptime/rate limits for production traffic.
//
// A NOTE ON KASHMIR: Azad Jammu & Kashmir and Gilgit-Baltistan are shown as
// Pakistani-administered territory, consistent with the geoBoundaries source
// and with on-the-ground administration. The wider Kashmir region's final
// status is a long-running international dispute; this map does not take a
// position on it beyond what the underlying boundary dataset depicts. Say so
// in your UI copy rather than presenting the line as an uncontested border.

import { useEffect, useMemo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  CircleMarker,
  Polyline,
  Tooltip,
  Popup,
} from "react-leaflet";
import type { Layer, LeafletMouseEvent, PathOptions } from "leaflet";
import type { Feature, FeatureCollection } from "geojson";
import { cities, rivers, ranges, deserts, provinces, type ProvinceInfo } from "@/data/pakistan-geo";

const PROVINCE_GEOJSON_URL =
  "https://raw.githubusercontent.com/wmgeolab/geoBoundaries/9469f09/releaseData/gbOpen/PAK/ADM1/geoBoundaries-PAK-ADM1_simplified.geojson";

type LayerMode = "map" | "satellite" | "terrain";

const TILE_LAYERS: Record<LayerMode, { url: string; attribution: string; label: string }> = {
  map: {
    label: "Map",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
  satellite: {
    label: "Satellite",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: "Tiles &copy; Esri",
  },
  terrain: {
    label: "Terrain",
    url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    attribution:
      "Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap (CC-BY-SA)",
  },
};

type SelectedPlace =
  | { kind: "province"; info: ProvinceInfo }
  | { kind: "city"; id: string }
  | { kind: "river"; id: string }
  | { kind: "range"; id: string }
  | null;

function provinceStyle(isSelected: boolean): PathOptions {
  return {
    color: isSelected ? "#B99A5B" : "#123C2A",
    weight: isSelected ? 2 : 1,
    fillColor: "#123C2A",
    fillOpacity: isSelected ? 0.18 : 0.06,
  };
}

export function PakistanMap() {
  const [layerMode, setLayerMode] = useState<LayerMode>("map");
  const [geoData, setGeoData] = useState<FeatureCollection | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [selected, setSelected] = useState<SelectedPlace>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(PROVINCE_GEOJSON_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`GeoJSON fetch failed: ${res.status}`);
        return res.json();
      })
      .then((data: FeatureCollection) => {
        if (!cancelled) setGeoData(data);
      })
      .catch(() => {
        if (!cancelled) setLoadError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const provinceByShapeName = useMemo(() => {
    const map = new Map<string, ProvinceInfo>();
    provinces.forEach((p) => map.set(p.shapeName, p));
    return map;
  }, []);

  const tile = TILE_LAYERS[layerMode];

  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-sm border border-border sm:h-[620px]">
      <MapContainer
        center={[30.3753, 69.3451]}
        zoom={5}
        minZoom={4}
        maxZoom={11}
        scrollWheelZoom
        className="h-full w-full [&_.leaflet-control]:rounded-none [&_.leaflet-control]:border-border [&_.leaflet-control]:shadow-none"
      >
        <TileLayer key={layerMode} url={tile.url} attribution={tile.attribution} />

        {geoData && (
          <GeoJSON
            data={geoData}
            style={(feature?: Feature) => {
              const shapeName = feature?.properties?.["shapeName"] as string | undefined;
              const isSelected =
                selected?.kind === "province" && selected.info.shapeName === shapeName;
              return provinceStyle(isSelected);
            }}
            onEachFeature={(feature: Feature, layer: Layer) => {
              const shapeName = feature.properties?.["shapeName"] as string | undefined;
              const info = shapeName ? provinceByShapeName.get(shapeName) : undefined;

              layer.on({
                mouseover: (e: LeafletMouseEvent) => {
                  e.target.setStyle({ fillOpacity: 0.14 });
                },
                mouseout: (e: LeafletMouseEvent) => {
                  const isSelected =
                    selected?.kind === "province" && selected.info.shapeName === shapeName;
                  e.target.setStyle(provinceStyle(isSelected));
                },
                click: () => {
                  if (info) setSelected({ kind: "province", info });
                },
              });

              if (shapeName) {
                layer.bindTooltip(info?.displayName ?? shapeName, {
                  sticky: true,
                  className: "!rounded-none !border-border !bg-card !text-xs !text-foreground",
                });
              }
            }}
          />
        )}

        {rivers.map((river) => (
          <Polyline
            key={river.id}
            positions={river.path}
            pathOptions={{ color: "#4A7C6A", weight: 2, opacity: 0.85 }}
            eventHandlers={{ click: () => setSelected({ kind: "river", id: river.id }) }}
          >
            <Tooltip sticky className="!rounded-none !border-border !bg-card !text-xs">
              {river.name}
            </Tooltip>
          </Polyline>
        ))}

        {ranges.map((range) => (
          <CircleMarker
            key={range.id}
            center={[range.lat, range.lng]}
            radius={5}
            pathOptions={{ color: "#B99A5B", fillColor: "#B99A5B", fillOpacity: 0.9, weight: 1 }}
            eventHandlers={{ click: () => setSelected({ kind: "range", id: range.id }) }}
          >
            <Tooltip className="!rounded-none !border-border !bg-card !text-xs">
              {range.name}
            </Tooltip>
          </CircleMarker>
        ))}

        {deserts.map((desert) => (
          <CircleMarker
            key={desert.id}
            center={[desert.lat, desert.lng]}
            radius={5}
            pathOptions={{ color: "#B99A5B", fillColor: "#F4E7C4", fillOpacity: 0.7, weight: 1 }}
            eventHandlers={{ click: () => setSelected({ kind: "range", id: desert.id }) }}
          >
            <Tooltip className="!rounded-none !border-border !bg-card !text-xs">
              {desert.name}
            </Tooltip>
          </CircleMarker>
        ))}

        {cities.map((city) => (
          <CircleMarker
            key={city.id}
            center={[city.lat, city.lng]}
            radius={4}
            pathOptions={{ color: "#1C211E", fillColor: "#F4F0E6", fillOpacity: 1, weight: 1.5 }}
            eventHandlers={{ click: () => setSelected({ kind: "city", id: city.id }) }}
          >
            <Tooltip className="!rounded-none !border-border !bg-card !text-xs">
              {city.name}
            </Tooltip>
            <Popup className="!rounded-none">
              <span className="text-sm font-medium">{city.name}</span>
              {city.note && <p className="text-xs text-muted-foreground">{city.note}</p>}
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>

      {/* Layer switcher — deliberately plain buttons, not default Leaflet chrome */}
      <div className="absolute right-3 top-3 z-[500] flex gap-px border border-border bg-card text-xs">
        {(Object.keys(TILE_LAYERS) as LayerMode[]).map((mode) => (
          <button
            key={mode}
            onClick={() => setLayerMode(mode)}
            aria-pressed={layerMode === mode}
            className={[
              "px-3 py-1.5 transition-colors",
              layerMode === mode
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            ].join(" ")}
          >
            {TILE_LAYERS[mode].label}
          </button>
        ))}
      </div>

      {loadError && (
        <div className="absolute inset-x-3 top-3 z-[500] max-w-xs border border-border bg-card px-3 py-2 text-xs text-muted-foreground">
          Province boundaries could not be loaded right now. Cities, rivers, and ranges are still
          shown below.
        </div>
      )}

      {/* Detail panel */}
      {selected && (
        <div className="absolute inset-x-3 bottom-3 z-[500] max-h-[45%] overflow-y-auto border border-border bg-card p-4 sm:inset-x-auto sm:left-3 sm:w-80">
          <DetailPanel selected={selected} onClose={() => setSelected(null)} />
        </div>
      )}
    </div>
  );
}

function DetailPanel({
  selected,
  onClose,
}: {
  selected: NonNullable<SelectedPlace>;
  onClose: () => void;
}) {
  const content = (() => {
    switch (selected.kind) {
      case "province": {
        const p = selected.info;
        return {
          title: p.displayName,
          meta: `Capital: ${p.capital}`,
          body: p.description,
          sources: p.sources,
        };
      }
      case "city": {
        const c = cities.find((c) => c.id === selected.id);
        if (!c) return null;
        return {
          title: c.name,
          meta: c.province,
          body: c.note ?? "",
          sources: [],
        };
      }
      case "river": {
        const r = rivers.find((r) => r.id === selected.id);
        if (!r) return null;
        return {
          title: r.name,
          meta: "River (simplified route)",
          body: r.description,
          sources: r.sources,
        };
      }
      case "range": {
        const r = [...ranges, ...deserts].find((r) => r.id === selected.id);
        if (!r) return null;
        return { title: r.name, meta: "", body: r.description, sources: r.sources };
      }
    }
  })();

  if (!content) return null;

  return (
    <div>
      <div className="mb-2 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg text-foreground">{content.title}</h3>
          {content.meta && (
            <p className="text-xs uppercase tracking-wide text-muted-foreground">{content.meta}</p>
          )}
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          className="shrink-0 text-muted-foreground hover:text-foreground"
        >
          ✕
        </button>
      </div>
      {content.body && (
        <p className="mb-3 text-sm leading-relaxed text-foreground/90">{content.body}</p>
      )}
      {content.sources.length > 0 && (
        <ul className="space-y-1 border-t border-border pt-2">
          {content.sources.map((s) => (
            <li key={s.label} className="text-xs text-muted-foreground">
              {s.url ? (
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline underline-offset-2"
                >
                  {s.label}
                </a>
              ) : (
                s.label
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// One-time global import, e.g. in your root layout or main.tsx:
//   import "leaflet/dist/leaflet.css";

import { useMemo, useState } from "react";
import { documents } from "@/data/documents";
import type { ArchiveItem, ArchiveCategory } from "@/types";

const categories: ArchiveCategory[] = [
  "Documents",
  "Photographs",
  "Maps",
  "Speeches",
  "People",
  "Events",
  "Stories",
];

export function ArchiveExplorer() {
  const [query, setQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState<ArchiveCategory | "All">("All");
  const [filterYear, setFilterYear] = useState<string>("");

  const years = useMemo(
    () =>
      Array.from(new Set(documents.map((item) => item.year).filter(Boolean))).sort(
        (a, b) => Number(b) - Number(a),
      ),
    [],
  );

  const filtered = useMemo(() => {
    return documents.filter((item) => {
      const matchesQuery =
        query === "" ||
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        (item.location ?? "").toLowerCase().includes(query.toLowerCase());
      const matchesCategory = filterCategory === "All" || item.category === filterCategory;
      const matchesYear = filterYear === "" || String(item.year) === filterYear;
      return matchesQuery && matchesCategory && matchesYear;
    });
  }, [query, filterCategory, filterYear]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
        <div>
          <label className="text-xs uppercase tracking-[0.22em] text-[#6D736C]">
            Search archive
          </label>
          <input
            type="search"
            placeholder="Search titles, locations, people..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="mt-3 w-full rounded-3xl border border-[#1C211E]/15 bg-white px-4 py-3 text-sm text-[#1C211E] outline-none transition focus:border-[#123C2A]"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs uppercase tracking-[0.22em] text-[#6D736C]">Category</label>
            <select
              value={filterCategory}
              onChange={(event) => setFilterCategory(event.target.value as ArchiveCategory | "All")}
              className="mt-3 w-full rounded-3xl border border-[#1C211E]/15 bg-white px-4 py-3 text-sm text-[#1C211E] outline-none transition focus:border-[#123C2A]"
            >
              <option value="All">All</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.22em] text-[#6D736C]">Year</label>
            <select
              value={filterYear}
              onChange={(event) => setFilterYear(event.target.value)}
              className="mt-3 w-full rounded-3xl border border-[#1C211E]/15 bg-white px-4 py-3 text-sm text-[#1C211E] outline-none transition focus:border-[#123C2A]"
            >
              <option value="">All</option>
              {years.map((year) => (
                <option key={year} value={String(year)}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl border border-[#1C211E]/10 bg-white p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-[#6D736C]">{item.category}</p>
              <h3 className="mt-3 font-serif text-xl text-[#123C2A]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#1C211E]/90">{item.description}</p>
              <div className="mt-5 text-xs uppercase tracking-[0.18em] text-[#6D736C]">
                {item.year ? `${item.year} · ` : ""}
                {item.location ?? "Location pending"}
              </div>
              <div className="mt-4 border-t border-[#1C211E]/10 pt-4 text-sm text-[#1C211E]/90">
                <p className="font-semibold text-[#123C2A]">Source</p>
                <p>{item.sources[0]?.label ?? "Pending verified source"}</p>
              </div>
            </article>
          ))
        ) : (
          <div className="rounded-3xl border border-[#1C211E]/10 bg-[#F4F0E6]/80 p-10 text-center text-sm text-[#6D736C]">
            No archive items match your current filters. Adjust the search or category.
          </div>
        )}
      </div>
    </div>
  );
}

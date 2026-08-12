import type { Person } from "@/types";

export function PersonCard({
  person,
  selected,
  onSelect,
}: {
  person: Person;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={[
        "w-full rounded-3xl border px-5 py-6 text-left transition-shadow duration-200",
        selected
          ? "border-[#B99A5B] bg-[#F4F0E6] shadow-sm"
          : "border-[#D4CDBD] bg-white hover:shadow-lg",
      ].join(" ")}
    >
      <p className="text-xs uppercase tracking-[0.22em] text-[#6D736C]">{person.role}</p>
      <h3 className="mt-3 text-lg font-serif text-[#123C2A]">{person.name}</h3>
      {person.lifespan ? <p className="mt-2 text-sm text-[#6D736C]">{person.lifespan}</p> : null}
      <div className="mt-4 text-sm leading-relaxed text-[#1C211E]/90">
        {person.biography.slice(0, 120)}...
      </div>
    </button>
  );
}

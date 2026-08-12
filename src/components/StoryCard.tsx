import { type Story } from "@/types";

export function StoryCard({
  story,
  selected,
  onSelect,
}: {
  story: Story;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={[
        "group w-full rounded-3xl border px-5 py-6 text-left transition-shadow duration-200",
        selected
          ? "border-[#B99A5B] bg-[#F4F0E6] shadow-sm"
          : "border-[#D4CDBD] bg-white hover:shadow-lg",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#6D736C]">{story.personName}</p>
          <h3 className="mt-3 text-lg font-serif text-[#123C2A]">
            {story.origin} → {story.destination}
          </h3>
        </div>
        {story.verification === "reconstructed" ? (
          <span className="rounded-full bg-[#F3E2D8] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#8C4C2A]">
            Reconstructed account
          </span>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-[#1C211E]/90">{story.biography}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#6D736C]">
        <span className="rounded-full bg-[#F7F5EF] px-3 py-1">
          {story.age ? `${story.age} years old` : "Age unknown"}
        </span>
        <span className="rounded-full bg-[#F7F5EF] px-3 py-1">{story.origin}</span>
        <span className="rounded-full bg-[#F7F5EF] px-3 py-1">{story.destination}</span>
      </div>
    </button>
  );
}

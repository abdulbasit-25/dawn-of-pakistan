import { useId, useRef, useState, type PointerEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { events } from "@/data/events";
import type { HistoricalEvent, Source } from "@/types";

function EventDetail({ event }: { event: HistoricalEvent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
      className="rounded-sm border border-[#1C211E]/15 bg-[#F4F0E6] p-6 md:p-8"
    >
      <div className="mb-3 flex items-baseline gap-3">
        <span className="font-serif text-3xl md:text-4xl text-[#123C2A]">{event.year}</span>
        {event.date && (
          <span className="text-xs uppercase tracking-wide text-[#6D736C]">{event.date}</span>
        )}
      </div>

      {event.spotlight && (
        <span className="mb-4 inline-flex rounded-full bg-[#B99A5B]/15 px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#7A5B24]">
          Spotlight
        </span>
      )}

      <h3 className="mb-3 font-serif text-xl md:text-2xl text-[#1C211E]">{event.title}</h3>

      {event.image && (
        <div className="mb-5 overflow-hidden rounded-xl bg-[#E6E1D6] text-center text-sm text-[#6D736C]">
          <div className="flex h-56 items-center justify-center px-4 py-6">
            <span>{event.image}</span>
          </div>
        </div>
      )}

      <p className="mb-4 text-sm md:text-base leading-relaxed text-[#1C211E]/90">
        {event.description}
      </p>

      <p className="mb-4 text-sm italic text-[#6D736C]">{event.significance}</p>

      {(event.people?.length || event.location) && (
        <dl className="mb-4 grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
          {event.location && (
            <div>
              <dt className="uppercase tracking-wide text-[#6D736C]">Location</dt>
              <dd className="text-[#1C211E]">{event.location}</dd>
            </div>
          )}
          {event.people && event.people.length > 0 && (
            <div>
              <dt className="uppercase tracking-wide text-[#6D736C]">Related people</dt>
              <dd className="text-[#1C211E]">{event.people.join(", ")}</dd>
            </div>
          )}
        </dl>
      )}

      <div className="border-t border-[#1C211E]/10 pt-3">
        <p className="mb-1 text-xs uppercase tracking-wide text-[#6D736C]">Sources</p>
        <ul className="space-y-1">
          {event.sources.map((source: Source) => (
            <li key={source.label} className="text-xs text-[#1C211E]/80">
              {source.url ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline underline-offset-2 hover:text-[#123C2A]"
                >
                  {source.label}
                </a>
              ) : (
                source.label
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Timeline() {
  const [selectedId, setSelectedId] = useState<string>(
    events.find((event) => event.spotlight)?.id ?? events[0]?.id ?? "",
  );
  const listId = useId();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const dragStartXRef = useRef(0);
  const scrollStartRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const selectedEvent = events.find((event) => event.id === selectedId) ?? events[0];

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    target.setPointerCapture(event.pointerId);
    setIsDragging(true);
    dragStartXRef.current = event.clientX;
    scrollStartRef.current = target.scrollLeft;
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !trackRef.current) return;
    const delta = event.clientX - dragStartXRef.current;
    trackRef.current.scrollLeft = scrollStartRef.current - delta;
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <div>
      <div className="hidden md:block">
        <div
          ref={trackRef}
          role="tablist"
          aria-label="Historical timeline"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{ touchAction: "pan-y" }}
          className="scrollbar-thin flex gap-3 overflow-x-auto pb-4 pr-2 cursor-grab active:cursor-grabbing"
        >
          {events.map((event) => {
            const isSelected = event.id === selectedId;
            return (
              <button
                key={event.id}
                type="button"
                role="tab"
                id={`${listId}-tab-${event.id}`}
                aria-selected={isSelected}
                aria-controls={`${listId}-panel`}
                onClick={() => setSelectedId(event.id)}
                className={[
                  "shrink-0 rounded-3xl border-b-2 px-5 py-4 text-left transition-all duration-200",
                  event.spotlight
                    ? "min-w-[180px] bg-[#F4F0E6] text-[#123C2A] shadow-sm"
                    : "min-w-[110px] bg-white text-[#6D736C] hover:text-[#1C211E]",
                  isSelected ? "border-[#B99A5B] text-[#123C2A]" : "border-transparent",
                ].join(" ")}
              >
                <span
                  className={
                    event.spotlight ? "block font-serif text-2xl" : "block font-serif text-lg"
                  }
                >
                  {event.year}
                </span>
                <span className="block mt-1 text-xs leading-tight">{event.title}</span>
              </button>
            );
          })}
        </div>

        <div id={`${listId}-panel`} role="tabpanel" className="mt-6">
          <AnimatePresence mode="wait">
            {selectedEvent && <EventDetail key={selectedEvent.id} event={selectedEvent} />}
          </AnimatePresence>
        </div>
      </div>

      <div className="space-y-3 md:hidden">
        <div className="relative pl-6">
          <div className="absolute left-2 top-5 h-full w-px bg-[#1C211E]/15" />
          {events.map((event, index) => {
            const isOpen = event.id === selectedId;
            return (
              <div key={event.id} className="relative pb-6">
                <span className="absolute -left-5 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#B99A5B] text-sm font-semibold text-white shadow-sm">
                  {event.year}
                </span>
                <div className="rounded-2xl border border-[#1C211E]/10 bg-[#F4F0E6]/60">
                  <button
                    type="button"
                    onClick={() => setSelectedId(isOpen ? "" : event.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                  >
                    <div>
                      <p className="font-serif text-sm text-[#123C2A]">{event.title}</p>
                      <p className="mt-1 text-xs text-[#6D736C]">
                        {event.location ?? "British India"}
                      </p>
                    </div>
                    <span
                      className={`text-[#6D736C] transition-transform ${isOpen ? "rotate-180" : ""}`}
                    >
                      ▾
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden px-5 pb-5"
                      >
                        <EventDetail event={event} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {index < events.length - 1 && (
                  <div className="absolute left-4 top-12 h-full w-px bg-[#1C211E]/15" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

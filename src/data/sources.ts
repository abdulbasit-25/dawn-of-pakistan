import type { Source } from "@/types";

/** Placeholder citation used until a real, verified source is added. */
export const PENDING_SOURCE: Source = {
  label: "Pending verified source",
  note: "Placeholder citation — to be replaced with a verified reference.",
};

export const sources: Source[] = [PENDING_SOURCE];

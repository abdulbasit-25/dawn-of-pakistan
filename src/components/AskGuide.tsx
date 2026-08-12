import { useMemo, useState, type FormEvent } from "react";

const MODES = ["SIMPLE", "DETAILED", "TIMELINE", "PEOPLE", "PLACES", "SOURCES"] as const;

type Mode = (typeof MODES)[number];

interface Message {
  role: "user" | "assistant";
  text: string;
  sources?: string[];
}

export function AskGuide() {
  const [question, setQuestion] = useState("");
  const [mode, setMode] = useState<Mode>("SIMPLE");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Ask Pakistan anything about the timeline, people, stories, or places in this archive. Answers are grounded in the site's sourced data.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!question.trim()) return;

    const userMessage: Message = { role: "user", text: question.trim() };
    setMessages((current) => [...current, userMessage]);
    setQuestion("");
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMessage.text, mode }),
      });

      if (!response.ok) {
        throw new Error("The AI guide backend did not respond correctly.");
      }

      const data = (await response.json()) as { answer: string; sources: string[] };
      setMessages((current) => [
        ...current,
        { role: "assistant", text: data.answer, sources: data.sources },
      ]);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const quickSummary = useMemo(() => {
    if (messages.length <= 1) return "";
    const last = messages[messages.length - 1];
    return last.role === "assistant"
      ? last.text.slice(0, 180) + (last.text.length > 180 ? "..." : "")
      : "";
  }, [messages]);

  return (
    <div className="space-y-10">
      <div className="rounded-3xl border border-[#1C211E]/10 bg-[#F4F0E6]/80 p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#6D736C]">
              AI historical guide
            </p>
            <h2 className="mt-2 text-3xl font-serif text-[#123C2A]">Ask Pakistan</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#1C211E]/90">
              Grounded answers are generated from this site's own archive data. If a question cannot
              be answered from the available dataset, the assistant will say it does not have
              verified information.
            </p>
          </div>
          <div className="grid gap-3 rounded-3xl border border-[#1C211E]/10 bg-white p-4 text-sm text-[#1C211E]/90">
            <p className="uppercase tracking-[0.22em] text-[#6D736C]">Mode</p>
            <div className="grid grid-cols-3 gap-2">
              {MODES.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setMode(option)}
                  className={[
                    "rounded-full px-3 py-2 text-xs font-semibold transition",
                    mode === option
                      ? "bg-[#B99A5B] text-[#0B1511]"
                      : "border border-[#E3DCC9] bg-white text-[#6D736C] hover:bg-[#F7F5EF]",
                  ].join(" ")}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-6 rounded-3xl border border-[#1C211E]/10 bg-white p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <label
              className="text-xs uppercase tracking-[0.22em] text-[#6D736C]"
              htmlFor="ask-question"
            >
              Ask a question
            </label>
            <textarea
              id="ask-question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              rows={4}
              className="w-full rounded-3xl border border-[#1C211E]/15 bg-[#F4F0E6] px-4 py-4 text-sm text-[#1C211E] outline-none transition focus:border-[#123C2A]"
              placeholder="e.g. What was the Lahore Resolution?"
            />
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-[#6D736C]">
                Quick mode: {mode}. Sources are shown with each answer.
              </p>
              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-[#123C2A] px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#0f2a20] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Listening..." : "Send question"}
              </button>
            </div>
          </form>

          {error ? (
            <div className="rounded-3xl border border-[#d46c49] bg-[#fff2ed] p-4 text-sm text-[#a94830]">
              {error}
            </div>
          ) : null}

          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={
                  message.role === "user"
                    ? "rounded-3xl border border-[#1C211E]/10 bg-[#E8F0E9] p-4 text-sm text-[#0B1511]"
                    : "rounded-3xl border border-[#1C211E]/10 bg-[#F4F0E6] p-4 text-sm text-[#1C211E]"
                }
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#6D736C]">
                  {message.role === "user" ? "You" : "Ask Pakistan"}
                </p>
                <p className="mt-3 whitespace-pre-line">{message.text}</p>
                {message.sources?.length ? (
                  <div className="mt-4 rounded-2xl border border-[#1C211E]/10 bg-white p-3 text-xs text-[#6D736C]">
                    <p className="font-semibold text-[#123C2A]">Sources</p>
                    <ul className="mt-2 space-y-1">
                      {message.sources.map((source) => (
                        <li key={source}>{source}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-[#1C211E]/10 bg-[#F4F0E6]/70 p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.22em] text-[#6D736C]">How this works</p>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#1C211E]/90">
            <p>
              The assistant is designed to use only the timeline, stories, people, places, and
              archive material available on this site. It does not answer with general internet
              knowledge.
            </p>
            <p>
              If the dataset does not contain a verified answer, it will say so rather than invent.
            </p>
            <p>
              Urdu answers are supported through the site language toggle, but the current version
              may offer limited responses in Urdu while the dataset is being expanded.
            </p>
          </div>
        </div>
      </div>

      {quickSummary ? (
        <div className="rounded-3xl border border-[#1C211E]/10 bg-[#FFF8DD] p-5 text-sm text-[#1C211E]/90">
          <p className="font-semibold text-[#123C2A]">Quick note</p>
          <p className="mt-3">{quickSummary}</p>
        </div>
      ) : null}
    </div>
  );
}

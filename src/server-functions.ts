import { answerArchiveQuestion } from "@/lib/ask-backend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const question = String(body.question ?? "").trim();
    const mode = String(body.mode ?? "SIMPLE").toUpperCase();

    if (!question) {
      return new Response(JSON.stringify({ error: "Question is required." }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    const answer = answerArchiveQuestion(question, mode);
    return new Response(JSON.stringify(answer), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to process the request." }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}

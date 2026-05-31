import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  const { messages } = await req.json();

  const stream = await groq.chat.completions.create({
    model: "llama3-70b-8192",
    messages: [
      {
        role: "system",
        content: "You are CoreMind AI, a helpful assistant.",
      },
      ...messages,
    ],
    stream: true,
  });

  const encoder = new TextEncoder();

  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content || "";
        controller.enqueue(encoder.encode(text));
      }
      controller.close();
    },
  });

  return new Response(readable);
}

"use client";

import { useState } from "react";

export default function Page() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "" },
    ]);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    let text = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      text += decoder.decode(value);

      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1].content = text;
        return copy;
      });
    }

    setLoading(false);
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>CoreMind AI</h1>

      <div style={styles.chatBox}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              ...styles.message,
              alignSelf: m.role === "user" ? "flex-end" : "flex-start",
              backgroundColor:
                m.role === "user"
                  ? "rgba(168,85,247,0.3)"
                  : "rgba(255,255,255,0.08)",
            }}
          >
            {m.content}
          </div>
        ))}
      </div>

      <div style={styles.inputBox}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message CoreMind AI..."
          style={styles.input}
        />

        <button onClick={send} style={styles.button}>
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    color: "white",
    fontFamily: "Arial",
    background: "radial-gradient(circle at top, #1a0033, #000000 70%)",
    overflow: "hidden",
  },

  title: {
    textAlign: "center",
    padding: "15px",
    fontSize: "22px",
    fontWeight: "bold",
    background: "linear-gradient(90deg, #a855f7, #6366f1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 0 20px rgba(168,85,247,0.5)",
  },

  chatBox: {
    flex: 1,
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    overflowY: "auto",
    background: "rgba(255,255,255,0.02)",
    backdropFilter: "blur(10px)",
  },

  message: {
    padding: "12px",
    borderRadius: "14px",
    maxWidth: "75%",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  inputBox: {
    display: "flex",
    padding: "12px",
    gap: "10px",
    background: "rgba(20,20,40,0.6)",
    backdropFilter: "blur(15px)",
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },

  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(0,0,0,0.4)",
    color: "white",
    outline: "none",
  },

  button: {
    padding: "12px 18px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(90deg, #a855f7, #6366f1)",
    color: "white",
    cursor: "pointer",
  },
};

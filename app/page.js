"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Ready when you are." },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const container = document.getElementById("stars");

    const createStar = () => {
      const star = document.createElement("div");
      star.className = "shooting-star";

      star.style.left = Math.random() * window.innerWidth + "px";
      star.style.top = Math.random() * window.innerHeight * 0.5 + "px";

      container.appendChild(star);

      setTimeout(() => star.remove(), 1200);
    };

    const interval = setInterval(createStar, 500);
    return () => clearInterval(interval);
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: input },
      { role: "bot", text: "..." },
    ]);

    setInput("");
  };

  return (
    <div className="screen">
      <div className="glow" />
      <div id="stars" className="stars" />

      <div className="center">
        <div className="chat">
          <div className="top">💬 Chat</div>

          <div className="messages">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`msg ${m.role === "user" ? "user" : "bot"}`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="inputRow">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .screen {
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          background: #05010a;
          color: white;
          position: relative;
          font-family: sans-serif;
        }

        .glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center,
            rgba(160, 80, 255, 0.25),
            transparent 60%
          );
        }

        .stars {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .center {
          position: relative;
          z-index: 10;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 16px;
        }

        /* 🔥 RESPONSIVE CHAT */
        .chat {
          width: 100%;
          max-width: 420px;
          height: 70vh;
          display: flex;
          flex-direction: column;

          background: rgba(20, 10, 40, 0.6);
          border: 1px solid rgba(160, 80, 255, 0.25);
          border-radius: 18px;
          backdrop-filter: blur(18px);
          box-shadow: 0 0 40px rgba(160, 80, 255, 0.15);
        }

        .top {
          padding: 12px;
          font-weight: 600;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .messages {
          flex: 1;
          overflow-y: auto;
          padding: 12px;
        }

        .msg {
          padding: 8px 10px;
          margin-bottom: 8px;
          border-radius: 10px;
          font-size: 14px;
          max-width: 85%;
          word-wrap: break-word;
        }

        .user {
          background: rgba(124, 58, 237, 0.35);
          margin-left: auto;
        }

        .bot {
          background: rgba(255, 255, 255, 0.08);
          margin-right: auto;
        }

        .inputRow {
          display: flex;
          gap: 8px;
          padding: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        input {
          flex: 1;
          padding: 10px;
          border-radius: 10px;
          border: none;
          outline: none;
          background: rgba(255, 255, 255, 0.08);
          color: white;
        }

        button {
          padding: 10px 14px;
          border-radius: 10px;
          border: none;
          background: #7c3aed;
          color: white;
          cursor: pointer;
        }

        .shooting-star {
          position: absolute;
          width: 2px;
          height: 80px;
          background: linear-gradient(white, transparent);
          transform: rotate(45deg);
          animation: shoot 1.2s linear forwards;
          opacity: 0.8;
        }

        @keyframes shoot {
          0% {
            transform: translate(0, 0) rotate(45deg);
            opacity: 1;
          }
          100% {
            transform: translate(250px, 250px) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
    }

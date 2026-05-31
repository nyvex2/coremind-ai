"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // create shooting stars dynamically
    const container = document.getElementById("stars");

    const createStar = () => {
      const star = document.createElement("div");
      star.className = "shooting-star";

      star.style.left = Math.random() * window.innerWidth + "px";
      star.style.top = Math.random() * window.innerHeight * 0.5 + "px";

      container.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 2000);
    };

    const interval = setInterval(createStar, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-[#05010a]">

      {/* galaxy glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)]" />

      {/* animated stars layer */}
      <div id="stars" className="absolute inset-0 pointer-events-none" />

      {/* floating chat UI */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="chatCard">
          <div className="header">🌌 Nebula AI</div>
          <div className="messages">
            <p>Hey 👋 I’m your space AI</p>
            <p>Ask me anything...</p>
          </div>

          <div className="inputBox">
            <input placeholder="Type a message..." />
            <button>Send ⚡</button>
          </div>
        </div>
      </div>

      {/* styles */}
      <style jsx>{`
        .chatCard {
          width: 360px;
          backdrop-filter: blur(20px);
          background: rgba(20, 10, 40, 0.6);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 20px;
          padding: 16px;
          box-shadow: 0 0 40px rgba(168, 85, 247, 0.2);
          animation: float 6s ease-in-out infinite;
        }

        .header {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .messages {
          height: 180px;
          overflow: auto;
          font-size: 14px;
          opacity: 0.9;
        }

        .inputBox {
          display: flex;
          gap: 8px;
          margin-top: 10px;
        }

        input {
          flex: 1;
          padding: 10px;
          border-radius: 10px;
          border: none;
          outline: none;
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        button {
          padding: 10px 12px;
          border-radius: 10px;
          border: none;
          background: purple;
          color: white;
          cursor: pointer;
        }

        /* shooting stars */
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
            transform: translate(300px, 300px) rotate(45deg);
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </div>
  );
}

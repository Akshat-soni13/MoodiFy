import React, { useEffect, useState } from "react";

export default function UltraLoader() {
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState([]);

  // Progress Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Particle Generator
  useEffect(() => {
    const particleInterval = setInterval(() => {
      const id = Date.now();

      const newParticle = {
        id,
        left: Math.random() * 100,
        size: Math.random() * 6 + 2,
        color: `hsl(${Math.random() * 360},100%,70%)`,
        duration: Math.random() * 2 + 2,
      };

      setParticles((prev) => [...prev, newParticle]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, 4000);
    }, 80);

    return () => clearInterval(particleInterval);
  }, []);

  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-black">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/30 blur-[120px] animate-pulse delay-700" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
      </div>

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* PARTICLES */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: "-20px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            animation: `floatParticle ${p.duration}s linear forwards`,
            boxShadow: `0 0 20px ${p.color}`,
          }}
        />
      ))}

      {/* MAIN CARD */}
      <div className="relative z-10 flex h-[500px] w-[420px] flex-col items-center justify-center overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_rgba(168,85,247,0.35)]">

        {/* ORBITAL RINGS */}
        <div className="relative flex items-center justify-center">

          {/* Ring 1 */}
          <div className="absolute h-[260px] w-[260px] animate-spin rounded-full border border-fuchsia-500/40" />

          {/* Ring 2 */}
          <div className="absolute h-[220px] w-[220px] animate-[spin_6s_linear_infinite_reverse] rounded-full border-4 border-dashed border-cyan-400/50" />

          {/* Ring 3 */}
          <div className="absolute h-[170px] w-[170px] animate-spin rounded-full border-t-4 border-r-4 border-violet-500 border-transparent" />

          {/* CENTER CORE */}
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 shadow-[0_0_60px_rgba(168,85,247,0.9)]">

            {/* Pulse */}
            <div className="absolute h-36 w-36 animate-ping rounded-full bg-violet-400/20" />

            {/* Inner Glow */}
            <div className="h-8 w-8 animate-pulse rounded-full bg-white shadow-[0_0_40px_white]" />
          </div>
        </div>

        {/* TEXT */}
        <div className="mt-16 text-center">
          <h1 className="bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-400 bg-clip-text text-5xl font-black tracking-[12px] text-transparent">
            LOADING
          </h1>

          <p className="mt-4 text-sm tracking-[6px] text-white/50">
            INITIALIZING EXPERIENCE
          </p>
        </div>

        {/* PROGRESS */}
        <div className="mt-12 w-[280px]">

          <div className="mb-3 flex justify-between text-xs tracking-[4px] text-white/50">
            <span>RENDERING</span>
            <span>{progress}%</span>
          </div>

          <div className="h-4 overflow-hidden rounded-full border border-white/10 bg-white/10">
            <div
              className="relative h-full rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-500 transition-all duration-200"
              style={{
                width: `${progress}%`,
                boxShadow: "0 0 25px rgba(217,70,239,0.8)",
              }}
            >
              <div className="absolute right-0 top-0 h-full w-16 bg-white/30 blur-xl" />
            </div>
          </div>
        </div>

        {/* STATUS */}
        <div className="mt-8 flex items-center gap-3 text-sm tracking-[5px] text-emerald-400">
          <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_20px_#4ade80]" />
          SYSTEM ONLINE
        </div>
      </div>

      {/* CUSTOM ANIMATION */}
      <style>
        {`
          @keyframes floatParticle {
            from {
              transform: translateY(0px) scale(1);
              opacity: 1;
            }

            to {
              transform: translateY(-100vh) scale(0);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
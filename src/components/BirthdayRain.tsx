import { useEffect, useState } from "react";

const TEXT = "HAPPYBIRTHDAY";

interface Column {
  id: number;
  left: number;
  duration: number;
  delay: number;
  chars: string[];
  fontSize: number;
  opacity: number;
}

export function BirthdayRain() {
  const [columns, setColumns] = useState<Column[]>([]);

  useEffect(() => {
    const count = Math.max(1, Math.floor(window.innerWidth / 22));
    const cols: Column[] = Array.from({ length: count }, (_, i) => {
      const len = 12 + Math.floor(Math.random() * 30);
      const chars = Array.from({ length: len }, (_, j) => TEXT[(i + j) % TEXT.length]);
      return {
        id: i,
        left: (i / count) * 100 + (Math.random() - 0.5) * 1.5,
        duration: 6 + Math.random() * 10,
        delay: Math.random() * -15,
        chars,
        fontSize: 12 + Math.random() * 8,
        opacity: 0.25 + Math.random() * 0.55,
      };
    });
    setColumns(cols);
  }, []);

  if (columns.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-background/40" />
      {columns.map((col) => (
        <div
          key={col.id}
          className="absolute top-0 font-mono font-bold leading-tight whitespace-pre"
          style={{
            left: `${col.left}%`,
            fontSize: `${col.fontSize}px`,
            animation: `drip ${col.duration}s linear ${col.delay}s infinite`,
            opacity: col.opacity,
            textShadow: "0 0 8px var(--pink-bright), 0 0 16px var(--pink-deep)",
            color: "var(--pink-glow)",
            writingMode: "vertical-rl",
          }}
        >
          {col.chars.map((c, i) => (
            <span
              key={i}
              style={{
                color: i === 0 ? "var(--pink-glow)" : i < 3 ? "var(--pink-bright)" : "var(--pink-deep)",
                opacity: 1 - i / col.chars.length,
              }}
            >
              {c}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

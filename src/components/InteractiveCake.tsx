import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Flame } from "lucide-react";

export function InteractiveCake() {
  const [candles, setCandles] = useState([true, true, true, true, true]);
  const allOut = candles.every((c) => !c);

  const blow = (i: number) => {
    setCandles((prev) => prev.map((c, idx) => (idx === i ? false : c)));
  };

  const relight = () => setCandles([true, true, true, true, true]);

  return (
    <div className="relative mx-auto flex w-full max-w-xl flex-col items-center">
      {/* candles */}
      <div className="relative flex h-32 items-end gap-4">
        {candles.map((lit, i) => (
          <button
            key={i}
            onClick={() => blow(i)}
            className="group relative flex flex-col items-center"
            aria-label={`blow candle ${i + 1}`}
          >
            <AnimatePresence>
              {lit && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.3 }}
                  className="relative"
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], rotate: [-3, 3, -3] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                  >
                    <Flame className="h-8 w-8 text-pink-glow" style={{ filter: "drop-shadow(0 0 12px var(--pink-bright))" }} />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            <div
              className="h-20 w-3 rounded-t-sm transition-all group-hover:scale-110"
              style={{ background: "var(--gradient-pink)", boxShadow: lit ? "0 0 20px var(--pink-bright)" : "none" }}
            />
          </button>
        ))}
      </div>

      {/* cake body */}
      <div className="relative w-full">
        <div className="h-12 rounded-t-2xl border-t-2 border-pink-glow/60" style={{ background: "var(--gradient-pink)" }} />
        <div className="h-20 rounded-b-2xl bg-gradient-to-b from-pink-deep to-magenta" />
        <div className="absolute inset-x-0 top-12 flex justify-around">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="h-4 w-2 rounded-full bg-pink-glow/80" />
          ))}
        </div>
      </div>

      <p className="mt-8 text-center font-mono text-xs uppercase tracking-widest text-pink-bright">
        {allOut ? "✦ wish made ✦" : "TAP THE CANDLE TO BLOW IT OUT"}
      </p>

      <AnimatePresence>
        {allOut && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-center"
          >
            <p className="font-display text-3xl italic text-gradient-pink">✦ Your wish have been granted by god and is on its way, TATHASTU ✦ </p>
            <button onClick={relight} className="mt-4 btn-outline-pink rounded-full px-6 py-2 text-xs uppercase tracking-widest">
              relight & wish again
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

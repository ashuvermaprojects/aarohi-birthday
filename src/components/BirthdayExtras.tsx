import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import img18 from "@/images/img18.png";
import img19 from "@/images/img19.png";
import img22 from "@/images/img22.png";
import img21 from "@/images/img21.png";
import img5 from "@/images/img5.png";
import img6 from "@/images/img6.png";
import img7 from "@/images/img7.png";
import img8 from "@/images/img8.png";
import { Video } from "lucide-react";
import song2 from "@/images/song2.mp4";

// Trails pink hearts/sparkles after the cursor
export function CursorTrail() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; emoji: string }[]>([]);
  const idRef = useRef(0);
  const lastRef = useRef(0);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastRef.current < 60) return;
      lastRef.current = now;
      const emojis = ["✦", "♥", "✿", "★"];
      const id = idRef.current++;
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      setParticles((prev) => [...prev.slice(-15), { id, x: e.clientX, y: e.clientY, emoji }]);
      setTimeout(() => setParticles((prev) => prev.filter((p) => p.id !== id)), 1000);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ x: p.x, y: p.y, opacity: 1, scale: 1 }}
          animate={{ x: p.x + (Math.random() - 0.5) * 60, y: p.y - 40, opacity: 0, scale: 1.6 }}
          transition={{ duration: 1 }}
          className="absolute -translate-x-1/2 -translate-y-1/2 text-xl"
          style={{ color: "var(--pink-glow)", textShadow: "0 0 10px var(--pink-bright)" }}
        >
          {p.emoji}
        </motion.span>
      ))}
    </div>
  );
}

// Infinite horizontal marquee of reasons
export function ReasonsMarquee() {
  const reasonsA = [
    "your smile", "your eyes",
    "your taste in music", "your cute doodles", "your handwriting",
    "your big big heart", "the way you remember everything",
    "your cute voice", "your yap talks", "your taste in movies",
  ];
  const reasonsB = [
    "your jokes", "your taste in food",
    "your humour", "your childish acts",
    "the way you appreciate people", "your kindness",
    "your calm aura", "your glow", "your energy",
  ];
  const lineA = [...reasonsA, ...reasonsA];
  const lineB = [...reasonsB, ...reasonsB];

  return (
    <div className="space-y-6">
      <div className="relative w-full overflow-hidden py-4" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap font-display text-5xl italic md:text-7xl"
        >
          {lineA.map((r, i) => (
            <span key={`a-${i}`} className="flex items-center gap-12">
              <span className={i % 3 === 0 ? "text-gradient-pink" : i % 3 === 1 ? "text-foreground/90" : "italic text-pink-glow"}>
                {r}
              </span>
              <span className="text-pink-bright">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden py-4" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap font-display text-5xl italic md:text-7xl"
        >
          {lineB.map((r, i) => (
            <span key={`b-${i}`} className="flex items-center gap-12">
              <span className={i % 3 === 0 ? "italic text-pink-glow" : i % 3 === 1 ? "text-gradient-pink" : "text-foreground/90"}>
                {r}
              </span>
              <span className="text-pink-bright">✦</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// Typewriter love letter
export function TypewriterLetter() {
  const fullText =
    "dear aarohi,\n\ni genuinely don't think you realize how special you are to the people around you. you have that kind of personality which makes others feel comfortable, happy, and better.\n\ni hope 18 treats you gently and beautifully. may this year bring you closer to everything you dreamt about at 2 am. may you get your dreams, every little wish, everything.\n\nhappy 18th birthday dear,\ni'm glad you exist <3";
  const [text, setText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const t = setInterval(() => {
      i++;
      setText(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(t);
    }, 28);
    return () => clearInterval(t);
  }, [started]);

  return (
    <motion.div
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true }}
      className="mx-auto max-w-2xl rounded-2xl border border-pink-bright/40 bg-card/70 p-10 backdrop-blur-md md:p-14"
      style={{ boxShadow: "var(--shadow-glow)" }}
    >
      <p className="font-display text-xl italic leading-relaxed text-foreground/90 md:text-2xl" style={{ whiteSpace: "pre-wrap" }}>
        {text}
        <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-pink-bright align-middle" />
      </p>
    </motion.div>
  );
}

// Polaroid stack — draggable
export function PolaroidStack() {
  const polaroids = [
    { label: "Attitude toh aise dikha rahi hain, jaise meri favorite person ho <3", rotate: -8, image: img18, imageCode: "img18" },
    { label: "Always gonna be my favorite good morning sticker, haha. <3", rotate: 6, image: img19, imageCode: "img19" },
    { label: "Hahaa, your childishness is what gets me! Stay like this always <3", rotate: -3, image: img22, imageCode: "img22" },
    { label: "Chhotu si aarohi, aww. Born cute, stayed cute. <3", rotate: 9, image: img21, imageCode: "img21" },
  ];
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-md">
      {polaroids.map((p, i) => (
        <motion.div
          key={i}
          drag
          dragMomentum={false}
          initial={{ rotate: p.rotate, x: i * 8 - 16, y: i * 6 }}
          whileHover={{ scale: 1.05, zIndex: 50 }}
          whileDrag={{ scale: 1.08, zIndex: 50 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing"
        >
          <div className="w-64 rounded-sm bg-foreground/95 p-3 pb-12" style={{ boxShadow: "0 20px 50px -10px rgba(0,0,0,0.6)" }}>
            <img src={p.image} alt={p.label} className="aspect-square w-full rounded-sm object-cover" />
            <p className="mt-4 text-center font-display text-lg italic text-background">{p.label}</p>
          </div>
        </motion.div>
      ))}
      <p className="absolute -bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-widest text-pink-bright">
        ↑ drag the polaroids ↑
      </p>
    </div>
  );
}

// Mock music player
export function NowPlaying({ backgroundAudioRef }: { backgroundAudioRef: React.RefObject<HTMLAudioElement | null> }) {
  const [playing, setPlaying] = useState(false);
  const song2Ref = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    const audio = song2Ref.current;
    const bgAudio = backgroundAudioRef.current;

    if (!audio || !bgAudio) return;

    if (playing) {
      // Stop song2 and resume background
      audio.pause();
      audio.currentTime = 0;
      bgAudio.play().catch(() => {
        // audio play may be blocked
      });
      setPlaying(false);
    } else {
      // Start song2 and pause background
      bgAudio.pause();
      audio.currentTime = 0;
      audio.play().catch(() => {
        // audio play may be blocked
      });
      setPlaying(true);
    }
  };

  useEffect(() => {
    const audio = song2Ref.current;
    const bgAudio = backgroundAudioRef.current;

    if (!audio) return;

    const handleSongEnd = () => {
      setPlaying(false);
      if (bgAudio) {
        bgAudio.play().catch(() => {
          // audio play may be blocked
        });
      }
    };

    audio.addEventListener("ended", handleSongEnd);
    return () => audio.removeEventListener("ended", handleSongEnd);
  }, [backgroundAudioRef]);

  return (
    <div className="mx-auto flex w-full max-w-md items-center gap-5 rounded-full border border-pink-bright/40 bg-card/70 p-3 pr-6 backdrop-blur-md" style={{ boxShadow: "var(--shadow-glow)" }}>
      <button
        onClick={handlePlayPause}
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-2xl text-primary-foreground"
        style={{ background: "var(--gradient-pink)" }}
      >
        {playing ? "❚❚" : "▶"}
      </button>
      <audio ref={song2Ref} src={song2} preload="auto" />
      <div className="min-w-0 flex-1">
        <p className="truncate font-display text-lg text-foreground">The line of song perfectly fits on you</p>
        <div className="mt-2 flex items-center gap-2">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-muted">
            <motion.div
              animate={{ width: playing ? "100%" : "30%" }}
              transition={{ duration: playing ? 200 : 0.5, ease: "linear" }}
              className="h-full"
              style={{ background: "var(--gradient-pink)" }}
            />
          </div>
          <span className="font-mono text-xs text-muted-foreground">∞:∞</span>
        </div>
      </div>
      {playing && (
        <div className="flex items-end gap-[3px]">
          {[1, 2, 3, 4].map((b) => (
            <motion.div
              key={b}
              animate={{ height: ["8px", "20px", "8px"] }}
              transition={{ repeat: Infinity, duration: 0.6 + b * 0.1 }}
              className="w-1 rounded-full bg-pink-glow"
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Floating balloons in background of a section
export function Balloons() {
  const [balloons, setBalloons] = useState<Array<{ id: number; left: number; duration: number; delay: number; size: number; color: string }>>([]);

  useEffect(() => {
    setBalloons(
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 14 + Math.random() * 12,
        delay: Math.random() * -10,
        size: 30 + Math.random() * 40,
        color: ["var(--pink-bright)", "var(--pink-glow)", "var(--magenta)", "var(--pink-deep)"][i % 4],
      }))
    );
  }, []);

  if (balloons.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {balloons.map((b) => (
        <motion.div
          key={b.id}
          initial={{ y: "110vh", x: 0 }}
          animate={{ y: "-20vh", x: [0, 20, -20, 0] }}
          transition={{ y: { duration: b.duration, repeat: Infinity, delay: b.delay, ease: "linear" }, x: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute"
          style={{ left: `${b.left}%` }}
        >
          <div
            className="rounded-full"
            style={{
              width: b.size,
              height: b.size * 1.2,
              background: `radial-gradient(circle at 30% 30%, ${b.color}, color-mix(in oklab, ${b.color} 40%, black))`,
              boxShadow: `0 0 30px ${b.color}`,
            }}
          />
          <div className="mx-auto h-16 w-px bg-pink-bright/40" />
        </motion.div>
      ))}
    </div>
  );
}

// Quiz / "how well do I know you" card
export function QuizCard() {
  const questions = [
    { q: "your unhinged talent is…", a: "Can start talking about one thing and end up in a completely different universe" },
    { q: "your love language is…", a: "sending memes at 2am" },
    { q: "lastly, few things that i loves the most in you", a: "Your personality, your humour, your kindness, your voice, your smile, your music taste, your patience, your honesty, your empathy, your maturity, your silliness, your intelligence, your curiosity, your positivity, your loyalty, your late night thoughts, your random rants, your confidence, your determination, your resilience, your generosity, your warmth, your ability to listen, your caring nature, your laughter, your energy, your creativity, your imagination, your weirdness, your authenticity, your compassion, your softness, your strength, your independence, your passion, your excitement over little things, your ability to make people comfortable, your good heart, your playlists, your song recommendations, your opinions, your perspective on life, your supportiveness, your optimism, your thoughtfulness, your honesty even when it's difficult, your ability to cheer people up, the way you care, the way you speak, the way you tell stories, the way you remember little details, the way you stay strong, the way you trust, the way you help others, the way you love your friends, the way you stay true to yourself, the way you handle difficult days, your random facts, your excitement when talking about things you love, your sleepy conversations, your yapping sessions, your unpredictability, your emotional depth, your uniqueness, your beautiful heart, your gentle soul, your sincerity, your presence, your effort, your consistency, your comforting words, your understanding nature, your ability to forgive, your dreams, your ambitions, your courage, your selflessness, your random messages, your enthusiasm, your ability to brighten a day, your open-mindedness, your inner child, your appreciation for music, your emotional strength, your ability to make strangers feel like friends, your beautiful mind, your beautiful soul, your existence, the memories we've made, the conversations we've had, the trust we've built, the happiness you bring, the person you are, the person you're becoming, and simply, you." },
  ];
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-4">
      {questions.map((q, i) => (
        <motion.button
          key={i}
          onClick={() => setOpen(open === i ? null : i)}
          layout
          className="rounded-2xl border border-pink-bright/30 bg-card/60 p-6 text-left backdrop-blur-md transition hover:border-pink-glow"
        >
          <div className="flex items-center justify-between gap-4">
            <span className="font-display text-2xl text-foreground">{q.q}</span>
            <span className="text-pink-glow">{open === i ? "−" : "+"}</span>
          </div>
          {open === i && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 italic text-pink-glow"
            >
              {q.a}
            </motion.p>
          )}
        </motion.button>
      ))}
    </div>
  );
}

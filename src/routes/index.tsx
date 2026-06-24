import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useAudioContext } from "./__root";
import { Heart, Sparkles, Gift, Cake, Star, Music } from "lucide-react";
import { BirthdayRain } from "@/components/BirthdayRain";
import { PhotoFrame } from "@/components/PhotoFrame";
import { InteractiveCake } from "@/components/InteractiveCake";
import {
  CursorTrail,
  ReasonsMarquee,
  TypewriterLetter,
  PolaroidStack,
  NowPlaying,
  Balloons,
  QuizCard,
} from "@/components/BirthdayExtras";
import heroBg from "@/assets/hero-bg.jpg";
import img1 from "@/images/img1.png";
import img2 from "@/images/img2.png";
import img3 from "@/images/img3.png";
import img4 from "@/images/img4.png";
import img5 from "@/images/img5.png";
import img6 from "@/images/img6.png";
import img7 from "@/images/img7.png";
import img8 from "@/images/img8.png";
import img9 from "@/images/img9.png";
import img10 from "@/images/img10.png";
import img11 from "@/images/img11.png";
import img12 from "@/images/img12.png";
import img13 from "@/images/img13.png";
import img14 from "@/images/img14.png";
import img15 from "@/images/img15.png";
import img16 from "@/images/img16.png";
import img17 from "@/images/img17.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday ✦ Aarohi" },
      { name: "description", content: "A long, dreamy, animated birthday wish, handcrafted with pink lights and falling letters." },
      { property: "og:title", content: "Happy Birthday ✦" },
      { property: "og:description", content: "Scroll through a galaxy made just for you." },
    ],
  }),
  component: Index,
});

const memories = [
  { year: "HOW WE WE MET", text: "It all started with a random group chat, a random person, and a random join request.\u00a0\n\nBack then, it all felt like nothing. Now? it feels like one of life's best incidents" },
  { year: "HOW WE GOT CLOSE", text: "I never thought I'd trust a stranger this easily, until I met you <3 You're naturally so kind that i can talk about literally\u00a0anything and everything with you." },
  { year: "YOUR PERSONALITY\u00a0 \u00a0\u00a0", text: "The way you still care for others, even while carrying so much of your own pain. The way you stay strong through it all. You're the strongest and humorous\u00a0\n4'11 women ik , hehe okok 5'1!" },
  { year: "ABOUT YOU?", text: "Not one of the best,\nSHE IS DA BEST" },
];

const frameImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];
const galleryImages = [
  { image: img16, label: "In tradional >>" },
  { image: img17, label: "Your smile >>" },
  { image: frameImages[2], label: "Your cuteness >>" },
  { image: frameImages[3], label: "Your innocence >>" },
  { image: frameImages[4], label: "Your charm >>" },
  { image: frameImages[5], label: "Your beauty >>" },
];

const wishes = [
  { icon: Star, title: "Stay soft", text: "the world will try to harden you. i hope you never lose the kindness that makes you, you." },
  { icon: Heart, title: "Trust yourself", text: "You deserve every good thing that comes your way, and more." },
  { icon: Sparkles, title: "Know your worth", text: "you've survived every difficult day so far. please never underestimate your strength." },
  { icon: Cake, title: "Keep yapping", text: "Some of my favorite conversations started with absolutely nothing and somehow lasted for hours." },
  { icon: Music, title: "Your voice", text: "OMG what should i say about your voice, it's just so cute>>> i can listen to it for hrs!" },
  { icon: Gift, title: "The best gift", text: "Thank you for being part of my life. That's been a gift to me too." },
];

const BIRTH_DATE = new Date(2008, 5, 24, 0, 0, 0);

function getAgeParts(now: Date) {
  let years = now.getFullYear() - BIRTH_DATE.getFullYear();
  let months = now.getMonth() - BIRTH_DATE.getMonth();
  let days = now.getDate() - BIRTH_DATE.getDate();
  let hours = now.getHours() - BIRTH_DATE.getHours();
  let minutes = now.getMinutes() - BIRTH_DATE.getMinutes();
  let seconds = now.getSeconds() - BIRTH_DATE.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }
  if (days < 0) {
    const prevMonthLastDay = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prevMonthLastDay;
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  const totalMilliseconds = now.getTime() - BIRTH_DATE.getTime();
  const totalSeconds = Math.max(0, Math.floor(totalMilliseconds / 1000));
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  return { years, months, days, hours, minutes, seconds, totalDays, totalHours, totalMinutes, totalSeconds };
}

function Index() {
  const { backgroundAudioRef } = useAudioContext();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const [ageParts, setAgeParts] = useState(() => ({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0,
    totalHours: 0,
    totalMinutes: 0,
    totalSeconds: 0,
  }));

  useEffect(() => {
    const tick = () => setAgeParts(getAgeParts(new Date()));
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <BirthdayRain />
      <CursorTrail />

      <div className="relative z-10">
        {/* HERO */}
        <section ref={heroRef} className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
          <motion.div
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="absolute inset-0 -z-10"
          >
            <img src={heroBg} alt="" className="h-full w-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
          </motion.div>

          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-6 font-mono text-sm uppercase tracking-[0.4em] text-pink-glow"
            >
              ✦ KEEP SCROLLING · TO EXPLORE YOURSELF ✦
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="font-display text-6xl font-bold leading-none md:text-9xl lg:text-[12rem]"
            >
              <span className="block animate-shimmer">Happy</span>
              <span className="block animate-pulse-glow text-gradient-pink">Birthday</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mx-auto mt-8 max-w-xl font-display text-2xl italic text-pink-glow md:text-3xl"
            >
              To the person I've never met irl, yet means so much{"\n"}
              to me &lt;3
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-4"
            >
              <button type="button" className="btn-outline-pink cursor-pointer rounded-full px-8 py-4 text-base font-semibold uppercase tracking-widest">
                HAPPY
              </button>
              <button type="button" className="btn-outline-pink cursor-pointer rounded-full px-8 py-4 text-base font-semibold uppercase tracking-widest">
                BIRTHDAY
              </button>
              <button type="button" className="btn-outline-pink cursor-pointer rounded-full px-8 py-4 text-base font-semibold uppercase tracking-widest">
                AAROHI
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="mt-20 flex justify-center"
            >
              <div className="flex flex-col items-center gap-2 text-pink-glow/60">
                <span className="text-xs uppercase tracking-widest">LETS SCROLL ABOUT YOURSELF</span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="h-12 w-px bg-gradient-to-b from-pink-glow to-transparent"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* INTRO LETTER */}
        <section id="wish" className="relative px-6 py-32">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <p className="mb-4 font-mono text-sm uppercase tracking-[0.4em] text-pink-bright">chapter one</p>
              <h2 className="font-display text-5xl italic text-gradient-pink md:text-7xl">A little letter</h2>
              <div className="mx-auto mt-12 space-y-6 font-display text-2xl leading-relaxed text-foreground/90 md:text-3xl">
                <p>i couldn't fit you into a card.</p>
                <p>so i built you a <span className="text-gradient-pink font-bold">whole tiny universe</span> instead.</p>
                <p className="text-xl text-muted-foreground italic">(scroll. there's more. there's so much more.)</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* REASONS MARQUEE */}
        <section className="relative py-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 text-center font-mono text-xs uppercase tracking-[0.4em] text-pink-bright"
          >
            ✦ ~ A non-exhaustive list of things i love about you ~ ✦
          </motion.p>
          <ReasonsMarquee />
        </section>

        <section className="relative px-6 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
            <PhotoFrame label="Look who's this!?" caption="Itni cuteness kahan se laaye the?" align="left" ratio="portrait" imageSrc={img1} />
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <p className="font-mono text-sm uppercase tracking-widest text-pink-bright">exhibit a</p>
              <h3 className="mt-4 font-display text-5xl text-foreground">proof that <span className="text-gradient-pink">angels</span> do exist!</h3>
              <p className="mt-6 text-lg text-muted-foreground">
                Do you know that angels do exist? Don't belive me? Okay then just look at this cute little baby right here, who knew she&apos;d end up becoming one of the most amazing people i know? Her innocent face, those cute round sparkling eyes, those adorable chubby cheeks... oh my gosh!! She&apos;s just divine. The kind of person who makes you smile without your permission. The kind of person whose charm alone can make anybody feel better. She's just truly one of the prettiest souls I&apos;ve ever had the privilege of knowing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* MEMORIES TIMELINE */}
        <section id="memories" className="relative px-6 py-32">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 text-center"
            >
              <p className="font-mono text-sm uppercase tracking-[0.4em] text-pink-bright">chapter two</p>
              <h2 className="mt-4 font-display text-5xl italic text-gradient-pink md:text-7xl">the road of our journey</h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-pink-bright to-transparent" />
              {memories.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8 }}
                  className={`relative mb-20 flex w-full ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-full md:w-5/12 ${i % 2 === 0 ? "md:pr-12 text-right" : "md:pl-12 text-left"}`}>
                    <div className="rounded-2xl border border-pink-bright/30 bg-card/60 p-8 backdrop-blur-md" style={{ boxShadow: "var(--shadow-glow)" }}>
                      <p className="font-mono text-xs uppercase tracking-widest text-pink-glow">{m.year}</p>
                      <p className="mt-3 font-display text-2xl italic text-foreground">{m.text}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-8 h-4 w-4 -translate-x-1/2 rounded-full bg-pink-bright" style={{ boxShadow: "var(--shadow-glow)" }} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TYPEWRITER LETTER */}
        <section className="relative px-6 py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.4em] text-pink-bright">A SEALED VIRTUAL ENVELOPE</p>
            <h2 className="mb-12 font-display text-5xl italic text-gradient-pink md:text-7xl">For The Birthday Girl</h2>
          </div>
          <TypewriterLetter />
        </section>

        {/* PHOTO 2 */}
        <section className="relative px-6 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="md:order-2"
            >
              <p className="font-mono text-sm uppercase tracking-widest text-pink-bright">exhibit b</p>
              <h3 className="mt-4 font-display text-5xl text-foreground">and now, the angel got <span className="ml-1 mr-1 inline-flex items-end bg-gradient-to-r from-pink-glow via-pink-bright to-magenta bg-clip-text text-transparent [font-family:'Georgia',serif] [font-style:italic] [letter-spacing:0.08em] [transform:skewX(-6deg)] [font-size:0.95em] [padding-left:0.08em] [padding-right:0.18em] [line-height:0.95]">wings</span></h3>
              <div className="mt-6 flex flex-col items-start space-y-1 text-left text-lg leading-8 text-muted-foreground/80">
                <div>Her name: aarohi</div>
                <div>Her age: 18</div>
                <div>Her height: 4'9 (okok 5'1)</div>
                <div>Her weight: paper</div>
                <div>Her cuteness: infinite</div>
                <div>Her soulmate: momo</div>
                <div className="mt-4 rounded-xl border border-pink-bright/20 bg-white/5 px-4 py-3 text-left backdrop-blur-sm">
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <span>Years: {ageParts.years}</span>
                    <span>Months: {ageParts.months}</span>
                    <span>Days: {ageParts.days}</span>
                    <span>Hours: {String(ageParts.hours).padStart(2, "0")}</span>
                    <span>Minutes: {String(ageParts.minutes).padStart(2, "0")}</span>
                    <span>Seconds: {String(ageParts.seconds).padStart(2, "0")}</span>
                  </div>
                  <div className="mt-2 border-t border-pink-bright/10 pt-2">
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      <span>Total days lived: {ageParts.totalDays.toLocaleString()}</span>
                      <span>Total hours lived: {ageParts.totalHours.toLocaleString()}</span>
                      <span>Total minutes lived: {ageParts.totalMinutes.toLocaleString()}</span>
                      <span>Total seconds lived: {ageParts.totalSeconds.toLocaleString()}</span>
                      <span>Life left to live (assuming 1000 years): {(1000 * 365 * 24 * 60 * 60 - ageParts.totalSeconds).toLocaleString()} seconds</span>
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground/70">
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="md:order-1 flex justify-center">
              <PhotoFrame label="caught laughing" caption="this is the energy." align="right" ratio="square" imageSrc={img2} overlayText="Say hellooww to yourself <3" />
            </div>
          </div>
        </section>

        {/* WISHES GRID */}
        <section id="wishes" className="relative px-6 py-32">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <p className="font-mono text-sm uppercase tracking-[0.4em] text-pink-bright">chapter three</p>
              <h2 className="mt-4 font-display text-5xl italic text-gradient-pink md:text-7xl">six wishes for the rest of the year</h2>
              <p className="mt-4 text-lg text-muted-foreground">May each month, they grows more</p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {wishes.map((w, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border border-pink-bright/30 bg-card/50 p-8 backdrop-blur-md transition-all hover:border-pink-glow"
                  style={{ boxShadow: "0 10px 40px -10px var(--pink-deep)" }}
                >
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pink-bright/20 blur-3xl transition-all group-hover:bg-pink-bright/40" />
                  <w.icon className="relative h-10 w-10 text-pink-glow" />
                  <h3 className="relative mt-6 font-display text-3xl text-foreground">{w.title}</h3>
                  <p className="relative mt-3 text-muted-foreground">{w.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERACTIVE CAKE w/ BALLOONS */}
        <section className="relative overflow-hidden px-6 py-32">
          <Balloons />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="font-mono text-sm uppercase tracking-[0.4em] text-pink-bright">Chapter Four</p>
            <h2 className="mt-4 font-display text-5xl italic text-gradient-pink md:text-7xl">Make a wish for yourself</h2>
            <p className="mt-4 text-lg text-muted-foreground">And blow your birthday cake!</p>
            <div className="mt-16">
              <InteractiveCake />
            </div>
          </div>
        </section>

        {/* PHOTO GALLERY STRIP */}
        <section className="relative px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12 text-center font-display text-4xl italic text-gradient-pink md:text-6xl"
            >
              Your gallery
            </motion.h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((item, index) => (
                <PhotoFrame
                  key={`${item.label}-${index}`}
                  label={item.label}
                  ratio={index % 3 === 0 ? "portrait" : index % 3 === 1 ? "square" : "landscape"}
                  align={index % 2 === 0 ? "left" : "right"}
                  imageSrc={item.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* POLAROIDS + MUSIC */}
        <section className="relative px-6 py-32">
          <div className="mx-auto grid max-w-6xl items-center gap-20 md:grid-cols-2">
            <div>
              <p className="font-mono text-sm uppercase tracking-widest text-pink-bright">go on, mess with them</p>
              <h3 className="mt-4 font-display text-5xl text-foreground">
                a little <span className="text-gradient-pink italic">drawer</span> of memories.
              </h3>
              <p className="mt-6 text-lg text-muted-foreground">drag the polaroids around. shuffle them. stack them. they're yours now.</p>
              <div className="mt-10">
                <NowPlaying backgroundAudioRef={backgroundAudioRef} />
              </div>
            </div>
            <PolaroidStack />
          </div>
        </section>

        {/* BIG STATEMENT */}
        <section className="relative px-6 py-40 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="mx-auto max-w-5xl"
          >
            <p className="font-mono text-sm uppercase tracking-[0.4em] text-pink-bright">the truth is</p>
            <p className="mt-8 font-display text-5xl leading-tight text-foreground md:text-8xl">
              the life have got <span className="animate-shimmer">infinitely better</span> since the day <span className="italic text-gradient-pink">you</span> showed up in it.
            </p>
          </motion.div>
        </section>

        {/* QUIZ */}
        <section className="relative px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="font-mono text-sm uppercase tracking-[0.4em] text-pink-bright">interlude</p>
            <h2 className="mt-4 font-display text-5xl italic text-gradient-pink md:text-7xl">tap to see</h2>
            <p className="mt-3 text-muted-foreground">the things that make you the best!!!!</p>
          </motion.div>
          <QuizCard />
        </section>

        {/* FINAL CTA */}
        <section className="relative px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl rounded-3xl border border-pink-bright/40 bg-gradient-to-br from-pink-deep/30 via-card/60 to-magenta/30 p-12 text-center backdrop-blur-xl md:p-16"
            style={{ boxShadow: "var(--shadow-glow-lg)" }}
          >
            <Cake className="mx-auto h-16 w-16 animate-float-soft text-pink-glow" />
            <h2 className="mt-6 font-display text-5xl text-gradient-pink md:text-7xl">promises to you</h2>
            <p className="mt-6 text-lg text-muted-foreground">Being a virtual friend, I can't really give you gifts in real life</p>
            <p className="mt-2 text-sm italic text-pink-glow">but I'll give you everything I can virtually and my promises are one of them.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="btn-glow rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-widest">
                ALWAYS BELIEVING IN YOU
              </button>
              <button className="btn-glow rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-widest">
                NOT GONNA LEAVE
              </button>
              <button className="btn-glow rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-widest">
                DISTANCE WILL NEVER CHANGE MY CARE
              </button>
            </div>
          </motion.div>
        </section>

        <footer className="relative border-t border-pink-bright/20 px-6 py-12 text-center">
          <p className="font-display text-2xl italic text-pink-glow">So lastly, a happy birthday dear, again. and again. and again.</p>
          <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">ENJOY YOUR DAY MA'AM · ♥</p>
        </footer>
      </div>
    </div>
  );
}

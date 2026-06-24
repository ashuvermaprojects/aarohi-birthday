import { n as useAudioContext } from "./__root-D6ZxMpIV.js";
import { useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { Cake, Flame, Gift, Heart, ImagePlus, Music, Sparkles, Star } from "lucide-react";
//#region src/components/BirthdayRain.tsx
var TEXT = "HAPPYBIRTHDAY";
function BirthdayRain() {
	const [columns, setColumns] = useState([]);
	useEffect(() => {
		const count = Math.max(1, Math.floor(window.innerWidth / 22));
		setColumns(Array.from({ length: count }, (_, i) => {
			const len = 12 + Math.floor(Math.random() * 30);
			const chars = Array.from({ length: len }, (_, j) => TEXT[(i + j) % 13]);
			return {
				id: i,
				left: i / count * 100 + (Math.random() - .5) * 1.5,
				duration: 6 + Math.random() * 10,
				delay: Math.random() * -15,
				chars,
				fontSize: 12 + Math.random() * 8,
				opacity: .25 + Math.random() * .55
			};
		}));
	}, []);
	if (columns.length === 0) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "pointer-events-none fixed inset-0 z-0 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-background/40" }), columns.map((col) => /* @__PURE__ */ jsx("div", {
			className: "absolute top-0 font-mono font-bold leading-tight whitespace-pre",
			style: {
				left: `${col.left}%`,
				fontSize: `${col.fontSize}px`,
				animation: `drip ${col.duration}s linear ${col.delay}s infinite`,
				opacity: col.opacity,
				textShadow: "0 0 8px var(--pink-bright), 0 0 16px var(--pink-deep)",
				color: "var(--pink-glow)",
				writingMode: "vertical-rl"
			},
			children: col.chars.map((c, i) => /* @__PURE__ */ jsx("span", {
				style: {
					color: i === 0 ? "var(--pink-glow)" : i < 3 ? "var(--pink-bright)" : "var(--pink-deep)",
					opacity: 1 - i / col.chars.length
				},
				children: c
			}, i))
		}, col.id))]
	});
}
//#endregion
//#region src/components/PhotoFrame.tsx
var ratioMap = {
	portrait: "aspect-[3/4]",
	square: "aspect-square",
	landscape: "aspect-[4/3]"
};
function PhotoFrame({ label, caption, align = "left", ratio = "portrait", imageSrc, imageAlt, overlayText }) {
	return /* @__PURE__ */ jsx(motion.div, {
		initial: {
			opacity: 0,
			y: 60,
			rotate: align === "left" ? -3 : 3
		},
		whileInView: {
			opacity: 1,
			y: 0,
			rotate: align === "left" ? -2 : 2
		},
		viewport: {
			once: true,
			margin: "-100px"
		},
		transition: {
			duration: .8,
			ease: "easeOut"
		},
		whileHover: {
			rotate: 0,
			scale: 1.03
		},
		className: `relative ${ratioMap[ratio]} w-full max-w-md rounded-2xl border border-pink-bright/40 bg-gradient-to-br from-pink-deep/20 to-magenta/20 p-2 backdrop-blur-sm`,
		style: { boxShadow: "var(--shadow-glow)" },
		children: /* @__PURE__ */ jsx("div", {
			className: "flex h-full w-full flex-col overflow-hidden rounded-xl border border-pink-glow/30 bg-background/60",
			children: imageSrc ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
				className: "relative h-full w-full",
				children: [/* @__PURE__ */ jsx("img", {
					src: imageSrc,
					alt: imageAlt ?? label,
					className: "h-full w-full object-cover"
				}), overlayText && /* @__PURE__ */ jsx("div", {
					className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent px-4 py-5 text-center",
					children: /* @__PURE__ */ jsx("p", {
						className: "font-display text-xl italic text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]",
						children: overlayText
					})
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "bg-background/85 p-4 text-center",
				children: [/* @__PURE__ */ jsx("p", {
					className: "font-display text-xl text-pink-glow",
					children: label
				}), caption && /* @__PURE__ */ jsx("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: caption
				})]
			})] }) : /* @__PURE__ */ jsxs("div", {
				className: "flex h-full w-full flex-col items-center justify-center p-6 text-center",
				children: [
					/* @__PURE__ */ jsx(ImagePlus, { className: "mb-3 h-10 w-10 text-pink-glow" }),
					/* @__PURE__ */ jsx("p", {
						className: "font-display text-2xl text-pink-glow",
						children: label
					}),
					caption && /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: caption
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-xs uppercase tracking-widest text-pink-bright/70",
						children: "drop her photo here"
					})
				]
			})
		})
	});
}
//#endregion
//#region src/components/InteractiveCake.tsx
function InteractiveCake() {
	const [candles, setCandles] = useState([
		true,
		true,
		true,
		true,
		true
	]);
	const allOut = candles.every((c) => !c);
	const blow = (i) => {
		setCandles((prev) => prev.map((c, idx) => idx === i ? false : c));
	};
	const relight = () => setCandles([
		true,
		true,
		true,
		true,
		true
	]);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative mx-auto flex w-full max-w-xl flex-col items-center",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "relative flex h-32 items-end gap-4",
				children: candles.map((lit, i) => /* @__PURE__ */ jsxs("button", {
					onClick: () => blow(i),
					className: "group relative flex flex-col items-center",
					"aria-label": `blow candle ${i + 1}`,
					children: [/* @__PURE__ */ jsx(AnimatePresence, { children: lit && /* @__PURE__ */ jsx(motion.div, {
						initial: {
							opacity: 0,
							scale: .5
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						exit: {
							opacity: 0,
							y: -40,
							scale: .3
						},
						className: "relative",
						children: /* @__PURE__ */ jsx(motion.div, {
							animate: {
								scale: [
									1,
									1.15,
									1
								],
								rotate: [
									-3,
									3,
									-3
								]
							},
							transition: {
								repeat: Infinity,
								duration: 1.2
							},
							children: /* @__PURE__ */ jsx(Flame, {
								className: "h-8 w-8 text-pink-glow",
								style: { filter: "drop-shadow(0 0 12px var(--pink-bright))" }
							})
						})
					}) }), /* @__PURE__ */ jsx("div", {
						className: "h-20 w-3 rounded-t-sm transition-all group-hover:scale-110",
						style: {
							background: "var(--gradient-pink)",
							boxShadow: lit ? "0 0 20px var(--pink-bright)" : "none"
						}
					})]
				}, i))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative w-full",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "h-12 rounded-t-2xl border-t-2 border-pink-glow/60",
						style: { background: "var(--gradient-pink)" }
					}),
					/* @__PURE__ */ jsx("div", { className: "h-20 rounded-b-2xl bg-gradient-to-b from-pink-deep to-magenta" }),
					/* @__PURE__ */ jsx("div", {
						className: "absolute inset-x-0 top-12 flex justify-around",
						children: [...Array(7)].map((_, i) => /* @__PURE__ */ jsx("div", { className: "h-4 w-2 rounded-full bg-pink-glow/80" }, i))
					})
				]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-8 text-center font-mono text-xs uppercase tracking-widest text-pink-bright",
				children: allOut ? "✦ wish made ✦" : "TAP THE CANDLE TO BLOW IT OUT"
			}),
			/* @__PURE__ */ jsx(AnimatePresence, { children: allOut && /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "mt-6 text-center",
				children: [/* @__PURE__ */ jsx("p", {
					className: "font-display text-3xl italic text-gradient-pink",
					children: "✦ Your wish have been granted by god and is on its way, TATHASTU ✦ "
				}), /* @__PURE__ */ jsx("button", {
					onClick: relight,
					className: "mt-4 btn-outline-pink rounded-full px-6 py-2 text-xs uppercase tracking-widest",
					children: "relight & wish again"
				})]
			}) })
		]
	});
}
//#endregion
//#region src/images/img18.png
var img18_default = "/assets/img18-D4kKLdK5.png";
//#endregion
//#region src/images/img19.png
var img19_default = "/assets/img19-DU_xzNGT.png";
//#endregion
//#region src/images/img22.png
var img22_default = "/assets/img22-NJ6o-yvv.png";
//#endregion
//#region src/images/img21.png
var img21_default = "/assets/img21-BD0w0ERx.png";
//#endregion
//#region src/images/song2.mp4
var song2_default = "/assets/song2-DxpzrSze.mp4";
//#endregion
//#region src/components/BirthdayExtras.tsx
function CursorTrail() {
	const [particles, setParticles] = useState([]);
	const idRef = useRef(0);
	const lastRef = useRef(0);
	useEffect(() => {
		const handler = (e) => {
			const now = Date.now();
			if (now - lastRef.current < 60) return;
			lastRef.current = now;
			const emojis = [
				"✦",
				"♥",
				"✿",
				"★"
			];
			const id = idRef.current++;
			const emoji = emojis[Math.floor(Math.random() * emojis.length)];
			setParticles((prev) => [...prev.slice(-15), {
				id,
				x: e.clientX,
				y: e.clientY,
				emoji
			}]);
			setTimeout(() => setParticles((prev) => prev.filter((p) => p.id !== id)), 1e3);
		};
		window.addEventListener("mousemove", handler);
		return () => window.removeEventListener("mousemove", handler);
	}, []);
	return /* @__PURE__ */ jsx("div", {
		className: "pointer-events-none fixed inset-0 z-50",
		children: particles.map((p) => /* @__PURE__ */ jsx(motion.span, {
			initial: {
				x: p.x,
				y: p.y,
				opacity: 1,
				scale: 1
			},
			animate: {
				x: p.x + (Math.random() - .5) * 60,
				y: p.y - 40,
				opacity: 0,
				scale: 1.6
			},
			transition: { duration: 1 },
			className: "absolute -translate-x-1/2 -translate-y-1/2 text-xl",
			style: {
				color: "var(--pink-glow)",
				textShadow: "0 0 10px var(--pink-bright)"
			},
			children: p.emoji
		}, p.id))
	});
}
function ReasonsMarquee() {
	const reasonsA = [
		"your smile",
		"your eyes",
		"your taste in music",
		"your cute doodles",
		"your handwriting",
		"your big big heart",
		"the way you remember everything",
		"your cute voice",
		"your yap talks",
		"your taste in movies"
	];
	const reasonsB = [
		"your jokes",
		"your taste in food",
		"your humour",
		"your childish acts",
		"the way you appreciate people",
		"your kindness",
		"your calm aura",
		"your glow",
		"your energy"
	];
	const lineA = [...reasonsA, ...reasonsA];
	const lineB = [...reasonsB, ...reasonsB];
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ jsx("div", {
			className: "relative w-full overflow-hidden py-4",
			style: { maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" },
			children: /* @__PURE__ */ jsx(motion.div, {
				animate: { x: ["0%", "-50%"] },
				transition: {
					repeat: Infinity,
					duration: 35,
					ease: "linear"
				},
				className: "flex gap-12 whitespace-nowrap font-display text-5xl italic md:text-7xl",
				children: lineA.map((r, i) => /* @__PURE__ */ jsxs("span", {
					className: "flex items-center gap-12",
					children: [/* @__PURE__ */ jsx("span", {
						className: i % 3 === 0 ? "text-gradient-pink" : i % 3 === 1 ? "text-foreground/90" : "italic text-pink-glow",
						children: r
					}), /* @__PURE__ */ jsx("span", {
						className: "text-pink-bright",
						children: "✦"
					})]
				}, `a-${i}`))
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "relative w-full overflow-hidden py-4",
			style: { maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" },
			children: /* @__PURE__ */ jsx(motion.div, {
				animate: { x: ["-50%", "0%"] },
				transition: {
					repeat: Infinity,
					duration: 38,
					ease: "linear"
				},
				className: "flex gap-12 whitespace-nowrap font-display text-5xl italic md:text-7xl",
				children: lineB.map((r, i) => /* @__PURE__ */ jsxs("span", {
					className: "flex items-center gap-12",
					children: [/* @__PURE__ */ jsx("span", {
						className: i % 3 === 0 ? "italic text-pink-glow" : i % 3 === 1 ? "text-gradient-pink" : "text-foreground/90",
						children: r
					}), /* @__PURE__ */ jsx("span", {
						className: "text-pink-bright",
						children: "✦"
					})]
				}, `b-${i}`))
			})
		})]
	});
}
function TypewriterLetter() {
	const fullText = "dear aarohi,\n\ni genuinely don't think you realize how special you are to the people around you. you have that kind of personality which makes others feel comfortable, happy, and better.\n\ni hope 18 treats you gently and beautifully. may this year bring you closer to everything you dreamt about at 2 am. may you get your dreams, every little wish, everything.\n\nhappy 18th birthday dear,\ni'm glad you exist <3";
	const [text, setText] = useState("");
	const [started, setStarted] = useState(false);
	useEffect(() => {
		if (!started) return;
		let i = 0;
		const t = setInterval(() => {
			i++;
			setText(fullText.slice(0, i));
			if (i >= 407) clearInterval(t);
		}, 28);
		return () => clearInterval(t);
	}, [started]);
	return /* @__PURE__ */ jsx(motion.div, {
		onViewportEnter: () => setStarted(true),
		viewport: { once: true },
		className: "mx-auto max-w-2xl rounded-2xl border border-pink-bright/40 bg-card/70 p-10 backdrop-blur-md md:p-14",
		style: { boxShadow: "var(--shadow-glow)" },
		children: /* @__PURE__ */ jsxs("p", {
			className: "font-display text-xl italic leading-relaxed text-foreground/90 md:text-2xl",
			style: { whiteSpace: "pre-wrap" },
			children: [text, /* @__PURE__ */ jsx("span", { className: "ml-1 inline-block h-6 w-[2px] animate-pulse bg-pink-bright align-middle" })]
		})
	});
}
function PolaroidStack() {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative mx-auto h-[420px] w-full max-w-md",
		children: [[
			{
				label: "Attitude toh aise dikha rahi hain, jaise meri favorite person ho <3",
				rotate: -8,
				image: img18_default,
				imageCode: "img18"
			},
			{
				label: "Always gonna be my favorite good morning sticker, haha. <3",
				rotate: 6,
				image: img19_default,
				imageCode: "img19"
			},
			{
				label: "Hahaa, your childishness is what gets me! Stay like this always <3",
				rotate: -3,
				image: img22_default,
				imageCode: "img22"
			},
			{
				label: "Chhotu si aarohi, aww. Born cute, stayed cute. <3",
				rotate: 9,
				image: img21_default,
				imageCode: "img21"
			}
		].map((p, i) => /* @__PURE__ */ jsx(motion.div, {
			drag: true,
			dragMomentum: false,
			initial: {
				rotate: p.rotate,
				x: i * 8 - 16,
				y: i * 6
			},
			whileHover: {
				scale: 1.05,
				zIndex: 50
			},
			whileDrag: {
				scale: 1.08,
				zIndex: 50
			},
			className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing",
			children: /* @__PURE__ */ jsxs("div", {
				className: "w-64 rounded-sm bg-foreground/95 p-3 pb-12",
				style: { boxShadow: "0 20px 50px -10px rgba(0,0,0,0.6)" },
				children: [/* @__PURE__ */ jsx("img", {
					src: p.image,
					alt: p.label,
					className: "aspect-square w-full rounded-sm object-cover"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-center font-display text-lg italic text-background",
					children: p.label
				})]
			})
		}, i)), /* @__PURE__ */ jsx("p", {
			className: "absolute -bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-widest text-pink-bright",
			children: "↑ drag the polaroids ↑"
		})]
	});
}
function NowPlaying({ backgroundAudioRef }) {
	const [playing, setPlaying] = useState(false);
	const song2Ref = useRef(null);
	const handlePlayPause = () => {
		const audio = song2Ref.current;
		const bgAudio = backgroundAudioRef.current;
		if (!audio || !bgAudio) return;
		if (playing) {
			audio.pause();
			audio.currentTime = 0;
			bgAudio.play().catch(() => {});
			setPlaying(false);
		} else {
			bgAudio.pause();
			audio.currentTime = 0;
			audio.play().catch(() => {});
			setPlaying(true);
		}
	};
	useEffect(() => {
		const audio = song2Ref.current;
		const bgAudio = backgroundAudioRef.current;
		if (!audio) return;
		const handleSongEnd = () => {
			setPlaying(false);
			if (bgAudio) bgAudio.play().catch(() => {});
		};
		audio.addEventListener("ended", handleSongEnd);
		return () => audio.removeEventListener("ended", handleSongEnd);
	}, [backgroundAudioRef]);
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto flex w-full max-w-md items-center gap-5 rounded-full border border-pink-bright/40 bg-card/70 p-3 pr-6 backdrop-blur-md",
		style: { boxShadow: "var(--shadow-glow)" },
		children: [
			/* @__PURE__ */ jsx("button", {
				onClick: handlePlayPause,
				className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-2xl text-primary-foreground",
				style: { background: "var(--gradient-pink)" },
				children: playing ? "❚❚" : "▶"
			}),
			/* @__PURE__ */ jsx("audio", {
				ref: song2Ref,
				src: song2_default,
				preload: "auto"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ jsx("p", {
					className: "truncate font-display text-lg text-foreground",
					children: "The line of song perfectly fits on you"
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-2 flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("div", {
						className: "h-1 flex-1 overflow-hidden rounded-full bg-muted",
						children: /* @__PURE__ */ jsx(motion.div, {
							animate: { width: playing ? "100%" : "30%" },
							transition: {
								duration: playing ? 200 : .5,
								ease: "linear"
							},
							className: "h-full",
							style: { background: "var(--gradient-pink)" }
						})
					}), /* @__PURE__ */ jsx("span", {
						className: "font-mono text-xs text-muted-foreground",
						children: "∞:∞"
					})]
				})]
			}),
			playing && /* @__PURE__ */ jsx("div", {
				className: "flex items-end gap-[3px]",
				children: [
					1,
					2,
					3,
					4
				].map((b) => /* @__PURE__ */ jsx(motion.div, {
					animate: { height: [
						"8px",
						"20px",
						"8px"
					] },
					transition: {
						repeat: Infinity,
						duration: .6 + b * .1
					},
					className: "w-1 rounded-full bg-pink-glow"
				}, b))
			})
		]
	});
}
function Balloons() {
	const [balloons, setBalloons] = useState([]);
	useEffect(() => {
		setBalloons(Array.from({ length: 12 }, (_, i) => ({
			id: i,
			left: Math.random() * 100,
			duration: 14 + Math.random() * 12,
			delay: Math.random() * -10,
			size: 30 + Math.random() * 40,
			color: [
				"var(--pink-bright)",
				"var(--pink-glow)",
				"var(--magenta)",
				"var(--pink-deep)"
			][i % 4]
		})));
	}, []);
	if (balloons.length === 0) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: balloons.map((b) => /* @__PURE__ */ jsxs(motion.div, {
			initial: {
				y: "110vh",
				x: 0
			},
			animate: {
				y: "-20vh",
				x: [
					0,
					20,
					-20,
					0
				]
			},
			transition: {
				y: {
					duration: b.duration,
					repeat: Infinity,
					delay: b.delay,
					ease: "linear"
				},
				x: {
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut"
				}
			},
			className: "absolute",
			style: { left: `${b.left}%` },
			children: [/* @__PURE__ */ jsx("div", {
				className: "rounded-full",
				style: {
					width: b.size,
					height: b.size * 1.2,
					background: `radial-gradient(circle at 30% 30%, ${b.color}, color-mix(in oklab, ${b.color} 40%, black))`,
					boxShadow: `0 0 30px ${b.color}`
				}
			}), /* @__PURE__ */ jsx("div", { className: "mx-auto h-16 w-px bg-pink-bright/40" })]
		}, b.id))
	});
}
function QuizCard() {
	const questions = [
		{
			q: "your unhinged talent is…",
			a: "Can start talking about one thing and end up in a completely different universe"
		},
		{
			q: "your love language is…",
			a: "sending memes at 2am"
		},
		{
			q: "lastly, few things that i loves the most in you",
			a: "Your personality, your humour, your kindness, your voice, your smile, your music taste, your patience, your honesty, your empathy, your maturity, your silliness, your intelligence, your curiosity, your positivity, your loyalty, your late night thoughts, your random rants, your confidence, your determination, your resilience, your generosity, your warmth, your ability to listen, your caring nature, your laughter, your energy, your creativity, your imagination, your weirdness, your authenticity, your compassion, your softness, your strength, your independence, your passion, your excitement over little things, your ability to make people comfortable, your good heart, your playlists, your song recommendations, your opinions, your perspective on life, your supportiveness, your optimism, your thoughtfulness, your honesty even when it's difficult, your ability to cheer people up, the way you care, the way you speak, the way you tell stories, the way you remember little details, the way you stay strong, the way you trust, the way you help others, the way you love your friends, the way you stay true to yourself, the way you handle difficult days, your random facts, your excitement when talking about things you love, your sleepy conversations, your yapping sessions, your unpredictability, your emotional depth, your uniqueness, your beautiful heart, your gentle soul, your sincerity, your presence, your effort, your consistency, your comforting words, your understanding nature, your ability to forgive, your dreams, your ambitions, your courage, your selflessness, your random messages, your enthusiasm, your ability to brighten a day, your open-mindedness, your inner child, your appreciation for music, your emotional strength, your ability to make strangers feel like friends, your beautiful mind, your beautiful soul, your existence, the memories we've made, the conversations we've had, the trust we've built, the happiness you bring, the person you are, the person you're becoming, and simply, you."
		}
	];
	const [open, setOpen] = useState(null);
	return /* @__PURE__ */ jsx("div", {
		className: "mx-auto flex w-full max-w-2xl flex-col gap-4",
		children: questions.map((q, i) => /* @__PURE__ */ jsxs(motion.button, {
			onClick: () => setOpen(open === i ? null : i),
			layout: true,
			className: "rounded-2xl border border-pink-bright/30 bg-card/60 p-6 text-left backdrop-blur-md transition hover:border-pink-glow",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ jsx("span", {
					className: "font-display text-2xl text-foreground",
					children: q.q
				}), /* @__PURE__ */ jsx("span", {
					className: "text-pink-glow",
					children: open === i ? "−" : "+"
				})]
			}), open === i && /* @__PURE__ */ jsx(motion.p, {
				initial: {
					opacity: 0,
					height: 0
				},
				animate: {
					opacity: 1,
					height: "auto"
				},
				className: "mt-4 italic text-pink-glow",
				children: q.a
			})]
		}, i))
	});
}
//#endregion
//#region src/assets/hero-bg.jpg
var hero_bg_default = "/assets/hero-bg-DpKvu65M.jpg";
//#endregion
//#region src/images/img1.png
var img1_default = "/assets/img1-LLYd74Sj.png";
//#endregion
//#region src/images/img2.png
var img2_default = "/assets/img2-Dzdd3qWk.png";
//#endregion
//#region src/images/img3.png
var img3_default = "/assets/img3-Bg6WpQBZ.png";
//#endregion
//#region src/images/img4.png
var img4_default = "/assets/img4-4XHHKFoO.png";
//#endregion
//#region src/images/img5.png
var img5_default = "/assets/img5--032_sxK.png";
//#endregion
//#region src/images/img6.png
var img6_default = "/assets/img6-BeoKfZWx.png";
//#endregion
//#region src/images/img7.png
var img7_default = "/assets/img7-DKm6X1mu.png";
//#endregion
//#region src/images/img8.png
var img8_default = "/assets/img8-BAmBaJju.png";
//#endregion
//#region src/images/img9.png
var img9_default = "/assets/img9-BfBSHFji.png";
//#endregion
//#region src/images/img10.png
var img10_default = "/assets/img10-5CSKhOB1.png";
//#endregion
//#region src/images/img11.png
var img11_default = "/assets/img11-Chov4wP8.png";
//#endregion
//#region src/images/img12.png
var img12_default = "/assets/img12-KSnpdDe_.png";
//#endregion
//#region src/images/img13.png
var img13_default = "/assets/img13-CH-4HLR5.png";
//#endregion
//#region src/images/img14.png
var img14_default = "/assets/img14-Bz-5E1yX.png";
//#endregion
//#region src/images/img15.png
var img15_default = "/assets/img15-CqZnUSmc.png";
//#endregion
//#region src/images/img16.png
var img16_default = "/assets/img16-BzvX5grb.png";
//#endregion
//#region src/images/img17.png
var img17_default = "/assets/img17-CrH3v31f.png";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var memories = [
	{
		year: "HOW WE WE MET",
		text: "It all started with a random group chat, a random person, and a random join request.\xA0\n\nBack then, it all felt like nothing. Now? it feels like one of life's best incidents"
	},
	{
		year: "HOW WE GOT CLOSE",
		text: "I never thought I'd trust a stranger this easily, until I met you <3 You're naturally so kind that i can talk about literally\xA0anything and everything with you."
	},
	{
		year: "YOUR PERSONALITY\xA0 \xA0\xA0",
		text: "The way you still care for others, even while carrying so much of your own pain. The way you stay strong through it all. You're the strongest and humorous\xA0\n4'11 women ik , hehe okok 5'1!"
	},
	{
		year: "ABOUT YOU?",
		text: "Not one of the best,\nSHE IS DA BEST"
	}
];
var frameImages = [
	img1_default,
	img2_default,
	img3_default,
	img4_default,
	img5_default,
	img6_default,
	img7_default,
	img8_default,
	img9_default,
	img10_default,
	img11_default,
	img12_default,
	img13_default,
	img14_default,
	img15_default
];
var galleryImages = [
	{
		image: img16_default,
		label: "In tradional >>"
	},
	{
		image: img17_default,
		label: "Your smile >>"
	},
	{
		image: frameImages[2],
		label: "Your cuteness >>"
	},
	{
		image: frameImages[3],
		label: "Your innocence >>"
	},
	{
		image: frameImages[4],
		label: "Your charm >>"
	},
	{
		image: frameImages[5],
		label: "Your beauty >>"
	}
];
var wishes = [
	{
		icon: Star,
		title: "Stay soft",
		text: "the world will try to harden you. i hope you never lose the kindness that makes you, you."
	},
	{
		icon: Heart,
		title: "Trust yourself",
		text: "You deserve every good thing that comes your way, and more."
	},
	{
		icon: Sparkles,
		title: "Know your worth",
		text: "you've survived every difficult day so far. please never underestimate your strength."
	},
	{
		icon: Cake,
		title: "Keep yapping",
		text: "Some of my favorite conversations started with absolutely nothing and somehow lasted for hours."
	},
	{
		icon: Music,
		title: "Your voice",
		text: "OMG what should i say about your voice, it's just so cute>>> i can listen to it for hrs!"
	},
	{
		icon: Gift,
		title: "The best gift",
		text: "Thank you for being part of my life. That's been a gift to me too."
	}
];
var BIRTH_DATE = new Date(2008, 5, 24, 0, 0, 0);
function getAgeParts(now) {
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
	const totalSeconds = Math.max(0, Math.floor(totalMilliseconds / 1e3));
	const totalMinutes = Math.floor(totalSeconds / 60);
	const totalHours = Math.floor(totalMinutes / 60);
	const totalDays = Math.floor(totalHours / 24);
	return {
		years,
		months,
		days,
		hours,
		minutes,
		seconds,
		totalDays,
		totalHours,
		totalMinutes,
		totalSeconds
	};
}
function Index() {
	const { backgroundAudioRef } = useAudioContext();
	const heroRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);
	const heroOpacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
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
		totalSeconds: 0
	}));
	useEffect(() => {
		const tick = () => setAgeParts(getAgeParts(/* @__PURE__ */ new Date()));
		tick();
		const interval = window.setInterval(tick, 1e3);
		return () => window.clearInterval(interval);
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsx(BirthdayRain, {}),
			/* @__PURE__ */ jsx(CursorTrail, {}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ jsxs("section", {
						ref: heroRef,
						className: "relative flex min-h-screen items-center justify-center overflow-hidden px-6",
						children: [/* @__PURE__ */ jsxs(motion.div, {
							style: {
								scale: heroScale,
								opacity: heroOpacity
							},
							className: "absolute inset-0 -z-10",
							children: [/* @__PURE__ */ jsx("img", {
								src: hero_bg_default,
								alt: "",
								className: "h-full w-full object-cover opacity-40"
							}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" })]
						}), /* @__PURE__ */ jsxs(motion.div, {
							style: {
								y: heroY,
								opacity: heroOpacity
							},
							className: "text-center",
							children: [
								/* @__PURE__ */ jsx(motion.p, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: { duration: 1 },
									className: "mb-6 font-mono text-sm uppercase tracking-[0.4em] text-pink-glow",
									children: "✦ KEEP SCROLLING · TO EXPLORE YOURSELF ✦"
								}),
								/* @__PURE__ */ jsxs(motion.h1, {
									initial: {
										opacity: 0,
										scale: .8
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									transition: {
										duration: 1.2,
										ease: "easeOut"
									},
									className: "font-display text-6xl font-bold leading-none md:text-9xl lg:text-[12rem]",
									children: [/* @__PURE__ */ jsx("span", {
										className: "block animate-shimmer",
										children: "Happy"
									}), /* @__PURE__ */ jsx("span", {
										className: "block animate-pulse-glow text-gradient-pink",
										children: "Birthday"
									})]
								}),
								/* @__PURE__ */ jsxs(motion.p, {
									initial: { opacity: 0 },
									animate: { opacity: 1 },
									transition: {
										delay: .8,
										duration: 1
									},
									className: "mx-auto mt-8 max-w-xl font-display text-2xl italic text-pink-glow md:text-3xl",
									children: [
										"To the person I've never met irl, yet means so much",
										"\n",
										"to me <3"
									]
								}),
								/* @__PURE__ */ jsxs(motion.div, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										delay: 1.4,
										duration: .8
									},
									className: "mt-12 flex flex-wrap items-center justify-center gap-4",
									children: [
										/* @__PURE__ */ jsx("button", {
											type: "button",
											className: "btn-outline-pink cursor-pointer rounded-full px-8 py-4 text-base font-semibold uppercase tracking-widest",
											children: "HAPPY"
										}),
										/* @__PURE__ */ jsx("button", {
											type: "button",
											className: "btn-outline-pink cursor-pointer rounded-full px-8 py-4 text-base font-semibold uppercase tracking-widest",
											children: "BIRTHDAY"
										}),
										/* @__PURE__ */ jsx("button", {
											type: "button",
											className: "btn-outline-pink cursor-pointer rounded-full px-8 py-4 text-base font-semibold uppercase tracking-widest",
											children: "AAROHI"
										})
									]
								}),
								/* @__PURE__ */ jsx(motion.div, {
									initial: { opacity: 0 },
									animate: { opacity: 1 },
									transition: {
										delay: 2,
										duration: 1
									},
									className: "mt-20 flex justify-center",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex flex-col items-center gap-2 text-pink-glow/60",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-xs uppercase tracking-widest",
											children: "LETS SCROLL ABOUT YOURSELF"
										}), /* @__PURE__ */ jsx(motion.div, {
											animate: { y: [
												0,
												10,
												0
											] },
											transition: {
												repeat: Infinity,
												duration: 2
											},
											className: "h-12 w-px bg-gradient-to-b from-pink-glow to-transparent"
										})]
									})
								})
							]
						})]
					}),
					/* @__PURE__ */ jsx("section", {
						id: "wish",
						className: "relative px-6 py-32",
						children: /* @__PURE__ */ jsx("div", {
							className: "mx-auto max-w-3xl text-center",
							children: /* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									y: 40
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								transition: { duration: 1 },
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "mb-4 font-mono text-sm uppercase tracking-[0.4em] text-pink-bright",
										children: "chapter one"
									}),
									/* @__PURE__ */ jsx("h2", {
										className: "font-display text-5xl italic text-gradient-pink md:text-7xl",
										children: "A little letter"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mx-auto mt-12 space-y-6 font-display text-2xl leading-relaxed text-foreground/90 md:text-3xl",
										children: [
											/* @__PURE__ */ jsx("p", { children: "i couldn't fit you into a card." }),
											/* @__PURE__ */ jsxs("p", { children: [
												"so i built you a ",
												/* @__PURE__ */ jsx("span", {
													className: "text-gradient-pink font-bold",
													children: "whole tiny universe"
												}),
												" instead."
											] }),
											/* @__PURE__ */ jsx("p", {
												className: "text-xl text-muted-foreground italic",
												children: "(scroll. there's more. there's so much more.)"
											})
										]
									})
								]
							})
						})
					}),
					/* @__PURE__ */ jsxs("section", {
						className: "relative py-12",
						children: [/* @__PURE__ */ jsx(motion.p, {
							initial: { opacity: 0 },
							whileInView: { opacity: 1 },
							viewport: { once: true },
							className: "mb-4 text-center font-mono text-xs uppercase tracking-[0.4em] text-pink-bright",
							children: "✦ ~ A non-exhaustive list of things i love about you ~ ✦"
						}), /* @__PURE__ */ jsx(ReasonsMarquee, {})]
					}),
					/* @__PURE__ */ jsx("section", {
						className: "relative px-6 py-20",
						children: /* @__PURE__ */ jsxs("div", {
							className: "mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2",
							children: [/* @__PURE__ */ jsx(PhotoFrame, {
								label: "Look who's this!?",
								caption: "Itni cuteness kahan se laaye the?",
								align: "left",
								ratio: "portrait",
								imageSrc: img1_default
							}), /* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									x: 60
								},
								whileInView: {
									opacity: 1,
									x: 0
								},
								viewport: { once: true },
								transition: { duration: 1 },
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "font-mono text-sm uppercase tracking-widest text-pink-bright",
										children: "exhibit a"
									}),
									/* @__PURE__ */ jsxs("h3", {
										className: "mt-4 font-display text-5xl text-foreground",
										children: [
											"proof that ",
											/* @__PURE__ */ jsx("span", {
												className: "text-gradient-pink",
												children: "angels"
											}),
											" do exist!"
										]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-6 text-lg text-muted-foreground",
										children: "Do you know that angels do exist? Don't belive me? Okay then just look at this cute little baby right here, who knew she'd end up becoming one of the most amazing people i know? Her innocent face, those cute round sparkling eyes, those adorable chubby cheeks... oh my gosh!! She's just divine. The kind of person who makes you smile without your permission. The kind of person whose charm alone can make anybody feel better. She's just truly one of the prettiest souls I've ever had the privilege of knowing."
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ jsx("section", {
						id: "memories",
						className: "relative px-6 py-32",
						children: /* @__PURE__ */ jsxs("div", {
							className: "mx-auto max-w-5xl",
							children: [/* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									y: 40
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								className: "mb-20 text-center",
								children: [/* @__PURE__ */ jsx("p", {
									className: "font-mono text-sm uppercase tracking-[0.4em] text-pink-bright",
									children: "chapter two"
								}), /* @__PURE__ */ jsx("h2", {
									className: "mt-4 font-display text-5xl italic text-gradient-pink md:text-7xl",
									children: "the road of our journey"
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "relative",
								children: [/* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-pink-bright to-transparent" }), memories.map((m, i) => /* @__PURE__ */ jsxs(motion.div, {
									initial: {
										opacity: 0,
										x: i % 2 === 0 ? -60 : 60
									},
									whileInView: {
										opacity: 1,
										x: 0
									},
									viewport: {
										once: true,
										margin: "-80px"
									},
									transition: { duration: .8 },
									className: `relative mb-20 flex w-full ${i % 2 === 0 ? "justify-start" : "justify-end"}`,
									children: [/* @__PURE__ */ jsx("div", {
										className: `w-full md:w-5/12 ${i % 2 === 0 ? "md:pr-12 text-right" : "md:pl-12 text-left"}`,
										children: /* @__PURE__ */ jsxs("div", {
											className: "rounded-2xl border border-pink-bright/30 bg-card/60 p-8 backdrop-blur-md",
											style: { boxShadow: "var(--shadow-glow)" },
											children: [/* @__PURE__ */ jsx("p", {
												className: "font-mono text-xs uppercase tracking-widest text-pink-glow",
												children: m.year
											}), /* @__PURE__ */ jsx("p", {
												className: "mt-3 font-display text-2xl italic text-foreground",
												children: m.text
											})]
										})
									}), /* @__PURE__ */ jsx("div", {
										className: "absolute left-1/2 top-8 h-4 w-4 -translate-x-1/2 rounded-full bg-pink-bright",
										style: { boxShadow: "var(--shadow-glow)" }
									})]
								}, i))]
							})]
						})
					}),
					/* @__PURE__ */ jsxs("section", {
						className: "relative px-6 py-32",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "mx-auto max-w-3xl text-center",
							children: [/* @__PURE__ */ jsx("p", {
								className: "mb-4 font-mono text-sm uppercase tracking-[0.4em] text-pink-bright",
								children: "A SEALED VIRTUAL ENVELOPE"
							}), /* @__PURE__ */ jsx("h2", {
								className: "mb-12 font-display text-5xl italic text-gradient-pink md:text-7xl",
								children: "For The Birthday Girl"
							})]
						}), /* @__PURE__ */ jsx(TypewriterLetter, {})]
					}),
					/* @__PURE__ */ jsx("section", {
						className: "relative px-6 py-20",
						children: /* @__PURE__ */ jsxs("div", {
							className: "mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2",
							children: [/* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									x: -60
								},
								whileInView: {
									opacity: 1,
									x: 0
								},
								viewport: { once: true },
								transition: { duration: 1 },
								className: "md:order-2",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "font-mono text-sm uppercase tracking-widest text-pink-bright",
										children: "exhibit b"
									}),
									/* @__PURE__ */ jsxs("h3", {
										className: "mt-4 font-display text-5xl text-foreground",
										children: ["and now, the angel got ", /* @__PURE__ */ jsx("span", {
											className: "ml-1 mr-1 inline-flex items-end bg-gradient-to-r from-pink-glow via-pink-bright to-magenta bg-clip-text text-transparent [font-family:'Georgia',serif] [font-style:italic] [letter-spacing:0.08em] [transform:skewX(-6deg)] [font-size:0.95em] [padding-left:0.08em] [padding-right:0.18em] [line-height:0.95]",
											children: "wings"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-6 flex flex-col items-start space-y-1 text-left text-lg leading-8 text-muted-foreground/80",
										children: [
											/* @__PURE__ */ jsx("div", { children: "Her name: aarohi" }),
											/* @__PURE__ */ jsx("div", { children: "Her age: 18" }),
											/* @__PURE__ */ jsx("div", { children: "Her height: 4'9 (okok 5'1)" }),
											/* @__PURE__ */ jsx("div", { children: "Her weight: paper" }),
											/* @__PURE__ */ jsx("div", { children: "Her cuteness: infinite" }),
											/* @__PURE__ */ jsx("div", { children: "Her soulmate: momo" }),
											/* @__PURE__ */ jsxs("div", {
												className: "mt-4 rounded-xl border border-pink-bright/20 bg-white/5 px-4 py-3 text-left backdrop-blur-sm",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "flex flex-wrap gap-x-4 gap-y-1",
													children: [
														/* @__PURE__ */ jsxs("span", { children: ["Years: ", ageParts.years] }),
														/* @__PURE__ */ jsxs("span", { children: ["Months: ", ageParts.months] }),
														/* @__PURE__ */ jsxs("span", { children: ["Days: ", ageParts.days] }),
														/* @__PURE__ */ jsxs("span", { children: ["Hours: ", String(ageParts.hours).padStart(2, "0")] }),
														/* @__PURE__ */ jsxs("span", { children: ["Minutes: ", String(ageParts.minutes).padStart(2, "0")] }),
														/* @__PURE__ */ jsxs("span", { children: ["Seconds: ", String(ageParts.seconds).padStart(2, "0")] })
													]
												}), /* @__PURE__ */ jsxs("div", {
													className: "mt-2 border-t border-pink-bright/10 pt-2",
													children: [/* @__PURE__ */ jsxs("div", {
														className: "flex flex-wrap gap-x-4 gap-y-1",
														children: [
															/* @__PURE__ */ jsxs("span", { children: ["Total days lived: ", ageParts.totalDays.toLocaleString()] }),
															/* @__PURE__ */ jsxs("span", { children: ["Total hours lived: ", ageParts.totalHours.toLocaleString()] }),
															/* @__PURE__ */ jsxs("span", { children: ["Total minutes lived: ", ageParts.totalMinutes.toLocaleString()] }),
															/* @__PURE__ */ jsxs("span", { children: ["Total seconds lived: ", ageParts.totalSeconds.toLocaleString()] }),
															/* @__PURE__ */ jsxs("span", { children: [
																"Life left to live (assuming 1000 years): ",
																(1e3 * 365 * 24 * 60 * 60 - ageParts.totalSeconds).toLocaleString(),
																" seconds"
															] })
														]
													}), /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-muted-foreground/70" })]
												})]
											})
										]
									})
								]
							}), /* @__PURE__ */ jsx("div", {
								className: "md:order-1 flex justify-center",
								children: /* @__PURE__ */ jsx(PhotoFrame, {
									label: "caught laughing",
									caption: "this is the energy.",
									align: "right",
									ratio: "square",
									imageSrc: img2_default,
									overlayText: "Say hellooww to yourself <3"
								})
							})]
						})
					}),
					/* @__PURE__ */ jsx("section", {
						id: "wishes",
						className: "relative px-6 py-32",
						children: /* @__PURE__ */ jsxs("div", {
							className: "mx-auto max-w-6xl",
							children: [/* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									y: 40
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								className: "mb-16 text-center",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "font-mono text-sm uppercase tracking-[0.4em] text-pink-bright",
										children: "chapter three"
									}),
									/* @__PURE__ */ jsx("h2", {
										className: "mt-4 font-display text-5xl italic text-gradient-pink md:text-7xl",
										children: "six wishes for the rest of the year"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-4 text-lg text-muted-foreground",
										children: "May each month, they grows more"
									})
								]
							}), /* @__PURE__ */ jsx("div", {
								className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
								children: wishes.map((w, i) => /* @__PURE__ */ jsxs(motion.div, {
									initial: {
										opacity: 0,
										y: 40
									},
									whileInView: {
										opacity: 1,
										y: 0
									},
									viewport: {
										once: true,
										margin: "-50px"
									},
									transition: {
										duration: .6,
										delay: i * .08
									},
									whileHover: {
										y: -8,
										scale: 1.02
									},
									className: "group relative overflow-hidden rounded-2xl border border-pink-bright/30 bg-card/50 p-8 backdrop-blur-md transition-all hover:border-pink-glow",
									style: { boxShadow: "0 10px 40px -10px var(--pink-deep)" },
									children: [
										/* @__PURE__ */ jsx("div", { className: "absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pink-bright/20 blur-3xl transition-all group-hover:bg-pink-bright/40" }),
										/* @__PURE__ */ jsx(w.icon, { className: "relative h-10 w-10 text-pink-glow" }),
										/* @__PURE__ */ jsx("h3", {
											className: "relative mt-6 font-display text-3xl text-foreground",
											children: w.title
										}),
										/* @__PURE__ */ jsx("p", {
											className: "relative mt-3 text-muted-foreground",
											children: w.text
										})
									]
								}, i))
							})]
						})
					}),
					/* @__PURE__ */ jsxs("section", {
						className: "relative overflow-hidden px-6 py-32",
						children: [/* @__PURE__ */ jsx(Balloons, {}), /* @__PURE__ */ jsxs("div", {
							className: "relative mx-auto max-w-3xl text-center",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "font-mono text-sm uppercase tracking-[0.4em] text-pink-bright",
									children: "Chapter Four"
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "mt-4 font-display text-5xl italic text-gradient-pink md:text-7xl",
									children: "Make a wish for yourself"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-lg text-muted-foreground",
									children: "And blow your birthday cake!"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-16",
									children: /* @__PURE__ */ jsx(InteractiveCake, {})
								})
							]
						})]
					}),
					/* @__PURE__ */ jsx("section", {
						className: "relative px-6 py-20",
						children: /* @__PURE__ */ jsxs("div", {
							className: "mx-auto max-w-7xl",
							children: [/* @__PURE__ */ jsx(motion.h3, {
								initial: { opacity: 0 },
								whileInView: { opacity: 1 },
								viewport: { once: true },
								className: "mb-12 text-center font-display text-4xl italic text-gradient-pink md:text-6xl",
								children: "Your gallery"
							}), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
								children: galleryImages.map((item, index) => /* @__PURE__ */ jsx(PhotoFrame, {
									label: item.label,
									ratio: index % 3 === 0 ? "portrait" : index % 3 === 1 ? "square" : "landscape",
									align: index % 2 === 0 ? "left" : "right",
									imageSrc: item.image
								}, `${item.label}-${index}`))
							})]
						})
					}),
					/* @__PURE__ */ jsx("section", {
						className: "relative px-6 py-32",
						children: /* @__PURE__ */ jsxs("div", {
							className: "mx-auto grid max-w-6xl items-center gap-20 md:grid-cols-2",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("p", {
									className: "font-mono text-sm uppercase tracking-widest text-pink-bright",
									children: "go on, mess with them"
								}),
								/* @__PURE__ */ jsxs("h3", {
									className: "mt-4 font-display text-5xl text-foreground",
									children: [
										"a little ",
										/* @__PURE__ */ jsx("span", {
											className: "text-gradient-pink italic",
											children: "drawer"
										}),
										" of memories."
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-6 text-lg text-muted-foreground",
									children: "drag the polaroids around. shuffle them. stack them. they're yours now."
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-10",
									children: /* @__PURE__ */ jsx(NowPlaying, { backgroundAudioRef })
								})
							] }), /* @__PURE__ */ jsx(PolaroidStack, {})]
						})
					}),
					/* @__PURE__ */ jsx("section", {
						className: "relative px-6 py-40 text-center",
						children: /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								scale: .9
							},
							whileInView: {
								opacity: 1,
								scale: 1
							},
							viewport: { once: true },
							transition: { duration: 1.2 },
							className: "mx-auto max-w-5xl",
							children: [/* @__PURE__ */ jsx("p", {
								className: "font-mono text-sm uppercase tracking-[0.4em] text-pink-bright",
								children: "the truth is"
							}), /* @__PURE__ */ jsxs("p", {
								className: "mt-8 font-display text-5xl leading-tight text-foreground md:text-8xl",
								children: [
									"the life have got ",
									/* @__PURE__ */ jsx("span", {
										className: "animate-shimmer",
										children: "infinitely better"
									}),
									" since the day ",
									/* @__PURE__ */ jsx("span", {
										className: "italic text-gradient-pink",
										children: "you"
									}),
									" showed up in it."
								]
							})]
						})
					}),
					/* @__PURE__ */ jsxs("section", {
						className: "relative px-6 py-32",
						children: [/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 40
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							className: "mb-12 text-center",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "font-mono text-sm uppercase tracking-[0.4em] text-pink-bright",
									children: "interlude"
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "mt-4 font-display text-5xl italic text-gradient-pink md:text-7xl",
									children: "tap to see"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-muted-foreground",
									children: "the things that make you the best!!!!"
								})
							]
						}), /* @__PURE__ */ jsx(QuizCard, {})]
					}),
					/* @__PURE__ */ jsx("section", {
						className: "relative px-6 py-32",
						children: /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 40
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							className: "mx-auto max-w-2xl rounded-3xl border border-pink-bright/40 bg-gradient-to-br from-pink-deep/30 via-card/60 to-magenta/30 p-12 text-center backdrop-blur-xl md:p-16",
							style: { boxShadow: "var(--shadow-glow-lg)" },
							children: [
								/* @__PURE__ */ jsx(Cake, { className: "mx-auto h-16 w-16 animate-float-soft text-pink-glow" }),
								/* @__PURE__ */ jsx("h2", {
									className: "mt-6 font-display text-5xl text-gradient-pink md:text-7xl",
									children: "promises to you"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-6 text-lg text-muted-foreground",
									children: "Being a virtual friend, I can't really give you gifts in real life"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm italic text-pink-glow",
									children: "but I'll give you everything I can virtually and my promises are one of them."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-10 flex flex-wrap justify-center gap-4",
									children: [
										/* @__PURE__ */ jsx("button", {
											className: "btn-glow rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-widest",
											children: "ALWAYS BELIEVING IN YOU"
										}),
										/* @__PURE__ */ jsx("button", {
											className: "btn-glow rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-widest",
											children: "NOT GONNA LEAVE"
										}),
										/* @__PURE__ */ jsx("button", {
											className: "btn-glow rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-widest",
											children: "DISTANCE WILL NEVER CHANGE MY CARE"
										})
									]
								})
							]
						})
					}),
					/* @__PURE__ */ jsxs("footer", {
						className: "relative border-t border-pink-bright/20 px-6 py-12 text-center",
						children: [/* @__PURE__ */ jsx("p", {
							className: "font-display text-2xl italic text-pink-glow",
							children: "So lastly, a happy birthday dear, again. and again. and again."
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-3 font-mono text-xs uppercase tracking-widest text-muted-foreground",
							children: "ENJOY YOUR DAY MA'AM · ♥"
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { Index as component };

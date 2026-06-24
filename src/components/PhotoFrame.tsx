import { motion } from "motion/react";
import { ImagePlus } from "lucide-react";

interface PhotoFrameProps {
  label: string;
  caption?: string;
  align?: "left" | "right";
  ratio?: "portrait" | "square" | "landscape";
  imageSrc?: string;
  imageAlt?: string;
  overlayText?: string;
}

const ratioMap = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
};

export function PhotoFrame({ label, caption, align = "left", ratio = "portrait", imageSrc, imageAlt, overlayText }: PhotoFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: align === "left" ? -3 : 3 }}
      whileInView={{ opacity: 1, y: 0, rotate: align === "left" ? -2 : 2 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ rotate: 0, scale: 1.03 }}
      className={`relative ${ratioMap[ratio]} w-full max-w-md rounded-2xl border border-pink-bright/40 bg-gradient-to-br from-pink-deep/20 to-magenta/20 p-2 backdrop-blur-sm`}
      style={{ boxShadow: "var(--shadow-glow)" }}
    >
      <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-pink-glow/30 bg-background/60">
        {imageSrc ? (
          <>
            <div className="relative h-full w-full">
              <img src={imageSrc} alt={imageAlt ?? label} className="h-full w-full object-cover" />
              {overlayText && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent px-4 py-5 text-center">
                  <p className="font-display text-xl italic text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">{overlayText}</p>
                </div>
              )}
            </div>
            <div className="bg-background/85 p-4 text-center">
              <p className="font-display text-xl text-pink-glow">{label}</p>
              {caption && <p className="mt-1 text-sm text-muted-foreground">{caption}</p>}
            </div>
          </>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
            <ImagePlus className="mb-3 h-10 w-10 text-pink-glow" />
            <p className="font-display text-2xl text-pink-glow">{label}</p>
            {caption && <p className="mt-2 text-sm text-muted-foreground">{caption}</p>}
            <p className="mt-4 text-xs uppercase tracking-widest text-pink-bright/70">drop her photo here</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

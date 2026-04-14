import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "Node.js", label: "Backend" },
  { value: "JWT + RBAC", label: "Security" },
  { value: "MongoDB", label: "Database" },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const [showHeroImage, setShowHeroImage] = useState(true);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const illustrationY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const illustrationScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const overlayY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full overflow-hidden bg-black" id="home">

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.05),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(198,255,0,0.06),transparent_34%)]" />

      {/* Background Text Layer */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="absolute inset-0 z-0 pointer-events-none select-none leading-none flex items-center justify-center translate-y-6 lg:translate-y-0"
      >
        <div className="text-center leading-[0.8]">
          <motion.h1
            className="text-[18vw] lg:text-[11.5vw] font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white/85 to-white/5 tracking-tight"
            style={{ lineHeight: 0.8 }}
          >
            D
            <br />
            SHAMSHEER
          </motion.h1>
        </div>
      </motion.div>

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 pb-8 pt-28 lg:pt-8">
        <div className="grid flex-1 grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_minmax(320px,540px)_1fr] lg:items-center">
          <motion.div
            style={{ y: overlayY, opacity: overlayOpacity }}
            className="pointer-events-none max-w-sm self-start text-left"
          >
            <div className="text-[#c6ff00] text-xs font-semibold uppercase tracking-[0.3em] mb-2">
             Backend Developer | Node.js • MongoDB • REST APIs
            </div>
            <div className="text-white/70 text-sm font-light tracking-wide">
              India | Open to Remote Opportunities
            </div>
          </motion.div>

          <motion.div
            style={{ y: illustrationY, scale: illustrationScale }}
            className="relative mx-auto flex w-full max-w-[620px] justify-center self-end pointer-events-none lg:self-center"
          >
            <motion.div
              className="relative h-[78vh] min-h-[680px] w-full max-w-[680px] -translate-y-6 lg:-translate-y-10"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="absolute inset-x-4 bottom-0 h-[26vh] rounded-full bg-black/85 blur-3xl" />

              {showHeroImage ? (
                <img
                  src="/spidey.png"
                  alt="Spider-Man illustration"
                  className="absolute bottom-0 left-1/2 h-[82vh] w-auto max-h-[82vh] -translate-x-1/2 object-contain drop-shadow-[0_36px_60px_rgba(0,0,0,0.7)]"
                  onError={() => setShowHeroImage(false)}
                />
              ) : (
                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="h-[72vh] w-[30vw] min-w-[260px] max-w-[400px] rounded-[48px] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
                </div>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: overlayY, opacity: overlayOpacity }}
            className="pointer-events-none flex flex-col items-start gap-6 self-end lg:self-center lg:items-end lg:text-right"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl lg:text-3xl font-bold text-white leading-none">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/70 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
            <a href="#resume" className="pointer-events-auto text-xs text-[#c6ff00] underline underline-offset-4 font-bold">
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          style={{ y: overlayY, opacity: overlayOpacity }}
          className="pointer-events-none flex max-w-sm justify-start pb-2 lg:pb-4"
        >
          <p className="text-white/60 text-xs leading-relaxed font-light max-w-xs">
            Backend developer specializing in REST APIs, authentication systems, and modular workflows.
          </p>
        </motion.div>
      </div>

    </section>
  );
}

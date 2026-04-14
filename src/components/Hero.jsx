import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "Node.js", label: "Backend" },
  { value: "JWT + RBAC", label: "Security" },
  { value: "MongoDB", label: "Database" },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const illustrationY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const illustrationScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const overlayY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);

  return (
    <section ref={sectionRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]" id="home">

      {/* Background Text Layer */}
      {/* Background Text Layer */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="absolute inset-0 flex flex-col items-center justify-start lg:justify-center z-0 pointer-events-none select-none leading-none pt-40 lg:pt-0"
      >
        <motion.h1
          className="text-[20vw] lg:text-[13.5vw] uppercase text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/10 text-center tracking-tight"
          style={{ lineHeight: 0.85 }}
        >
          D
        </motion.h1>
        <motion.h1
          className="text-[16vw] lg:text-[11.5vw] uppercase text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/10 text-center tracking-tight"
          style={{ lineHeight: 0.85 }}
        >
          SHAMSHEER
        </motion.h1>
      </motion.div>

      {/* Foreground Anime Placeholder Layer */}
      <motion.div
        style={{ y: illustrationY, scale: illustrationScale }}
        className="absolute bottom-0 z-10 flex justify-center items-end h-[95vh] w-full pointer-events-none"
      >
        <motion.div
          className="relative h-[72vh] w-[54vw] max-w-[560px] min-w-[280px]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute inset-x-0 bottom-0 h-[58vh] rounded-[48px] border border-[#c6ff00]/20 bg-[radial-gradient(circle_at_50%_15%,rgba(198,255,0,0.16),transparent_34%),linear-gradient(180deg,rgba(19,19,19,0.92),rgba(6,6,6,0.98))] shadow-[0_0_60px_rgba(198,255,0,0.14)]" />
          <div className="absolute bottom-[12vh] left-1/2 h-[40vh] w-[22vw] min-w-[170px] max-w-[260px] -translate-x-1/2 rounded-[120px] bg-gradient-to-b from-[#e7ffe0] via-[#c7ff79] to-[#1a1f12] shadow-[0_0_45px_rgba(198,255,0,0.22)]" />
          <div className="absolute bottom-[31vh] left-1/2 h-[18vh] w-[15vh] -translate-x-1/2 rounded-[50%] bg-[#f4d7be] shadow-[0_0_25px_rgba(0,0,0,0.18)]" />
          <div className="absolute bottom-[38vh] left-[50%] h-7 w-20 -translate-x-1/2 rounded-full bg-[#1a1a1a] shadow-[0_4px_0_rgba(0,0,0,0.18)]" />
          <div className="absolute bottom-[41vh] left-[50%] h-3 w-3 -translate-x-[120%] rounded-full bg-[#111111]" />
          <div className="absolute bottom-[41vh] left-[50%] h-3 w-3 translate-x-[20%] rounded-full bg-[#111111]" />
          <div className="absolute bottom-[45vh] left-[50%] h-12 w-[12vh] -translate-x-1/2 rounded-t-[110px] bg-[#161616]" />
          <div className="absolute bottom-[29vh] left-[50%] h-[20vh] w-[24vh] -translate-x-1/2 rounded-[80px] bg-gradient-to-b from-[#293040] via-[#11141d] to-[#0c0c0c] border border-white/10" />
          <div className="absolute bottom-[25vh] left-[50%] h-[6vh] w-[18vh] -translate-x-1/2 rounded-full border border-[#c6ff00]/25 bg-[#0f0f0f] shadow-[0_0_24px_rgba(198,255,0,0.12)]" />
          <div className="absolute bottom-[22vh] left-[50%] h-[13vh] w-5 -translate-x-[250%] rotate-[18deg] rounded-full bg-[#f4d7be]" />
          <div className="absolute bottom-[22vh] left-[50%] h-[13vh] w-5 translate-x-[170%] -rotate-[18deg] rounded-full bg-[#f4d7be]" />
          <div className="absolute bottom-[19vh] left-[50%] h-6 w-24 -translate-x-[160%] rotate-[14deg] rounded-full bg-[#d9ff6e]/30 blur-lg" />
          <div className="absolute bottom-[19vh] left-[50%] h-6 w-24 translate-x-[70%] -rotate-[14deg] rounded-full bg-[#d9ff6e]/30 blur-lg" />
          <div className="absolute bottom-[7vh] left-[12%] h-36 w-36 rounded-full bg-[#c6ff00]/10 blur-[80px]" />
          <div className="absolute bottom-[8vh] right-[10%] h-44 w-44 rounded-full bg-[#c6ff00]/10 blur-[90px]" />
          <motion.div
            className="absolute bottom-[13vh] left-[18%] h-12 w-24 rounded-2xl border border-[#c6ff00]/25 bg-[#111]/80 shadow-[0_0_24px_rgba(198,255,0,0.18)]"
            animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[16vh] right-[18%] h-12 w-24 rounded-2xl border border-[#c6ff00]/25 bg-[#111]/80 shadow-[0_0_24px_rgba(198,255,0,0.18)]"
            animate={{ y: [0, -10, 0], rotate: [4, -4, 4] }}
            transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[16vh] left-[12%] h-40 w-16 rounded-full bg-[#c6ff00]/20 blur-2xl"
            animate={{ x: [0, 10, 0], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[18vh] right-[12%] h-40 w-16 rounded-full bg-[#c6ff00]/20 blur-2xl"
            animate={{ x: [0, -10, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
      </motion.div>

      {/* Overlay Content (Interactive) */}
      <motion.div
        style={{ y: overlayY, opacity: overlayOpacity }}
        className="absolute inset-0 z-20 container mx-auto px-6 py-8 flex flex-col justify-between pointer-events-none"
      >
        {/* Top Row */}
        <div className="flex justify-between items-start pointer-events-auto mt-2">
          <div className="text-left max-w-[calc(100%-80px)]">
            <div className="text-[#c6ff00] text-xs font-bold uppercase tracking-[0.2em] mb-1">
              Backend Developer (Node.js)
            </div>
            <div className="text-white text-sm font-light tracking-wide opacity-80">
              Kurnool, Andhra Pradesh, India
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between items-end pointer-events-auto mb-4">
          {/* Bottom Left: Bio/Intro */}
          <div className="hidden lg:block max-w-xs text-left">
            <p className="text-white/60 text-xs leading-relaxed font-light">
              Building scalable REST APIs, authentication systems, and modular backend workflows.
              Add your photo later without changing the overall layout.
            </p>
          </div>

          {/* Bottom Right: Stats */}
          <div className="text-left lg:text-right flex flex-col gap-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] items-start lg:items-end">
            {stats.slice(0, 3).map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white leading-none">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/80 mt-1 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
            <a href="#resume" className="text-xs text-[#c6ff00] underline underline-offset-4 mt-2 font-bold drop-shadow-md">
              Go To Resume
            </a>
          </div>
        </div>
      </motion.div>

    </section>
  );
}

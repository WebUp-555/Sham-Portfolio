import { motion } from "framer-motion";

const stats = [
  { value: "150+", label: "Hackathons" },
  { value: "10X", label: "Wins" },
  { value: "IITM", label: "Education" },
];

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]" id="home">

      {/* Background Text Layer */}
      {/* Background Text Layer */}
      <div className="absolute inset-0 flex flex-col items-center justify-start lg:justify-center z-0 pointer-events-none select-none leading-none pt-40 lg:pt-0">
        <h1
          className="text-[20vw] lg:text-[13.5vw] uppercase text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/10 text-center tracking-tight"
          style={{ fontFamily: 'var(--font-anton)', lineHeight: 0.85 }}
        >
          MOHAMED
        </h1>
        <h1
          className="text-[16vw] lg:text-[11.5vw] uppercase text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/10 text-center tracking-tight"
          style={{ fontFamily: 'var(--font-anton)', lineHeight: 0.85 }}
        >
          ABUBAKKAR
        </h1>
      </div>

      {/* Foreground Image Layer */}
      <div className="absolute bottom-0 z-10 flex justify-center items-end h-[95vh] w-full pointer-events-none">
        <motion.img
          src="/abu.png"
          alt="Mohamed Abubakkar"
          className="h-full w-auto object-contain object-bottom drop-shadow-2xl transition-all duration-500"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        {/* Subtle gradient at bottom to blend legs/bottom of image */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
      </div>

      {/* Overlay Content (Interactive) */}
      <div className="absolute inset-0 z-20 container mx-auto px-6 py-8 flex flex-col justify-between pointer-events-none">
        {/* Top Row */}
        <div className="flex justify-between items-start pointer-events-auto mt-2">
          <div className="text-left max-w-[calc(100%-80px)]">
            <div className="text-[#c6ff00] text-xs font-bold uppercase tracking-[0.2em] mb-1">
              Upcoming Associate Engineer @ Presidio
            </div>
            <div className="text-white text-sm font-light tracking-wide opacity-80">
              Ramanathapuram
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between items-end pointer-events-auto mb-4">
          {/* Bottom Left: Bio/Intro */}
          <div className="hidden lg:block max-w-xs text-left">
            <p className="text-white/60 text-xs leading-relaxed font-light">
              AI Engineer specializing in LLMs, RAG pipelines, and end-to-end ML applications.
              IIT Madras Data Science student with 150+ hackathons and 6 national & international wins.
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
            <a href="/cv.html?download=true" className="text-xs text-[#c6ff00] underline underline-offset-4 mt-2 font-bold drop-shadow-md">
              Download CV
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}

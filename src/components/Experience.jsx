import { motion } from "framer-motion";

const experiences = [
  {
    role: "Intern — Presidio",
    detail:
      "Working as an intern at Presidio, contributing to real-world projects and gaining hands-on industry experience.",
    time: "Mar 2026 – Present",
    location: "Remote",
  },
  {
    role: "AI Engineer — ZUDU.AI",
    detail:
      "Tanglish LLM fine-tuning with Unsloth, Mistral, Gemma, Qwen on GCP.",
    time: "Sep 2025 – Oct 2025",
    location: "Onsite · Chennai",
  },
  {
    role: "ML Engineer — Cellstrat",
    detail:
      "RAG pipelines with VectorDB, OpenAI, and AWS. Prompt engineering and REST API integration.",
    time: "May 2024 – Aug 2024",
    location: "Remote",
  },
  {
    role: "150+ Hackathons — 10x Winner",
    detail:
      "Participated in 70+ hackathons; won INR 6,08,000 across two international and two national competitions.",
    time: "Jan 2023 – Present",
    location: "Global",
  },
];

export default function Experience() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#c6ff00]">
            Experience
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Proven Execution Timeline
          </h2>
        </motion.div>

        <div className="timeline mt-12">
          {experiences.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={item.role}
                className="timeline-item"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <div className={`timeline-col ${isLeft ? "text-right" : "hidden md:flex"}`}>
                  {isLeft && (
                    <>
                      <span className="timeline-pill">{item.time}</span>
                      <div className="glass timeline-card">
                        <h3 className="text-lg font-semibold">{item.role}</h3>
                        <p className="mt-2 text-sm text-white/70">{item.detail}</p>
                        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/40">
                          {item.location}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                <div className="timeline-dot" />

                <div className={`timeline-col ${!isLeft ? "text-left" : "hidden md:flex"}`}>
                  {!isLeft && (
                    <>
                      <span className="timeline-pill">{item.time}</span>
                      <div className="glass timeline-card">
                        <h3 className="text-lg font-semibold">{item.role}</h3>
                        <p className="mt-2 text-sm text-white/70">{item.detail}</p>
                        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/40">
                          {item.location}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

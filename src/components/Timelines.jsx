import { motion } from "framer-motion";

const experience = [
  {
    title: "Intern — Presidio",
    detail:
      "Working as an intern at Presidio, contributing to real-world projects and gaining hands-on industry experience.",
    highlights: [
      "Real-world project contributions",
      "Industry collaboration",
    ],
    time: "Mar 2026 – Present",
    location: "Remote",
  },
  {
    title: "AI Engineer — ZUDU.AI",
    detail:
      "Fine-tuned a Tanglish-focused Large Language Model using Unsloth, optimizing multilingual understanding and inference efficiency. Benchmarked and evaluated Mistral, Gemma, and Qwen models on GCP VMs to identify the best-performing architecture for real-world deployment.",
    highlights: [
      "Tanglish dataset curation & preprocessing",
      "LLM fine-tuning and evaluation pipelines",
      "Cloud-based training on Google Cloud Platform",
      "Comparative model performance analysis",
    ],
    time: "Sep 2025 – Oct 2025",
    location: "Onsite · Chennai",
  },
  {
    title: "ML Engineer — CellStrat",
    detail:
      "Built an AI-powered chatbot using RAG architecture with VectorDB, OpenAI, and AWS, significantly improving contextual response accuracy. Designed scalable REST APIs and applied advanced prompt engineering to enhance LLM output quality in production environments.",
    highlights: [
      "Retrieval-Augmented Generation (RAG) pipelines",
      "Vector database design & optimization",
      "Prompt engineering for LLM reliability",
      "RESTful API integration with cloud services",
    ],
    time: "May 2024 – Aug 2024",
    location: "Remote",
  },
  {
    title: "150+ Hackathons — 10× Winner",
    detail:
      "Actively participated in 150+ hackathons, securing 6 wins and earning ₹6,08,000+ through innovative, high-impact solutions. Achieved top positions in two international and two national-level competitions, collaborating across diverse, fast-paced teams.",
    highlights: [
      "Rapid prototyping under time constraints",
      "Cross-functional teamwork & leadership",
      "Real-world problem-solving using AI & ML",
      "Consistent top-tier performance at scale",
    ],
    time: "Jan 2023 – Present",
    location: "Global",
  },
];

const education = [
  {
    title: "Indian Institute Of Technology",
    detail: "Bachelor of Science, Data Science",
    time: "Jan 2022 – Jan 2026",
    location: "Madras, India",
  },
  {
    title: "Sri Eshwar College Of Engineering",
    detail: "B.Tech, AI and Data Science",
    time: "Nov 2022 – Nov 2026",
    location: "Coimbatore, India",
  },
  {
    title: "Syed Ammal Higher Secondary School",
    detail: "HSC",
    time: "2020 – 2022",
    location: "Ramanathapuram",
  },
  {
    title: "Mohamedia Higher Secondary School",
    detail: "SSLC",
    time: "2020",
    location: "Ramanathapuram",
  },
];

function TimelineColumn({ label, items }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-[#c6ff00]">
        {label}
      </p>
      <div className="timeline timeline-column mt-8">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            className="timeline-item timeline-item-column"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-col">
              <span className="timeline-pill">{item.time}</span>
              <div className="glass timeline-card">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-base text-white/70 leading-relaxed">
                  {item.detail}
                </p>
                {item.highlights && (
                  <ul className="mt-4 list-disc pl-4 text-sm text-white/60 space-y-1.5">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                )}
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/40">
                  {item.location}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Timelines() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Timelines
        </h2>
        <br />
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Changed label to allow rendering specific column types if needed, currently reusing logic */}
          <TimelineColumn label="Experience Timeline" items={experience} />
          <TimelineColumn label="Education Timeline" items={education} />
        </div>

      </div>
    </section>
  );
}

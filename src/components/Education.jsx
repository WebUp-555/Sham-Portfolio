import { motion } from "framer-motion";

const education = [
  {
    school: "Sri Chaitanya Techno School",
    degree: "School Education",
    location: "Kurnool, Andhra Pradesh, India",
    time: "2020",
  },
  {
    school: "Sri Chaitanya College",
    degree: "Intermediate",
    location: "Kurnool, Andhra Pradesh, India",
    time: "2021 – 2022",
  },
  {
    school: "G. Pulla Reddy Engineering College",
    degree: "B.Tech, Electrical and Electronics Engineering",
    location: "Kurnool, Andhra Pradesh, India",
    time: "2023 – Present",
  },
];

export default function Education() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm font-medium text-[#c6ff00]">
            Education
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Academic Timeline
          </h2>
        </motion.div>

        <div className="timeline mt-12">
          {education.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={item.school}
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
                        <h3 className="text-lg font-semibold">{item.school}</h3>
                        <p className="mt-2 text-sm text-white/70">{item.degree}</p>
                        <p className="mt-3 text-sm text-white/50">
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
                        <h3 className="text-lg font-semibold">{item.school}</h3>
                        <p className="mt-2 text-sm text-white/70">{item.degree}</p>
                        <p className="mt-3 text-sm text-white/50">
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

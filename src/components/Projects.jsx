import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, ShoppingCart } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const projectImages = {
  "VideoTweet – Backend API": "/projects/Screenshot%202026-04-14%20010252.png",
  "E-Commerce Web Application": "/projects/Screenshot%202026-02-25%20235933.png",
};

const projects = [
  {
    title: "VideoTweet – Backend API",
    impact: "Built 15+ RESTful APIs for user interactions, content management, and subscription workflows for a social media platform.",
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "RBAC"],
    link: "https://github.com/WebUp-555/videotweet-backend",
    icon: Code2,
    color: "text-emerald-400",
    accent: "from-emerald-500/20 to-lime-500/5",
    points: [
      "Secure JWT authentication with role-based access control",
      "Designed modular MVC architecture",
      "Structured MongoDB schemas for user-generated content",
    ],
  },
  {
    title: "E-Commerce Web Application",
    impact: "Built a full-stack e-commerce platform with secure user/admin workflows, payment handling, cart management, and analytics.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay"],
    link: "https://github.com/WebUp-555/ecommerce-client-web",
    icon: ShoppingCart,
    color: "text-cyan-400",
    accent: "from-cyan-500/20 to-sky-500/5",
    points: [
      "Implemented authentication, authorization, and password recovery",
      "Integrated Razorpay payment gateway in test mode",
      "Connected frontend with scalable REST APIs",
    ],
  },
];

const cardMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: index * 0.07 },
  }),
};

export default function Projects() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const sectionY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <motion.section ref={sectionRef} id="projects" className="py-16 lg:py-24" style={{ y: sectionY }}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#c6ff00]">
            Featured Work
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Projects
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <SpotlightCard
                as={motion.a}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.title}
                className="glass block h-full p-6 transition-all duration-300 group border-white/10 hover:border-white/20"
                spotlightColor="rgba(198, 255, 0, 0.16)"
                custom={index}
                variants={cardMotion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] h-[280px]">
                  <img
                    src={projectImages[project.title] ?? ""}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />
                  <div className="absolute inset-0 flex items-start justify-between p-5">
                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${project.color} backdrop-blur-md`}>
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-white/60 border border-white/10 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md">
                      Backend Project
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-white/70 leading-relaxed">{project.impact}</p>

                <div className="mt-4 space-y-2">
                  {project.points.map((point) => (
                    <div key={point} className="flex gap-3 text-sm text-white/65">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#c6ff00] shrink-0" />
                      <p>{point}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.1em] text-white/60 hover:border-[#c6ff00]/30 hover:text-[#c6ff00] transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

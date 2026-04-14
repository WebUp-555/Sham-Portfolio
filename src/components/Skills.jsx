import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud, Wrench, ShieldCheck, CheckCircle } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "text-blue-400",
    items: ["JavaScript", "SQL"],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "text-emerald-400",
    items: ["Node.js", "Express.js", "REST API Design", "MVC Architecture"],
  },
  {
    title: "Authentication & Security",
    icon: ShieldCheck,
    color: "text-lime-400",
    items: ["JWT Authentication", "RBAC", "Password Hashing", "Secure Routes"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "text-cyan-400",
    items: ["MongoDB", "Schema Design", "Data Modeling"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "text-amber-400",
    items: ["Git", "GitHub", "Postman"],
  },
  {
    title: "Deployment & Delivery",
    icon: Cloud,
    color: "text-indigo-400",
    items: ["Async/Await", "Error Handling", "Payment Integrations", "Production Workflows"],
  },
  {
    title: "Engineering Practices",
    icon: CheckCircle,
    color: "text-lime-400",
    items: ["Modular Architecture", "Clean Error Handling", "Scalable APIs"],
  },
];

export default function Skills() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[20%] w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[20%] w-80 h-80 bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#c6ff00]">
            Technical Stack
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Backend Skills
          </h2>
          <p className="mt-4 text-white/60 max-w-3xl text-base">
            Focused on Node.js backend development, secure authentication, database design, and production-ready API workflows.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-lg bg-white/5 ${category.color} group-hover:scale-110 transition-transform`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-2.5 py-1 rounded-full bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white/90 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

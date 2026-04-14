import Head from "next/head";
import Hero from "../components/Hero";
import BlurText from "../components/BlurText";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SkillsTicker from "../components/SkillsTicker";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Education from "../components/Education";


export default function HomePage() {
  const aboutRef = useRef(null);
  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const aboutY = useTransform(aboutScroll, [0, 1], [60, -60]);

  const bio = "Backend Developer specializing in Node.js, REST APIs, authentication systems, and production-ready modular architectures.";

  const profileCards = [
    {
      title: "About Me",
      text: "Backend developer with expertise in Node.js and Express.js, specializing in building production-grade REST APIs and scalable server architectures. I focus on implementing secure authentication systems, designing modular MVC patterns, and optimizing database workflows. My goal is to deliver robust, maintainable backend solutions that scale efficiently.",
    },
    {
      title: "Education & Background",
      text: "B.Tech in Electrical & Electronics Engineering from G. Pulla Reddy Engineering College (2023–2027). Self-taught full-stack developer with a deep focus on backend architecture, API security, and database design. Experience with building complete backend systems from authentication layers to payment integrations.",
    },
    {
      title: "Key Strengths",
      text: "• 15+ production REST APIs built with Express.js and MongoDB\n• JWT-based authentication with comprehensive RBAC implementation\n• Payment gateway integration (Razorpay) for production workflows\n• Modular MVC architecture and clean code principles\n• Async/await patterns and robust error handling\n• Schema design and optimization for MongoDB\n• Full-stack deployment and production-ready systems",
    },
  ];

  return (
    <>
      <Head>
        <title>D SHAMSHEER | Backend Developer</title>
        <meta
          name="description"
          content="Backend developer portfolio with Node.js, REST APIs, JWT authentication, and production-ready projects."
        />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
      <div className="relative min-h-screen bg-[#050505] text-white">
        <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-[#c6ff00]/10 blur-3xl" />
        <main>
          <Hero />

          <div className="container mx-auto px-6 py-24 flex justify-center">
            <BlurText
              text={bio}
              delay={50}
              animateBy="words"
              direction="top"
              className="text-xl md:text-2xl font-light text-white/80 text-center leading-relaxed tracking-wide max-w-4xl mx-auto"
            />
          </div>

          <motion.section ref={aboutRef} id="about" className="container mx-auto px-6 pb-20" style={{ y: aboutY }}>
            <div className="grid gap-6 lg:grid-cols-3">
              {profileCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="glass rounded-3xl p-8"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-[#c6ff00]">
                    {card.title}
                  </p>
                  <p className="mt-4 text-white/75 leading-relaxed text-base">
                    {card.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <Education />
          <Projects />
          <SkillsTicker />
          <Skills />
          <Resume />
          <Contact />
        </main>
      </div>
    </>
  );
}

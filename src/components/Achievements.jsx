import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { BentoGrid, BentoCard } from "./BentoGrid";
import { Award, Trophy, Star, Zap, Globe, Cpu } from "lucide-react";

const achievements = [
    {
        id: 5,
        title: "Global Hackathon Winner – Web3 Track",
        date: "14–16 Jun 2024",
        role: "Winner",
        description: "Won a large-scale online international hackathon. Built a blockchain-based investment platform integrating AI and Web3 technologies.",
        milestones: ["AI systems", "Scalable architecture"],
        prize: "$6,000 (~₹5,00,000)",
        icon: Globe,
        images: ["/achievements/onepiece-1.jpg", "/achievements/onepiece-2.jpg", "/achievements/onepiece-3.jpg"],
        className: "md:col-span-2",
        gradient: "from-orange-500/20 to-red-600/5",
        textColor: "text-orange-400"
    },
    {
        id: 4,
        title: "2nd Place – 36-Hour Hack Summit",
        date: "6 Oct 2024",
        role: "Runner-Up",
        description: "Secured 2nd place in an intense 36-hour hackathon (Aarush). Recognized for technical depth and resilience.",
        milestones: [],
        prize: "₹50,000",
        icon: Zap,
        images: ["/achievements/aarush-1.jpg", "/achievements/aarush-2.jpg"],
        className: "md:col-span-1",
        gradient: "from-purple-500/20 to-violet-600/5",
        textColor: "text-purple-400"
    },
    {
        id: 3,
        title: "2nd Runner-Up – Growbinar Hackathon",
        date: "10 Aug 2024",
        role: "Runner-Up",
        description: "Achieved 2nd Runner-Up position in a real-world problem-solving hackathon.",
        milestones: [],
        prize: "₹10,000",
        icon: Award,
        images: ["/achievements/grow-1.jpg", "/achievements/grow-2.jpg"],
        className: "md:col-span-1",
        gradient: "from-emerald-500/20 to-green-600/5",
        textColor: "text-emerald-400"
    },
    {
        id: 2,
        title: "Pre-Placement Offer Achievement",
        date: "Jan 2025",
        role: "Top 50 Nationwide",
        description: "Shortlisted among the Top 50 teams nationwide. Successfully converted the hackathon performance into a PPO.",
        milestones: ["Strong industry collaboration"],
        prize: "PPO Secured",
        icon: Star,
        images: ["/achievements/tata-1.jpg"],
        className: "md:col-span-2",
        gradient: "from-blue-500/20 to-cyan-600/5",
        textColor: "text-cyan-400"
    },
    {
        id: 7,
        title: "3rd Prize – INNOVFEST",
        roles: "3rd Place",
        date: "12 Jan 2024",
        description: "Won 3rd prize for a Thunderstorm Prediction project.",
        milestones: [],
        prize: "Winner",
        icon: Award,
        images: ["/achievements/Innovfest_1.jpg", "/achievements/Innovfest_2.jpg"],
        className: "md:col-span-1",
        gradient: "from-teal-500/20 to-cyan-600/5",
        textColor: "text-teal-400"
    },
    {
        id: 8,
        title: "2nd Place – Mini Project Expo",
        roles: "2nd Place",
        date: "8 Jun 2024",
        description: "Secured 2nd place for an innovative engineering project.",
        milestones: [],
        prize: "Runner Up",
        icon: Award,
        images: ["/achievements/mini-1.jpg", "/achievements/mini-2.jpg"],
        className: "md:col-span-1",
        gradient: "from-pink-500/20 to-rose-600/5",
        textColor: "text-pink-400"
    },
    {
        id: 6,
        title: "Top 10 Finalist – Intel OneAPI",
        roles: "Finalist",
        date: "14 Apr 2024",
        description: "Ranked Top 10 out of 500 teams. Acknowledged for technical excellence.",
        milestones: [],
        prize: "Top 10",
        icon: Cpu,
        images: ["/achievements/ins-1.jpg", "/achievements/ins-2.jpg"],
        className: "md:col-span-1",
        gradient: "from-blue-400/20 to-indigo-600/5",
        textColor: "text-indigo-400"
    },
    {
        id: 9,
        title: "Chatbot War – Winner",
        role: "Winner",
        date: "27 Feb 2026",
        description: "Won the Chatbot War competition by building a superior conversational AI that outperformed all rival bots in accuracy and engagement.",
        milestones: ["AI Engineering", "Conversational Design"],
        prize: "Winner 🏆",
        icon: Trophy,
        images: ["/achievements/akshaya1.png", "/achievements/akshaya2.png"],
        className: "md:col-span-1",
        gradient: "from-yellow-500/20 to-amber-600/5",
        textColor: "text-yellow-400"
    },
    {
        id: 10,
        title: "Create Your Own AI Character – Runner Up",
        role: "Runner-Up",
        date: "27 Feb 2026",
        description: "Secured Runner-Up position in the 'Create Your Own AI Character' challenge, showcasing creative AI character design and personality engineering.",
        milestones: ["AI Character Design", "Prompt Engineering"],
        prize: "Runner-Up",
        icon: Star,
        images: ["/achievements/akshaya1.png", "/achievements/akshaya2.png"],
        className: "md:col-span-1",
        gradient: "from-fuchsia-500/20 to-pink-600/5",
        textColor: "text-fuchsia-400"
    },
    {
        id: 11,
        title: "Startup Ideathon – Runner Up",
        role: "Runner-Up",
        date: "27 Feb 2026",
        description: "Achieved Runner-Up at the Startup Ideathon, presenting a compelling and innovative startup idea with strong market potential and execution strategy.",
        milestones: ["Startup Pitch", "Market Research"],
        prize: "Runner-Up",
        icon: Zap,
        images: ["/achievements/akshaya1.png", "/achievements/akshaya2.png"],
        className: "md:col-span-1",
        gradient: "from-sky-500/20 to-blue-600/5",
        textColor: "text-sky-400"
    },
    {
        id: 12,
        title: "Samurai Hackathon – 1st Prize",
        role: "Winner",
        date: "15 Oct 2025",
        description: "Won First Prize at the Samurai Hackathon, delivering an outstanding solution that outshone all competing teams.",
        milestones: ["Problem Solving", "Innovation"],
        prize: "₹10,000",
        icon: Trophy,
        images: ["/achievements/samurai.jpeg"],
        className: "md:col-span-1",
        gradient: "from-red-500/20 to-orange-600/5",
        textColor: "text-red-400"
    }
];

const ImageSlider = ({ images, interval = 2500 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images && images.length > 1) {
            const timer = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }, interval);
            return () => clearInterval(timer);
        }
    }, [images, interval]);

    if (!images || images.length === 0) return null;

    return (
        <div className="absolute inset-0">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt="Achievement"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover absolute inset-0 group-hover/card:opacity-100 group-hover/card:scale-105 transition-transform duration-500"
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent pointer-events-none" />

            {images.length > 1 && (
                <div className="absolute top-4 right-4 z-20 flex gap-1.5 pointer-events-none">
                    {images.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1 rounded-full transition-all duration-200 ${idx === currentIndex ? 'w-6 bg-[#c6ff00]' : 'w-1.5 bg-white/30'
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default function Achievements() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="achievements" className="pt-24 pb-40 relative overflow-hidden" ref={ref}>
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="mx-auto max-w-6xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <p className="text-xs uppercase tracking-[0.3em] text-[#c6ff00]">
                        Wall of Fame
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                        Achievements & Awards
                    </h2>
                    <br />
                </motion.div>

                <BentoGrid>
                    {achievements.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <BentoCard key={item.id} className={item.className}>
                                <div className="flex flex-col h-full min-h-[20rem] p-6 relative group/card overflow-hidden">
                                    {/* Background Image Slider */}
                                    <ImageSlider images={item.images} interval={2000 + (i * 600)} />

                                    {/* Background Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 group-hover/card:opacity-20 transition-opacity duration-300 pointer-events-none`} />

                                    <div className="flex justify-between items-start mb-4 relative z-10 pointer-events-none">
                                        <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${item.textColor} backdrop-blur-md`}>
                                            <Icon size={24} />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-white/60 border border-white/10 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md">
                                            {item.date}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover/card:text-[#c6ff00] transition-colors line-clamp-2 relative z-10 pointer-events-none">
                                        {item.title}
                                    </h3>

                                    <p className="text-white/70 text-sm leading-relaxed mb-4 flex-grow relative z-10 pointer-events-none">
                                        {item.description}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center relative z-10 pointer-events-none">
                                        <span className={`font-bold ${item.textColor} text-lg drop-shadow-md`}>{item.prize}</span>
                                        {item.role && <span className="text-xs text-white/50 uppercase tracking-widest font-medium bg-black/20 px-3 py-1 rounded-full">{item.role}</span>}
                                    </div>
                                </div>
                            </BentoCard>
                        )
                    })}
                </BentoGrid>
            </div>
        </section>
    );
}

import { useRef } from "react";
import { motion } from "framer-motion";

export default function ScrollReveal({
    children,
    baseOpacity = 0.1,
    enableBlur = true,
    baseRotation = 3,
    blurStrength = 4
}) {
    const ref = useRef(null);

    return (
        <div ref={ref} className="relative z-10 container mx-auto px-6 py-24 text-center">
            <motion.h2
                initial={{
                    opacity: baseOpacity,
                    rotate: baseRotation,
                    filter: enableBlur ? `blur(${blurStrength}px)` : "none",
                    y: 20
                }}
                whileInView={{
                    opacity: 1,
                    rotate: 0,
                    filter: "blur(0px)",
                    y: 0
                }}
                transition={{
                    duration: 0.7,
                    ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-10%" }}
                className="text-2xl md:text-4xl font-medium leading-relaxed max-w-4xl mx-auto text-[#c6ff00]/90"
            >
                {children}
            </motion.h2>
        </div>
    );
}

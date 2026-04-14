import { motion } from "framer-motion";

export default function BlurText({
    text = "",
    delay = 140,
    className = "",
    animateBy = "words", // 'words' or 'letters'
    direction = "top", // 'top', 'bottom', 'left', 'right'
    onAnimationComplete,
}) {
    const elements = animateBy === "words" ? text.split(" ") : text.split("");

    // Determine initial position based on direction
    const getInitialPosition = () => {
        switch (direction) {
            case "top":
                return { y: -20 };
            case "bottom":
                return { y: 20 };
            case "left":
                return { x: -20 };
            case "right":
                return { x: 20 };
            default:
                return { y: 0 };
        }
    };

    const { x, y } = getInitialPosition();

    // Container variants
    const container = {
        hidden: { opacity: 0 },
        visible: () => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay / 1000 },
        }),
    };

    // Child variants (word/letter)
    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: x || 0,
            y: y || 0,
            filter: "blur(10px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            className={`mx-auto max-w-4xl text-center leading-relaxed text-[#c6ff00]/90 ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-10%" }}
            onAnimationComplete={onAnimationComplete}
            // Use flex-wrap if strictly inline block elements, but spacing might be weird.
            // Better to render spaces explicitly if splitting by words.
            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', columnGap: '0.4em' }}
        >
            {elements.map((element, index) => (
                <motion.span key={index} variants={child} className="inline-block">
                    {element === " " ? "\u00A0" : element}
                </motion.span>
            ))}
        </motion.div>
    );
}

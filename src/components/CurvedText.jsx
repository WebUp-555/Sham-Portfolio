import React, { useEffect, useId } from 'react';
import { motion, useAnimation } from 'framer-motion';

const CurvedText = ({
    text,
    radius = 200,
    fontSize = "1.5rem",
    letterSpacing = "0.2em",
    duration = 14,
    reverse = false,
    className = ""
}) => {
    const controls = useAnimation();
    const reactId = useId();

    useEffect(() => {
        controls.start({
            rotate: reverse ? -360 : 360,
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
            }
        });
    }, [controls, duration, reverse]);

    // Create a circular path
    // M cx, cy m -r, 0 a r,r 0 1,1 (r*2),0 a r,r 0 1,1 -(r*2),0
    // Center is (radius + padding), (radius + padding)
    const size = radius * 2 + 50; // Add padding
    const cx = size / 2;
    const cy = size / 2;
    const r = radius;

    // Path definition for a circle
    const pathId = `curvedTextPath-${reactId.replace(/:/g, "")}`;
    const pathD = `M ${cx}, ${cy} m -${r}, 0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`;

    return (
        <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
            <motion.svg
                viewBox={`0 0 ${size} ${size}`}
                width={size}
                height={size}
                animate={controls}
                className="w-full h-full origin-center"
            >
                <defs>
                    <path id={pathId} d={pathD} fill="none" />
                </defs>
                <text
                    fontSize={fontSize}
                    fontFamily="var(--font-poppins)" // Use global font variable
                    fontWeight="500"
                    letterSpacing={letterSpacing}
                    fill="currentColor"
                    className="text-[#c6ff00]/90 uppercase" // Default color and style
                >
                    <textPath href={`#${pathId}`} startOffset="0%">
                        {text}
                    </textPath>
                </text>
            </motion.svg>

            {/* Optional: Central element if desired, or just empty center */}
            {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-white/20 text-4xl font-bold">+</span>
      </div> */}
        </div>
    );
};

export default CurvedText;

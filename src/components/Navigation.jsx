"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const menuItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
];

const menuVariants = {
    closed: {
        opacity: 0,
        transition: {
            staggerChildren: 0.02,
            staggerDirection: -1,
            when: "afterChildren",
        },
    },
    open: {
        opacity: 1,
        transition: {
            staggerChildren: 0.03,
            delayChildren: 0.03,
            when: "beforeChildren",
        },
    },
};

const itemVariants = {
    closed: {
        opacity: 0,
        y: 20,
        filter: "blur(10px)",
    },
    open: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
    },
};

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Floating Menu Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-6 right-6 z-[100] p-4 rounded-full bg-[#c6ff00] text-black hover:bg-[#c6ff00]/90 transition-colors shadow-lg shadow-[#c6ff00]/20"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[90]"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu Content */}
                        <motion.div
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="fixed inset-0 z-[95] flex items-center justify-center text-white"
                        >
                            <nav className="flex flex-col items-center gap-4">
                                {menuItems.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        variants={itemVariants}
                                        onClick={handleLinkClick}
                                        className="group relative text-4xl md:text-6xl lg:text-7xl font-bold text-[#ffffff] hover:text-[#c6ff00] transition-colors duration-200"
                                        style={{ color: "#ffffff" }}
                                        custom={index}
                                    >
                                        {/* Hover Effect Line */}
                                        <motion.span
                                            className="absolute -bottom-2 left-0 h-1 bg-[#c6ff00]"
                                            initial={{ width: 0 }}
                                            whileHover={{ width: "100%" }}
                                            transition={{ duration: 0.2 }}
                                        />
                                        {item.name}
                                    </motion.a>
                                ))}
                            </nav>

                            {/* Decorative Elements */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 0.1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ delay: 0.2 }}
                                className="absolute top-20 left-20 w-64 h-64 bg-[#c6ff00] rounded-full blur-[120px] pointer-events-none"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 0.1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ delay: 0.3 }}
                                className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-[120px] pointer-events-none"
                            />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Download } from "lucide-react";

export default function Resume() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const sectionY = useTransform(scrollYProgress, [0, 1], [70, -70]);
    const resumePath = "/SHAMSHEER_DUDEKULA_RESUME.pdf";

    return (
        <motion.section id="resume" className="py-20 relative overflow-hidden" ref={ref} style={{ y: sectionY }}>
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[30%] right-[5%] w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[10%] w-72 h-72 bg-[#c6ff00]/5 rounded-full blur-[100px]" />
            </div>

            <div className="mx-auto max-w-6xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12"
                >
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#c6ff00] mb-2">
                            Curriculum Vitae
                        </p>
                        <h2 className="text-3xl font-semibold sm:text-4xl">
                            Resume
                        </h2>
                    </div>

                    <a
                        href={resumePath}
                        type="download"
                        download="SHAMSHEER_DUDEKULA_RESUME.pdf"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#c6ff00] text-black font-bold rounded-full hover:bg-[#b2e600] transition-colors shadow-[0_0_20px_rgba(198,255,0,0.3)] hover:shadow-[0_0_30px_rgba(198,255,0,0.5)]"
                    >
                        <Download size={20} />
                        Download PDF Resume
                    </a>
                </motion.div>

                <p className="-mt-4 mb-6 text-sm text-white/55">
                    The preview below shows the PDF resume inside a themed frame.
                </p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full h-[800px] bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden relative group"
                >
                    <iframe
                        src={resumePath}
                        className="w-full h-[calc(100%+56px)] -mt-14"
                        title="Resume"
                    />
                </motion.div>
            </div>
        </motion.section>
    );
}

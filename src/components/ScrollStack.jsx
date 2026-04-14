import { useRef } from "react";
import { motion } from "framer-motion";

function Card({ children, index, total, offset = 40 }) {
    const ref = useRef(null);
    const top = offset + index * 10;

    return (
        <div
            ref={ref}
            className="sticky"
            style={{
                top: `${top}px`,
                zIndex: index,
                marginBottom: `${(total - index) * offset}px`,
            }}
        >
            <motion.div
                className="origin-top"
                initial={{ scale: 1, y: 50, opacity: 0 }}
                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ duration: 0.35, delay: index * 0.07 }}
                viewport={{ once: true, margin: "-10%" }}
            >
                {children}
            </motion.div>
        </div>
    );
}

export default function ScrollStack({ items, renderItem, itemOffset = 40 }) {
    return (
        <div className="relative w-full">
            {items.map((item, index) => (
                <Card
                    key={item.id || index}
                    index={index}
                    total={items.length}
                    offset={itemOffset}
                >
                    {renderItem(item, index)}
                </Card>
            ))}
            {/* Height spacer to allow scrolling past the stack? 
           With sticky, the container height naturally expands if we use margin or padding. 
           The marginBottom on Card helps. 
       */}
        </div>
    );
}

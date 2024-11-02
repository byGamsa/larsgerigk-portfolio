import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from 'react'

export default function TextReveal({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref} className="relative overflow-hidden">
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-violet-600"
            />
        </div>
    );
}
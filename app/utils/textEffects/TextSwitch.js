import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

export const TextSwitch = ({ textArray }) => {
    const [active, setActive] = useState(0);

    const ONE_SECOND = 1000;
    const WAIT_TIME = ONE_SECOND * 3;

    useEffect(() => {
        const intervalRef = setInterval(() => {
            setActive((pv) => (pv + 1) % textArray.length);
        }, WAIT_TIME);

        return () => clearInterval(intervalRef);
    }, [textArray]);

    return (
        <div className="relative">
            {textArray.map((phrase, index) => {
                const isActive = active === index;
                return (
                    isActive && (
                        <motion.div
                            key={phrase + index}
                            initial={false}
                            animate={isActive ? "active" : "inactive"}
                            style={{
                                x: "-50%",
                            }}
                            variants={{
                                active: {
                                    opacity: 1,
                                    scale: 1,
                                },
                                inactive: {
                                    opacity: 0,
                                    scale: 0,
                                },
                            }}
                            className="absolute left-1/2 top-0 w-full text-center"
                        >
                            {/* Einfügen der TextReveal-Komponente */}
                            <TextReveal>
                                <h3 className="text-lg font-light text-neutral-500 sm:text-4xl md:text-5xl lg:text-6xl">
                                    {phrase}
                                </h3>
                            </TextReveal>
                        </motion.div>
                    )
                );
            })}
        </div>
    );
};

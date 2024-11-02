import { useRef, useState } from "react";
import { motion } from "framer-motion";

const TextEncrypt = ({ children }) => {
    const TARGET_TEXT = children;
    const CYCLES_PER_LETTER = 2;
    const SHUFFLE_TIME = 60;

    const CHARS = "10";

    const intervalRef = useRef(null);

    const [text, setText] = useState(TARGET_TEXT);

    const scramble = () => {
        let pos = 0;

        intervalRef.current = setInterval(() => {
            const scrambled = TARGET_TEXT.split("")
                .map((char, index) => {
                    if (pos / CYCLES_PER_LETTER > index) {
                        return char;
                    }

                    const randomCharIndex = Math.floor(Math.random() * CHARS.length);
                    const randomChar = CHARS[randomCharIndex];

                    return randomChar;
                })
                .join("");

            setText(scrambled);
            pos++;

            if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
                stopScramble();
            }
        }, SHUFFLE_TIME);
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current || undefined);

        setText(TARGET_TEXT);
    };

    return (
        <motion.button
            whileHover={{
                scale: 1.025,
            }}
            whileTap={{
                scale: 0.975,
            }}
            onViewportEnter={scramble}
            onViewportLeave={stopScramble}
            className=""
        >
            <div className="relative z-10 flex items-center gap-2">
                <span className="text-5xl font-black uppercase text-white sm:text-7xl md:text-8xl lg:text-9xl">{text}</span>
            </div>
            <motion.span
                initial={{
                    y: "100%",
                }}
                animate={{
                    y: "-100%",
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 1,
                    ease: "linear",
                }}
                className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
            />
        </motion.button>
    );
};

export default TextEncrypt;
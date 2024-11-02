import { motion } from "framer-motion";
import { CiCircleChevDown } from "react-icons/ci";

const LOOP_DURATION = 7;

const Ping = () => {
    return (
        <div className="relative pointer-events-auto">
            <Logo />
            <Band delay={0} />
            <Band delay={LOOP_DURATION * 0.25} />
            <Band delay={LOOP_DURATION * 0.5} />
            <Band delay={LOOP_DURATION * 0.75} />
        </div>
    );
};

const Logo = () => {
    return (
        <motion.div
            className="relative z-10 flex items-center justify-center"
            initial={{
                opacity: 0,
                scale: 0.85,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1,
                ease: "easeOut",
            }}
        >
            <CiCircleChevDown size={40} className="fill-violet-300" />
        </motion.div>
    );
};

const Band = ({ delay }) => {
    return (
        <motion.span
            style={{
                translateX: "-50%",
                translateY: "-50%",
            }}
            initial={{
                opacity: 0,
                scale: 0.25,
            }}
            animate={{
                opacity: [0, 1, 1, 0],
                scale: 1,
            }}
            transition={{
                repeat: Infinity,
                repeatType: "loop",
                times: [0, 0.5, 0.75, 1],
                duration: LOOP_DURATION,
                ease: "linear",
                delay,
            }}
            className="absolute left-[50%] top-[50%] z-0 h-24 w-24 rounded-full border-[1px] border-violet-500 bg-gradient-to-br from-violet-500/50 to-violet-800/20 shadow-xl shadow-violet-500/40"
        />
    );
};

export default Ping;
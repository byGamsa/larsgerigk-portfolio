import { motion } from "framer-motion";
import Image from 'next/image'

const Phone = ({ image, width, height }) => {
    return (
        <div
            style={{
                transformStyle: "preserve-3d",
            }}
            className="rounded-[24px] bg-violet-500"
        >
            <motion.div
                initial={{
                    transform: "translateZ(8px) translateY(-2px)",
                }}
                animate={{
                    transform: "translateZ(32px) translateY(-8px)",
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 2,
                    ease: "easeInOut",
                }}
                className="relative h-full w-full rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
            >
                <Image
                        src={image}
                        width={width}
                        height={height}
                        alt="Screenshot"
                        className="rounded-[24px]"
                    />
            </motion.div>
        </div>
    );
};

export default Phone;
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import TextReveal from "@/app/utils/textEffects/TextReveal";
import OutlineButton from "../button/OutlineButton";
import { IoMdSend } from "react-icons/io";

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
    return (
        <motion.img
            style={{
                top,
                left,
                rotate,
            }}
            className={"drag-elements w-96 bg-neutral-200 p-1 pb-4"}
            src={src}
            alt={alt}
        />
    );
};

export const About = () => {
    return (
        <section id="about" className="section-wrapper">
            <div className="flex items-center justify-center pt-96 gap-36 p-96">
                <div className="space-y-4">
                    <TextReveal>
                        <p className="leading-relaxed text-zinc-300">
                            <span className="bg-violet-500 text-white py-1 px-3 rounded font-bold mr-1 float-left text-4xl">
                                Hey there!
                            </span>
                        </p>
                    </TextReveal>
                    <TextReveal>
                        <p className="leading-relaxed text-zinc-300 text-2xl font-mono">
                            I&apos;m Lars, I am a Media Informatics student with over 10 years of programming experience.
                        </p>
                    </TextReveal>
                    <TextReveal>
                        <p className="leading-relaxed text-zinc-300 text-2xl font-mono">
                            Passionate about coding since my early years, I have successfully completed numerous projects in software and web development, as well as mobile app creation.
                        </p>
                    </TextReveal>
                    <TextReveal>
                        <p className="leading-relaxed text-zinc-300 text-2xl font-mono">
                            Let&apos;s connect and create innovative solutions together!
                        </p>
                    </TextReveal>
                    <OutlineButton>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-4 text-xl font-bold text-violet-400">
                                <IoMdSend />
                                <span>Send me a message</span>
                            </div>
                        </div>
                    </OutlineButton>
                </div>
            </div>
        </section>
    );
};

import { motion } from "framer-motion";
import {
    SiNike,
    Si3M,
    SiAbstract,
    SiAdobe,
    SiAirtable,
    SiAmazon,
    SiBox,
    SiBytedance,
    SiChase,
    SiCloudbees,
    SiBurton,
    SiBmw,
    SiHeroku,
    SiBuildkite,
    SiCouchbase,
    SiDailymotion,
    SiDeliveroo,
    SiEpicgames,
    SiGenius,
    SiGodaddy,
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiReact,
    SiRedux,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiMongodb,
    SiGithub,
    SiCsharp,
    SiCplusplus,
    SiAwslambda,
    SiPython,
    SiDocker,
    SiKubernetes,
    SiVuedotjs,
    SiNextdotjs,
    SiWordpress,
} from "react-icons/si";
import TextReveal from "@/app/utils/textEffects/TextReveal";

const Skills = () => {
    return (
        <section id="skills" className="relative">
            <span className="flex flex-col items-center justify-center mb-8 text-3xl md:text-5xl font-black">
                <div className="w-40 h-2 bg-violet-500 mb-4" />
                <TextReveal>
                    Some of my Skills
                </TextReveal>
            </span>
            <div className="">
                <div className="flex overflow-hidden">
                    <TranslateWrapper>
                        <LogoItemsTop />
                    </TranslateWrapper>
                    <TranslateWrapper>
                        <LogoItemsTop />
                    </TranslateWrapper>
                    <TranslateWrapper>
                        <LogoItemsTop />
                    </TranslateWrapper>
                </div>
                <div className="flex overflow-hidden mt-4">
                    <TranslateWrapper reverse>
                        <LogoItemsBottom />
                    </TranslateWrapper>
                    <TranslateWrapper reverse>
                        <LogoItemsBottom />
                    </TranslateWrapper>
                    <TranslateWrapper reverse>
                        <LogoItemsBottom />
                    </TranslateWrapper>
                </div>
            </div>
        </section>
    );
};

const TranslateWrapper = ({ children, reverse }) => {
    return (
        <motion.div
            initial={{ translateX: reverse ? "-100%" : "0%" }}
            animate={{ translateX: reverse ? "0%" : "-100%" }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 px-2"
        >
            {children}
        </motion.div>
    );
};

const LogoItem = ({ Icon }) => {
    return (
        <a
            className="w-16 md:w-24 h-22 md:h-24 flex justify-center items-center hover:bg-violet-500 hover:bg-opacity-35 text-violet-500 transition-colors"
        >
            <Icon className="text-4xl md:text-5xl" />
        </a>
    );
};

const LogoItemsTop = () => (
    <>
        <LogoItem Icon={SiJavascript} />
        <LogoItem Icon={SiTypescript} />
        <LogoItem Icon={SiHtml5} />
        <LogoItem Icon={SiCss3} />
        <LogoItem Icon={SiReact} />
        <LogoItem Icon={SiRedux} />
        <LogoItem Icon={SiNodedotjs} />
        <LogoItem Icon={SiExpress} />
        <LogoItem Icon={SiPostgresql} />
        <LogoItem Icon={SiMongodb} />
    </>
);

const LogoItemsBottom = () => (
    <>
        <LogoItem Icon={SiGithub} />
        <LogoItem Icon={SiCsharp} />
        <LogoItem Icon={SiCplusplus} />
        <LogoItem Icon={SiAmazon} />
        <LogoItem Icon={SiPython} />
        <LogoItem Icon={SiDocker} />
        <LogoItem Icon={SiKubernetes} />
        <LogoItem Icon={SiVuedotjs} />
        <LogoItem Icon={SiNextdotjs} />
        <LogoItem Icon={SiWordpress} />
    </>
);

export default Skills;
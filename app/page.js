"use client";

import { About } from "./components/about/About";
import Skills from "./components/about/Skills";
import { BackgroundGrid } from "./components/backgroundGrid/BackgroundGrid";
import { Navbar } from "./components/navbar/Navbar";
import Ping from "./components/ping/Ping";
import Project from "./components/project/Project";
import { Stats } from "./components/stats/Stats";
import TextEncrypt from "./utils/textEffects/TextEncrypt";
import TextReveal from "./utils/textEffects/TextReveal";
import { TextSwitch } from "./utils/textEffects/TextSwitch";

export default function Home() {
  return (
    <div>
      <BackgroundGrid />
      <main className="pointer-events-none flex flex-col items-center justify-center h-screen text-center space-y-16">
        <div>
          <TextReveal>
            <span className="text-5xl font-black uppercase text-white sm:text-7xl md:text-8xl lg:text-9xl">
              <TextEncrypt>
              Lars Gerigk
              </TextEncrypt>
            </span>
          </TextReveal>
          <TextSwitch
            textArray={[
              "Full Stack Developer",
              "Software Engineer",
              "Frontend Developer",
              "Backend Developer",
              "Cloud Engineer",
              "Mobile App Developer",
            ]}
          />
        </div>
        <Stats />
      </main>
      <About />
      <Skills />
      <Project />
      <h1 className="relative flex items-center justify-center mt-36 mb-8">© 2024 Lars Gerigk - Alle Rechte vorbehalten.</h1>
      <Navbar />
    </div>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <section className=" bg-neutral-950">
      <SimpleFloatingNav />
    </section>
  );
};

const SimpleFloatingNav = () => {
  return (
    <nav className="fixed left-[50%] top-8 flex w-fit -translate-x-[50%] items-center gap-6 rounded-lg border-[1px] border-neutral-700 bg-neutral-900 p-2 text-sm text-neutral-500 z-50 text-center">
      <Logo />

      <NavLink>Projects</NavLink>
      <NavLink>About Me</NavLink>
      <NavLink>Articles</NavLink>

      <ContactButton />
    </nav>
  );
};

const Logo = () => {
  return (
    <h1 className="text-white font-semibold ">
      GERIGK TM
    </h1>
  );
};

const NavLink = ({ children }) => {
  return (
    <a href="#" rel="nofollow" className="block overflow-hidden">
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
        className="h-[20px]"
      >
        <span className="flex h-[20px] items-center">{children}</span>
        <span className="flex h-[20px] items-center text-neutral-50">
          {children}
        </span>
      </motion.div>
    </a>
  );
};

const ContactButton = () => {
  return (
    <button
      className={`
        relative z-0 flex items-center justify-center gap-2 overflow-hidden rounded-lg border-[1px]
        border-violet-300 px-4 py-2 font-semibold
        uppercase text-violet-300 transition-all duration-500

        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-violet-300
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-neutral-900
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
    >
      <span>Contact</span>
    </button>
  );
};
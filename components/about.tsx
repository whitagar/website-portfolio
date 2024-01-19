"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a full-time software engineer at Neighbor Storage, an online
        marketplace for self-storage and vehicle storage. I graduated from
        Western Governor's University in Fall 2021, and have worked full-time as
        a software engineer ever since.
      </p>

      <p className="mb-3">
        Ever since I was little, I loved to solve puzzles. I started programming
        using a software called Scratch as a 10 year old. Building the
        instructions to even the smallest games in Scratch always captivated me.
        I loved solving complex problems with code.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy
        snowboarding, travelling, eating good food, and playing board games. I
        also love to run, and recently completed my first marathon (hopefully it
        won't be my last) in June 2023.
      </p>
    </motion.section>
  );
}

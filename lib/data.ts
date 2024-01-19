import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web developer",
    location: "Springville, UT",
    description:
      "I oversaw the development, launch, and delivery of scalable web applications and websites for various small business clients.",
    icon: React.createElement(CgWorkAlt),
    date: "2020-2021",
  },
  {
    title: "Bachelor's Degree in Computer Science",
    location: "Salt Lake City, UT",
    description:
      "I graduated from Western Governor's University with a degree in Computer Science",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2021",
  },
  {
    title: "Full-Stack Software Engineer @ Neighbor",
    location: "Lehi, UT",
    description:
      "I'm now a full-stack developer working as a freelancer on the side. I specialize in web applications using React-based frameworks (Next.js, Remix).",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Sun and Sol Studios",
    description:
      "A public web app for a local beauty services company. Created an onboarding and retention flow using AWS Lambda.",
    tags: ["Next.js", "Node.js", "React", "AWS Lambda"],
    imageUrl: "/SunAndSol.png",
    externalUrl: "https://sunandsolstudios.com",
  },
  {
    title: "MVP Ads",
    description:
      "An onboarding questionnaire, account management dashboard, and admin dashboard for a marketing company",
    tags: ["Next.js", "Node.js", "DynamoDB"],
    imageUrl: "/mvp.png",
    externalUrl: "https://mvp.megagonventures.com",
  },
  {
    title: "LynchPin Gigs",
    description:
      "A freelance marketplace with support for multiple languages and locales.",
    tags: ["PHP", "Wordpress", "HTML", "CSS", "Javascript"],
    imageUrl: "/LPG.png",
    externalUrl: "https://lynchpingigs.com",
  },
] as const;

export const skillsData = [
  "React",
  "Typescript",
  "Next.js",
  "Remix",
  "HTML",
  "CSS",
  "AWS Lambda",
  "Ruby",
  "Go",
] as const;

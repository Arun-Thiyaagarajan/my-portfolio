import { nanoid } from "nanoid";
import * as images from './assets'

export const navLinks = [
    {
        id: nanoid(),
        icon: images.home,
        title: "Home",
        href: '#home',
    },
    {
        id: nanoid(),
        icon: images.about,
        title: "About Me",
        href: '#about',
    },
    {
        id: nanoid(),
        icon: images.projects,
        title: "Projects",
        href: '#projects',
    },
]

export const socialLinks = [
    {
        id: nanoid(),
        title: "LinkedIn",
        icon: images.linkedin,
        href: 'https://www.linkedin.com/in/thiyaagarajan-n/',
    },
    {
        id: nanoid(),
        title: "GitHub",
        icon: images.github,
        href: 'https://github.com/Arun-Thiyaagarajan',
    },
    {
        id: nanoid(),
        title: "Instagram",
        icon: images.insta,
        href: 'https://www.instagram.com/arunthiyaagarajan/',
    },
    {
        id: nanoid(),
        title: "Gmail",
        icon: images.gmail,
        href: 'https://mail.google.com/mail/u/0/?ogbl#inbox?compose=GTvVlcSHwrwzFfQNQrjwbxbXFlCTtbTZsrBQhQgWHRzqKgVcLZtrdmkqLKmZcljxSWZMsDvfMxCJG',
        // href: 'mailto:arunthiyaagarajan.ta@gmail.com?subject=Portfolio%20Contact',
    },
]

export const skills = [
    {
        id: nanoid(),
        title: "HTML",
        icon: images.html,
    },
    {
        id: nanoid(),
        title: "CSS",
        icon: images.css,
    },
    {
        id: nanoid(),
        title: "Bootstrap",
        icon: images.bootstrap,
    },
    {
        id: nanoid(),
        title: "Javascript",
        icon: images.js,
    },
    {
        id: nanoid(),
        title: "React",
        icon: images.react_img,
    },
    {
        id: nanoid(),
        title: "Redux",
        icon: images.redux,
    },
    {
        id: nanoid(),
        title: "NodeJS",
        icon: images.node,
    },
    {
        id: nanoid(),
        title: "ExpressJS",
        icon: images.express,
    },
    {
        id: nanoid(),
        title: "MySQL",
        icon: images.mysql,
    },
    {
        id: nanoid(),
        title: "c",
        icon: images.c,
    },
    {
        id: nanoid(),
        title: "Java",
        icon: images.java,
    },
    {
        id: nanoid(),
        title: "Python",
        icon: images.python,
    },
    {
        id: nanoid(),
        title: "firebase",
        icon: images.firebase,
    },
    {
        id: nanoid(),
        title: "git",
        icon: images.git,
    },
    {
        id: nanoid(),
        title: "android studio",
        icon: images.android,
    },
    {
        id: nanoid(),
        title: "figma",
        icon: images.figma,
    },
]

export const projects = [
    {
        id: nanoid(),
        title: "MLC Inventory System for Tiles Company",
        period: "June '23 - Present",
        desc: "It is a beneficial system or web app for all of the tiles company and even small tiles or granite showrooms, to check their inventory and stocks lively.",
        tech_stack: ["React JS", "Node JS", "Express JS", "MySQL"],
        image: images.mlc,
        github: "https://github.com/Arun-Thiyaagarajan/mahalakshmi-cerramics",
    },
    {
        id: nanoid(),
        title: "Shop Smart: A Self-Checkout System",
        period: "Feburary '23 - April '23",
        desc: "It's a web application that allows customers to use their smartphones to check out independently at supermarkets. The main goal of this project is to eliminate the requirement for the consumer to wait in line for billing.",
        tech_stack: ["React JS","Node JS", "Express JS", "MySQL", "Material UI"],
        image: images.ss,
        github: "https://github.com/Arun-Thiyaagarajan/mahalakshmi-cerramics",
    },
    {
        id: nanoid(),
        title: "DermNet: A Skin Prediction System",
        period: "August '23",
        desc: "For users to determine what kind of skin illness they have, there is a web application that is mobile-compatible.",
        tech_stack: ["React JS","Node JS", "Express JS", "MySQL"],
        image: images.dermnet,
        github: "https://github.com/Arun-Thiyaagarajan/DermNet-Final",
    },
]
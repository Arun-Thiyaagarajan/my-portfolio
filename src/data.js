import { nanoid } from "nanoid";
import github from './assets/github.png'
import insta from './assets/instagram.png'
import linkedin from './assets/linkedin.png'
import gmail from './assets/gmail.png'
import home from './assets/home.png'
import about from './assets/user-robot.png'
import projects from './assets/computer.png'
import react_img from './assets/react.png'
import js from './assets/js.png'

export const navLinks = [
    {
        id: nanoid(),
        icon: home,
        title: "Home",
        href: '#home',
    },
    {
        id: nanoid(),
        icon: about,
        title: "About Me",
        href: '#about',
    },
    {
        id: nanoid(),
        icon: projects,
        title: "Projects",
        href: '#contact',
    },
]

export const socialLinks = [
    {
        id: nanoid(),
        title: "LinkedIn",
        icon: linkedin,
        href: 'https://www.linkedin.com/in/thiyaagarajan-n/',
    },
    {
        id: nanoid(),
        title: "GitHub",
        icon: github,
        href: 'https://github.com/Arun-Thiyaagarajan',
    },
    {
        id: nanoid(),
        title: "Instagram",
        icon: insta,
        href: 'https://www.instagram.com/arunthiyaagarajan/',
    },
    {
        id: nanoid(),
        title: "Gmail",
        icon: gmail,
        href: 'https://mail.google.com/mail/u/0/?ogbl#inbox?compose=GTvVlcSBmzjqFQzDsRzrjlVMLKLTRtxDqFNxkRBcjPRqCncgkQQrSPtztFXTfvrhtTsbPMfkNNQKm',
        // href: 'mailto:arunthiyaagarajan.ta@gmail.com?subject=Portfolio%20Contact',
    },
]

export const skills = [
    {
        id: nanoid(),
        title: "HTML",
        icon: "",
    },
    {
        id: nanoid(),
        title: "CSS",
        icon: "",
    },
    {
        id: nanoid(),
        title: "Javascript",
        icon: js,
    },
    {
        id: nanoid(),
        title: "React JS",
        icon: react_img,
    },
    {
        id: nanoid(),
        title: "Redux",
        icon: "",
    },
    {
        id: nanoid(),
        title: "Node JS",
        icon: "",
    },
]
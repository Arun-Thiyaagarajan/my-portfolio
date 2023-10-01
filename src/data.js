import { nanoid } from "nanoid";
import github from './assets/github.png'
import insta from './assets/instagram.png'
import linkedin from './assets/linkedin.png'
import gmail from './assets/gmail.png'

export const navLinks = [
    {
        id: nanoid(),
        title: "Home",
        href: '/',
    },
    {
        id: nanoid(),
        title: "About",
        href: '/about',
    },
    {
        id: nanoid(),
        title: "Projects",
        href: '/projects',
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
        href: 'arunthiyaagarajan.ta@gmail.com',
    },
]
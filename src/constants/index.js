import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nextjs,
    tailwind,
    nodejs,
    git,
    figma,
    postgresql,
    breadit,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "ABOUT",
    },
    {
        id: "work",
        title: "WORK",
    },
    {
        id: "contact",
        title: "CONTACT",
    },
];

// const services = [
//   {
//     title: "Web Developer",
//     icon: web,
//   },
//   {
//     title: "React",
//     icon: mobile,
//   },
//   {
//     title: "Backend Developer",
//     icon: backend,
//   },
//   {
//     title: "Content Creator",
//     icon: creator,
//   },
// ];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next.js",
        icon: nextjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Technology Analyst",
        company_name: "Accenture",
        icon: null,
        iconBg: "#383E56",
        date: "Feb 2023 - Present",
        points: [
            "Conducted comprehensive manual and automated testing on mobile application used by Coles for their Automated Customer Fulfilment Centre.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Documented test results, defect reports, and testing progress, maintaining detailed records for reference and reporting",
        ],
    },
];

const projects = [
    {
        name: "Breadit",
        description:
            "A full stack Reddit-inspired post sharing site that enables users to register, login, create posts, as well as upvote and downvote",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: breadit,
        source_code_link: "https://github.com/",
    },
    {
        name: "SelfCare",
        description:
            "An android app that caters for personal self-care and utilises AR technology to engage the user with the outside world. Utilises MVVM Architecture and various phone sensors to operate.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
    },
];

export { technologies, experiences, projects };

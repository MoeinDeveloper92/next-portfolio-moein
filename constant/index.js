import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaNodeJs, FaFigma } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss } from "react-icons/si"

export const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    }
]

export const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/MoeinDeveloper92",
        content: "Github Account"
    },
    {
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/moein-samani/",
        content: "Linkedin account"
    },
    {
        icon: <FaInstagram />,
        path: "https://www.instagram.com/moein_samani_nezhad",
        content: "Instagram account"
    },
    {
        icon: <FaTwitter />,
        path: "https://x.com/Moein7173",
        content: "Twitter account"
    }
]

export const stats = [
    {
        num: 5,
        text: "Years of Experience"
    },
    {
        num: 100,
        text: "Projects Completed"
    },
    {
        num: 8,
        text: "Technologies mastered"
    },
    {
        num: 500,
        text: "Code Commits"
    }
]

export const services = [
    {
        num: "01",
        title: "Fullstack",
        description: "Nodejs,Nestjs,SQL/NOSql(Postgres-MongoDb)/Docker/Kubernetes/Swagger/Jest and Pactum for E2E and TDD testing/Nextjs/Reactjs/Tawilwindcss/shadcn/framermotion...",
        href: ""
    },
    {
        num: "02",
        title: "Backend Development",
        description: "Creating APIs using Nodejs-Nestjs Which is an enterprise framework - Deplyment and containerization and developing CI/CD pipeline."
    },
    {
        num: "03",
        title: "FrontEnd Development",
        description: "Creating Modern UI using Nextjs-Reactjs - using Modern state management tools like Redux - Redux Toolkit - Modern Css Framework like Tailwindcss and Shadcn"
    },
    {
        num: "04",
        title: "SEO",
        description: "developing SEO friendly app which I put the app in a way to be indexed by crawlers as easy as possible."
    }
]


export const about = [
    {
        title: "About me",
        description: "Dummy text",
        info: [
            {
                fieldName: "Name",
                fieldValue: "Moein Samani"
            },
            {
                fieldName: "Phone",
                fieldValue: "(+49) 178 14 50301"
            },
            {
                fieldName: "Experience",
                fieldValue: "+5"
            },
            {
                fieldName: "Skype",
                fieldValue: "Moein1213"
            },
            {
                fieldName: "Nationality",
                fieldValue: "Iranisch"
            },
            {
                fieldName: "email",
                fieldValue: "moeinsamani1992@gmail.com"
            },
            {
                fieldName: "Freelance",
                fieldValue: "Available"
            },

            {
                fieldName: "Languages",
                fieldValue: "English - German"
            }
        ]
    }
]

export const experiences = {
    icon: "@assets/assets/extra/resume/badge.svg",
    title: "My Experiences",
    description: "Dummy data",
    items: [
        {
            company: "Petanux GmbH",
            position: "Fullstack web developer",
            duration: "Dec 2023 - Present"
        },
        {
            company: "Flipsight GmbH",
            position: "Frontend web developer",
            duration: "Autumn 2023"
        },
        {
            company: "Maya Company",
            position: "React Developer",
            duration: "2019-2022"
        },
        {
            company: "Novin company - E-Commerce",
            position: "Internship React developer",
            duration: "2018-2019"
        },
        {
            comapny: "Tech Academy",
            position: "Teaching Assistant",
            duration: "2017-2018"
        },
        {
            company: "Digital Agency Ahwaz",
            position: "C++ internship",
            duration: "2015-2017"
        }
    ]
}

export const education = {
    icon: '@assets/assets/extra/resume/cap.svg',
    title: "My Education",
    description: "Add dummy data",
    items: [
        {
            institution: "UCA Berlin",
            degree: "Data Analytics",
            duration: "2023-204",
        },
        {
            institution: "Shahid Chamran Ahwaz - Iran",
            degree: "Software Engineer",
            duration: "2012 - 2016"
        },
        {
            institution: "Online Course",
            degree: "Certified Programming Course",
            duration: "2010-2011"
        }
    ]
}


export const skills = {
    title: "My Skills",
    description: "Dummy Data so",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html5"
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3"
        },
        {
            icon: <FaJs />,
            name: "JavaScript"
        },
        {
            icon: <FaReact />,
            name: "ReactJS"
        },
        {
            icon: <SiNextdotjs />,
            name: "NextJS"
        },
        {
            icon: <SiTailwindcss />,
            name: "TailwindCss"
        },
        {
            icon: <FaNodeJs />,
            name: "NodeJS"
        },
        {
            icon: <FaFigma />,
            name: "Figma"
        }
    ]
}
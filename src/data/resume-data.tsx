import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Damon Tingey",
  initials: "DT",
  location: "Provo, UT, USA, MST",
  locationLink: "https://www.google.com/maps/place/Provo",
  about:
    "Full Stack Data Scientist focused on building data products that solve real-world problems.",
  summary:
    "As a Data Scientist, I have experience in building data pipelines, training and deploying machine learning models, and building data visualizations. I work mostly with Python, PyTorch, Plotly Dash, and . I have 2 years of experience in working with real-world data to solve real-world problems.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://damontingey.vercel.app/",
  contact: {
    email: "damon.tingey at gmail dot com",
    tel: "+1 (435)294-6293",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/dtingey",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/damon-tingey/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/BartoszJarocki",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Brigham Young University",
      degree: "Bachelor's Degree in Computer Science with emphasis in Data Science, Minors in Physics and Mathematics",
      start: "2021",
      end: "2024",
    },
  ],
  work: [
    {
      company: "ZONTAL Inc.",
      link: "https://zontal.io",
      badges: [],
      title: "Junior Data Scientist",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: Plotly Dash, Python, JavaScript, MongoDB, Airflow, Kubernetes, AWS",
    },
    {
      company: "Brigham Young University - Department of Physics and Astronomy",
      link: "https://physics.byu.edu",
      badges: [],
      title: "Undergraduate Research Assistant",
      logo: ClevertechLogo,
      start: "2021",
      end: "2023",
      description:
        "Did research in deep-learning based computational molecular dynamics simluations and computational drug discoveryTechnologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "The Coding School",
      link: "https://the-cs.org",
      badges: ['Remote'],
      title: "Teaching Assistant",
      logo: JojoMobileLogo,
      start: "2022",
      end: "2023",
      description:
        "Taught two classes of high school students the basics of python and machine learning, including deep learning and reinforcement learning.",
    },
  ],
  skills: [
    "Python",
    "PyTorch",
    "Plotly Dash",
    "C/C++",
    "Julia",
    "Dutch",
    "MD simulation",
    "Quantum ML",
  ],
  projects: [
    {
      title: "INSyT - LLM Network Instrusion Detection",
      techStack: [
        "Capstone Project",
        "PyTorch",
        "Flask",
        "Redis",
      ],
      description: "Large Language Model based network intrusion detection system",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/Isaacwilliam4/Network_Intrusion",
      },
    },
    {
      title: "TrIP",
      techStack: ["Research Project", "PyTorch", "Docker",],
      description:
        "Transformer based model for prediction molecular potential energy and forces",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/dellacortelab/trip",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
  ],
} as const;

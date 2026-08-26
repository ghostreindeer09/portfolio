const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "TBD",
    title:
      "Leakage-Free SRNet for Robust LSB Steganalysis in Social Engineering Attacks",
    image: "/images/steganalysis.png",
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["Python", "Java", "TypeScript", "JavaScript"],
  },
  {
    category: "Frontend",
    items: ["React", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Express", "FastAPI", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    category: "AI & Data",
    items: [
      "LLM Integration",
      "Prompt Engineering",
      "LangChain",
      "FAISS",
      "ChromaDB",
      "Apache Kafka",
    ],
  },
  {
    category: "Cybersecurity",
    items: [
      "Burp Suite",
      "Nmap",
      "Metasploit",
      "Windows MBox Viewer",
      "OAuth 2.0",
      "JWT",
      "Prisma Cloud",
    ],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker", "Chrome Extension APIs"],
  },
  {
    category: "Operating Systems",
    items: ["Kali Linux", "Ubuntu", "Arch Linux"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/ghostreindeer09",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/rishitsharma1/",
  },
  {
    id:3,
    text: "Substack",
    icon: "/icons/substack-icon.svg",
    bg:"#FFA500",
    link: "https://substack.com/@rishitsharma1?/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/graduation.jpeg",
  },
  {
    id: 2,
    img: "/images/graduation-2.jpeg",
  },
  {
    id: 3,
    img: "/images/graduation-3.jpeg",
  },
  {
    id: 4,
    img: "/images/graduation-4.jpeg",
  },
  {
    id: 5,
    img: "/images/graduation-5.jpeg",
  },
  {
    id: 6,
    img: "/images/graduation-6.jpeg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 101,
      name: "Stego Detector",
      icon: "/images/folder.png",
      kind: "folder",
      children: [
        {
          id: 1012,
          name: "view code",
          icon: "/icons/github.svg",
          kind: "link",
          fileType: "url",
          href: "https://github.com/ghostreindeer09/stego-detector",
        },
      ],
    },

    {
      id: 102,
      name: "E-Commerce Support Resolution Agent",
      icon: "/images/folder.png",
      kind: "folder",
      children: [
        {
          id: 1022,
          name: "view code",
          icon: "/icons/github.svg",
          kind: "link",
          fileType: "url",
          href: "https://github.com/ghostreindeer09/ecom-support-resolution-agent",
        },
      ],
    },

    {
      id: 103,
      name: "Semantic Log Detector",
      icon: "/images/folder.png",
      kind: "folder",
      children: [
        {
          id: 1032,
          name: "view code",
          icon: "/icons/github.svg",
          kind: "link",
          fileType: "url",
          href: "https://github.com/ghostreindeer09/semantic-log-detector",
        },
      ],
    },

    {
      id: 104,
      name: "Token Meter",
      icon: "/images/folder.png",
      kind: "folder",
      children: [
        {
          id: 1042,
          name: "view code",
          icon: "/icons/github.svg",
          kind: "link",
          fileType: "url",
          href: "https://github.com/ghostreindeer09/token-meter-dist",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/graduation-4.jpeg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/graduation-5.jpeg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/graduation-6.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/graduation-6.jpeg",
      description: [
        "Hey! I'm Rishit Sharma, a Computer Science undergraduate specializing in Cybersecurity.",
        "I enjoy building secure web applications, backend services, AI-powered systems, and developer tools.",
        "My work spans cybersecurity, machine learning, intrusion detection, LLM integration, and full-stack development.",
        "I'm particularly interested in building practical security systems that combine intelligent automation with reliable software engineering.",
        "Somewhere between cybersecurity and making things unnecessarily overengineered.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // Add href if your PDF viewer expects a file URL:
      // href: "/resume.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  contact: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  resume: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  safari: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  photos: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  terminal: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  txtfile: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  imgfile: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  contact: {
  isOpen: false,
  zIndex: 0,
  data: null,
},
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
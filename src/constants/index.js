import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  cpp,
  bootstrap,
  gcp,
  numpy,
  postgres,
  pandas,
  matplot,
  packet,
  git,
  figma,
  python,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  clarice,
  carrent,
  jobit,
  tripguide,
  threejs,
  google,
  iepam,
  smart,
  aws,
  whistle,
  recapAI,
  algo,
  stpau
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "Algorithms",
    icon: creator,
  },
  {
    title: "Data Visualization",
    icon: creator,
  },
  {
    title: "Data Analysis",
    icon: backend,
  },
  {
    title: "Data Scraping",
    icon: mobile,
  },
  {
    title: "Deep Learning",
    icon: web,
  },
];

const technologies = [
  {
    name: "python",
    icon: python,
  },
  {
    name: "cpp",
    icon: cpp,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "numpy",
    icon: numpy,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "postgres",
    icon: postgres,
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
    title: "Intern Software Engineer",
    company_name: "IEPAM",
    icon: iepam,
    iconBg: "#E6DEDD",
    date: "August 2022 - December 2022",
    points: [
      "Worked on both the front-end and back-end of an ASP.NET C# web application, using Visual Studio and Git for version control.",
      "Collaborated with the UI/UX design team to implement designs into the web page using HTML, CSS, and JavaScript.",
      "Designed and implemented a PostgreSQL database with PK and FK tables, and created SQL DDL and DML statements to manage the data.",
      "Developed UML diagrams to model the database schema and relationships.",
      "Created database triggers, stored procedures, and transactions to ensure data integrity and consistency.",
      "Created backups of the database to ensure data integrity and disaster recovery.",
      "Monitored and optimized query plans to improve database performance.",
    ],
  },
  {
    title: "Co-Founder",
    company_name: "Clarice The Brand",
    icon: clarice,
    iconBg: "#E6DEDD",
    date: "December 2023 - April 2022",
    points: [
      "Led a team of software developers and oversaw the full software development life cycle of a fashion e-commerce application.",
      "Designed and developed a full-stack React application integrated with Stripe and Strapi.",
      "Collaborated with marketing teams to develop and execute creative marketing campaigns that increased brand visibility and sales.",
      "Creation of a custom API using Strapi, an open-source content management platform.",
      "Configuration of advanced security features, including user authentication and access permissions, ensuring only authorized individuals have access to the API data.",
      "Implementation of an intuitive user interface for content management, allowing for easy creation and administration of content through the API.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "The platform I received for selling shoes is fantastic! I'm thrilled with the design and ease of interacting with my customers. It has made selling shoes online a breeze!",
    name: "Sofia Mendoza",
    designation: "CEO",
    company: "Clarice The Brand",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Thanks to the implementation of Leo's page, my business is now up and running, and I can distribute ice cream to all of my local area clients. I'm so happy with the result!",
    name: "Eduardo Valenzuela",
    designation: "CEO",
    company: "Creamio",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Hopefully You!!!!",
    name: "Great Guy",
    designation: "CEO",
    company: "Coolness",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "awareness fund",
    description:
      "This project is a web-page designed with the purpose of connecting users and associations in order to donate clothes, furniture, food, books, lenins, toys and others. When you Sign-up you get the chance to edit profile, add new goals for the association and add a location for users to know where to drop their donations.",
    tags: [
      {
        name: "ejs",
        color: "blue-text-gradient",
      },
      {
        name: "moongose",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: aws,
    source_code_link: "https://github.com/leogzz0/awareness-fund",
  },
  {
    name: "Whistle",
    description:
      "This project is a web-page designed with the purpose of managing projects. When you Sign-up you get the chance to add new projects with a title and a description. Inside the project you can add tasks with their title, description and due date. Once created you get to set the task as pending, in progress or finished. When you reach you finish the task or project you can eliminate them.",
    tags: [
      {
        name: "handlebars",
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
    image: whistle,
    source_code_link: "https://github.com/leogzz0/Whistle",
  },
  {
    name: "recapAI",
    description:
      "recapAI is a powerful tool that generates concise summaries of articles based on provided URLs. It saves users time by automatically extracting key information and condensing it into a summary. With recapAI, you can quickly grasp the main points of an article without having to read through the entire text.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: recapAI,
    source_code_link: "https://github.com/leogzz0/recapAI",
  },
  {
    name: "St.Paulia",
    description:
      "This project is a web-page designed with the purpose of selling jewelry online and grow your bussiness. You can add a bit of your story, clients can review after buying something, add blogs with tips for your fashion clients and the most important, sell your full catalog.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: stpau,
    source_code_link: "https://github.com/leogzz0/St.Paulia",
  },

  {
    name: "algorithms",
    description:
      "This repository contains a collection of algorithms implemented in C++. From classic sorting and searching algorithms to advanced data structures and graph algorithms, this repository has something for everyone.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "algorithms",
        color: "green-text-gradient",
      },
      {
        name: "data-structures",
        color: "pink-text-gradient",
      },
    ],
    image: algo,
    source_code_link: "https://github.com/leogzz0/algorithms",
  },
  {
    name: "smart",
    description:
      "Educational web-app that allows you to find courses from a variety of categories and also allows you to create your own content. This project is a web-page designed with the purpose of sharing educational content or enrolling in new courses to earns certificates and expand your knowledge.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: smart,
    source_code_link: "https://github.com/leogzz0/smart",
  },
];

export { services, technologies, experiences, testimonials, projects };
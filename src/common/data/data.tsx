import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiHome,
  HiRectangleGroup,
  HiUser,
  HiViewColumns,
} from "react-icons/hi2";
import { RiFacebookBoxLine, RiInstagramLine } from "react-icons/ri";
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
} from "react-icons/rx";

import { BsArrowRight } from "react-icons/bs";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const testimonialData = [
  {
    image: "/assets/png/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/assets/png/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/assets/png/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
];

export const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/assets/jpg/thumb1.jpg",
        },
        {
          title: "title",
          path: "/assets/jpg/thumb2.jpg",
        },
        {
          title: "title",
          path: "/assets/jpg/thumb3.jpg",
        },
        {
          title: "title",
          path: "/assets/jpg/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/assets/jpg/thumb4.jpg",
        },
        {
          title: "title",
          path: "/assets/jpg/thumb1.jpg",
        },
        {
          title: "title",
          path: "/assets/jpg/thumb2.jpg",
        },
        {
          title: "title",
          path: "/assets/jpg/thumb3.jpg",
        },
      ],
    },
  ],
};

export const navData = [
  { id: 1, name: "home", path: "/", icon: <HiHome /> },
  { id: 2, name: "about", path: "/about", icon: <HiUser /> },
  { id: 3, name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { id: 4, name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    id: 5,
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    id: 6,
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

export const homeData = [
  {
    id: 1,
    title1: "Transforming Ideas",
    title2: "Into",
    title3: "Digital Reality",
    subtitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, fugaet. At minima laboriosam nemo nihil voluptas maxime aliquam officiis.",
  },
];

export const socialData = [
  {
    id: 1,
    icon: <RiInstagramLine />,
    link: "",
  },
  {
    id: 2,
    icon: <RiFacebookBoxLine />,
    link: "",
  },
];

export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];
export const aboutPersonalData = [
  {
    id: 1,
    category: "experience",
    countupend: 4,
    countupduration: 5,
    countuptext: "Years of experience",
  },
  {
    id: 2,
    category: "clients",
    countupend: 250,
    countupduration: 5,
    countuptext: "Satisfied clients",
  },
  {
    id: 3,
    category: "projects",
    countupend: 650,
    countupduration: 5,
    countuptext: "Finished projects",
  },
  {
    id: 4,
    category: "awards",
    countupend: 8,
    countupduration: 5,
    countuptext: "Winning awards",
  },
];

export const aboutPersonalDetails = [
  {
    id: 1,
    abouttitle: "Captivating ",
    abouttitleone: "stories",
    abouttitletwo: " birth magnificent designs.",
    aboutdesc:
      "2 years ago, I began freelancing as a developer. Since then, I've done remote work for agencies, consulted for startups, and collaborated on digital products for business and consumer use.",
  },
];

export const serviceDetails = [
  {
    id: 1,
    title: "My services ",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maiores laboriosam similique inventore quisquam eveniet dolores sit, corrupti eius voluptate.",
  },
];

export const workDetails = [
  {
    id: 1,
    title: "My work ",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maiores laboriosam similique inventore quisquam eveniet dolores sit, corrupti eius voluptate.",
  },
];

export const contactData = [
  {
    icon: (
      <BsArrowRight className="absolute -translate-y-[120%] text-[22px] opacity-0 transition-all duration-300 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100" />
    ),
    text: "Let's talk",
  },
];

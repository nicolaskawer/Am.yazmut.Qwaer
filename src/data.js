import {
  FaTools,
  FaLightbulb,
  FaHandsHelping,
  FaCheckCircle,
  FaClock,
  FaDraftingCompass,
  FaUserFriends,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaHome,
  FaBuilding,
} from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import {
  blog1,
  blog2,
  blog3,
  member1,
  member2,
  member3,
  member4,
  member5,
  member6,
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  user1,
  user2,
  user3,
  user4,
} from "./assets";

export const navigations = [
  {
    label: "About Us",
    to: "about",
  },
  {
    label: "Services",
    to: "services",
  },
  {
    label: "Portfolio",
    to: "portfolio",
  },
  {
    label: "Team",
    to: "team",
  },
  {
    label: "Testimonials",
    to: "testimonials",
  },
  {
    label: "Contact Us",
    to: "contact",
  },
];

export const keypoints = [
  {
    icon: <FaTools />,
    title: "אומנות מומחית",
  },
  {
    icon: <FaRegClock />,
    title:"בזמן, במסגרת התקציב ",
  },
  {
    icon: <FaLightbulb />,
    title: "פתרונות חדשניים",
  },
  {
    icon: <FaHandsHelping />,
    title: "גישה ממוקדת ללקוח",
  },
];

export const whyChooseUs = [
  {
    title: "איכות ללא תחרות",
    icon: <FaCheckCircle />,
    description: "אומנות מובטחת",
  },
  {
    title: "אספקה ​​בזמן",
    icon: <FaClock />,
    description: "פרויקטים שהושלמו על פי לוח הזמנים",
  },
  {
    title: "עיצובים חדשניים",
    icon: <FaDraftingCompass />,
    description: "פתרונות יצירתיים ומודרניים",
  },
  {
    title: "שירות ממוקד",
    icon: <FaUserFriends />,
    description: "מתן עדיפות לשביעות רצון הלקוח תמיד",
  },
];

export const services = [
  {
    title: "Residential Construction",
    icon: <FaHome />,
    description: `Building modern, high-quality homes tailored to your vision.`,
  },
  {
    title: "Commercial Projects",
    icon: <FaBuilding />,
    description: `Developing functional, innovative commercial spaces for businesses.`,
  },
  {
    title: "Renovation & Remodeling",
    icon: <FaTools />,
    description: `Transforming existing spaces with expert renovation and design.`,
  },
];

export const portfolio = [
  {
    title: "Luxury Residential Home",
    image: portfolio1,
    date: "May 15, 2023",
    category: "Residential",
    description: `A stunning 5-bedroom luxury home featuring contemporary architecture, floor-to-ceiling windows, and open-concept living spaces. Built with premium materials and high-end finishes to create a modern yet cozy atmosphere.`,
  },
  {
    title: "Corporate Office Building",
    image: portfolio2,
    date: "November 30, 2022",
    category: "Commercial",
    description: `A state-of-the-art office building designed to foster innovation and collaboration. This project includes eco-friendly materials, expansive workspaces, and cutting-edge conference rooms.`,
  },
  {
    title: "Retail Shopping Complex",
    image: portfolio3,
    date: "July 12, 2024",
    category: "Retail",
    description: `A bustling multi-level shopping complex offering retail spaces for international brands. The complex features stylish interiors, escalators, and vibrant common areas, perfect for customer engagement.`,
  },
  {
    title: "Luxury Resort & Spa",
    image: portfolio4,
    date: "February 1, 2023",
    category: "Hospitality",
    description: `A 5-star luxury resort and spa set in a tropical paradise. The project includes infinity pools, private villas, and a wellness center, designed with natural materials to blend seamlessly with the surrounding environment.`,
  },
  {
    title: "High-Rise Residential Complex",
    image: portfolio5,
    date: "September 18, 2023",
    category: "Residential",
    description: `A contemporary high-rise residential building featuring 100+ modern apartments. This urban living space includes a rooftop terrace, fitness center, and private balconies with city views.`,
  },
  {
    title: "Industrial Warehouse Facility",
    image: portfolio6,
    date: "March 5, 2022",
    category: "Industrial",
    description: `A large-scale industrial warehouse designed for efficient logistics and operations. Featuring high ceilings, wide loading docks, and ample storage space, this project was built to optimize business workflows.`,
  },
];

export const teamMembers = [
  {
    fullName: "Chinedu Okafor",
    image: member1,
    title: "Lead Architect",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
  {
    fullName: "Aisha Ibrahim",
    image: member2,
    title: "Senior Project Manager",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
  {
    fullName: "Emmanuel Adeoye",
    image: member3,
    title: "Chief Engineer",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
  {
    fullName: "Ngozi Eze",
    image: member4,
    title: "Construction Planner",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
  {
    fullName: "Tunde Afolabi",
    image: member5,
    title: "Site Supervisor",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
  {
    fullName: "Sonia Olufemi",
    image: member6,
    title: "Design Coordinator",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
];

export const testimonials = [
  {
    name: "Folake Adekunle",
    image: user1,
    review: `The team at Confix exceeded our expectations. Their attention to detail and professionalism made our home renovation a smooth and enjoyable process.`,
  },
  {
    name: "Jide Akinwale",
    image: user2,
    review: `From start to finish, the project was handled with incredible skill and efficiency. I highly recommend Confix for any construction needs.`,
  },
  {
    name: "Chiamaka Nwachukwu",
    image: user3,
    review: `Working with Confix was a fantastic experience. Their team was professional, creative, and committed to delivering exactly what we envisioned.`,
  },
  {
    name: "Tunde Balogun",
    image: user4,
    review: `Exceptional service and quality workmanship! Confix transformed our industrial space efficiently and effectively. They are true professionals.`,
  },
];

export const blogs = [
  {
    title: "Innovative Construction Trends for 2024",
    content: `Discover the latest trends in construction for 2024, from sustainable building practices to cutting-edge technologies transforming the industry.`,
    image: blog1,
  },
  {
    title: "The Importance of Sustainable Building Materials",
    content: `Learn why using sustainable building materials is crucial for environmental protection and how it benefits both the project and the community.`,
    image: blog2,
  },
  {
    title: "Top Tips for Effective Project Management",
    content: `Explore essential tips for managing construction projects efficiently, including scheduling, budgeting, and communication strategies.`,
    image: blog3,
  },
];

export const footer = [
  {
    title: "Company",
    routes: [
      {
        name: "About Us",
        href: "#",
      },
      {
        name: "Our Team",
        href: "#",
      },
      {
        name: "Careers",
        href: "#",
      },
      {
        name: "Contact Us",
        href: "#",
      },
    ],
  },
  {
    title: "Services",
    routes: [
      {
        name: "Residential Construction",
        href: "#",
      },
      {
        name: "Commercial Projects",
        href: "#",
      },
      {
        name: "Renovation & Remodeling",
        href: "#",
      },
      {
        name: "Project Management",
        href: "#",
      },
    ],
  },
  {
    title: "Resources",
    routes: [
      {
        name: "Blog",
        href: "#",
      },
      {
        name: "Case Studies",
        href: "#",
      },
      {
        name: "FAQs",
        href: "#",
      },
      {
        name: "Privacy Policy",
        href: "#",
      },
    ],
  },
];

export const socialHandles = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com",
  },
  /*{
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com",
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
  */
];

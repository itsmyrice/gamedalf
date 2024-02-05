import { TbWorldWww } from "react-icons/tb";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const profiles = [
  {
    name: "Oguz Kabasakal",
    position: "Web Developer | Audio Engineer",
    bio: " Developing by day, slaying demons by night.",
    imageUrl: "/images/oguz.jpg",
    socialNetworks: [
      {
        icon: <TbWorldWww />,
        link: "https://www.oguzkabasakal.com/",
      },
      {
        icon: <FaGithub />,
        link: "https://github.com/kabaskill",
      },
      {
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/oguzkabasakal/",
      },
      {
        icon: <FaInstagram />,
        link: "https://www.instagram.com/mr.kabaskill/",
      },
    ],
  },
  {
    name: "Kristian Kenjeres",
    position: "Web Developer | Instagram Influencer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero doloremque reprehenderit!!.",
    imageUrl: "/images/pirate.jpg",
    socialNetworks: [
      {
        icon: <TbWorldWww />,
        link: "https://www.kenjeres.com/",
      },
      {
        icon: <FaGithub />,
        link: "https://github.com/kkenjeres",
      },
      {
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/kristiankenjeres/",
      },
      {
        icon: <FaInstagram />,
        link: "https://www.instagram.com/kristiankenjeres/",
      },
    ],
  },
  {
    name: "Glory Ann Conwi",
    position: "Web Developer | Sales Assistant",
    bio: "Game don't make you violent, lag does",
    imageUrl: "/images/glory.jpg",
    socialNetworks: [
      {
        icon: <FaGithub />,
        link: "https://github.com/itsmyrice",
      },
      {
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/glory-ann-conwi-04409129a/",
      },
      {
        icon: <FaInstagram />,
        link: "https://www.instagram.com/glrynn93/",
      },
    ],
  },
];

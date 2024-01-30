import Image from "next/image";

export const techStacks = [
    {
      imageUrl: "/images/js.jpg",
      name: "javascript",
    },
    {
      imageUrl: "/images/react.jpg",
      name: "react",
    },
    {
      imageUrl: "/images/git.jpg",
      name: "git",
    },
    {
      imageUrl: "/images/nextjs.jpg",
      name: "nextjs",
    },
    {
      imageUrl: "/images/styled.jpg",
      name: "styled-component",
    },
    {
      imageUrl: "/images/useswr.jpg",
      name: "useswr",
    },
    {
      imageUrl: "/images/mongodb.jpg",
      name: "mongodb",
    },
  ];

export default function TechStack({ imageUrl, name }) {
  return <Image src={imageUrl} width={50} height={50} alt={name} />;
}
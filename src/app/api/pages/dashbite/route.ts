import { NextResponse } from "next/server"

const dashbitePageData = {
  title: "Building DashBite: A Full-Stack Journey into Food Delivery Tech",
  labels: "Full Stack",
  figma:
    "https://www.figma.com/design/ePJKy9WwFZHbdFNJD9kmaT/DashBite?node-id=4515-4834&p=f&t=QHXTgX0ndHuhfDb1-0",
  github: "https://github.com/MariahSunilAlexiose/dashbite",
  tools: [
    {
      id: 1,
      name: "ReactJS",
      image: "reactjs.svg",
      category: "frontend",
    },
    {
      id: 2,
      name: "TailwindCSS",
      image: "tailwindcss.svg",
      category: "frontend",
    },
    {
      id: 3,
      name: "NodeJS",
      image: "nodejs.svg",
      category: "backend",
    },
    {
      id: 4,
      name: "Express",
      image: "express.svg",
      category: "backend",
    },
    {
      id: 5,
      name: "MongoDB",
      image: "mongodb.svg",
      category: "storage",
    },
    {
      id: 6,
      name: "Nodemon",
      image: "nodemon.svg",
      category: "workflow",
    },
    {
      id: 7,
      name: "Stripe",
      image: "stripe.svg",
      category: "backend",
    },
    {
      id: 8,
      name: "JWT",
      image: "jwt.svg",
      category: "backend",
    },
    {
      id: 9,
      name: "ViteJS",
      image: "vitejs.svg",
      category: "workflow",
    },
    {
      id: 10,
      name: "Eslint",
      image: "eslint.svg",
      category: "workflow",
    },
    {
      id: 11,
      name: "Axios",
      image: "axios.svg",
      category: "backend",
    },
    {
      id: 12,
      name: "Prettier",
      image: "prettier.svg",
      category: "workflow",
    },
    {
      id: 13,
      name: "Husky",
      image: "husky-black.svg",
      imageWhite: "husky-white.svg",
      category: "workflow",
    },
    {
      id: 14,
      name: "Lint-Staged",
      image: "lintstaged.svg",
      category: "workflow",
    },
  ],
}

export async function GET() {
  return NextResponse.json(dashbitePageData)
}

import { NextResponse } from "next/server"

const profilePageData = {
  title:
    "Building This Profile Website with Next.js, Tailwind CSS & Jira: A Behind-the-Scenes Look",
  labels: "Typescript",
  figma:
    "https://www.figma.com/design/BjLOPBUvl7Ktx1aEytV2fX/My-Portfolio?node-id=4515-4834&p=f&t=8PONlaX640QnStlJ-0",
  github: "https://github.com/MariahSunilAlexiose/portfolio",
  tools: [
    {
      id: 1,
      name: "NextJS",
      image: "nextjs-black.svg",
      imageWhite: "nextjs-white.svg",
      category: "frontend",
    },
    {
      id: 2,
      name: "ReactJS",
      image: "reactjs.svg",
      category: "frontend",
    },
    {
      id: 3,
      name: "TailwindCSS",
      image: "tailwindcss.svg",
      category: "frontend",
    },
    {
      id: 4,
      name: "PostCSS",
      image: "postcss.svg",
      category: "workflow",
    },
    {
      id: 5,
      name: "Eslint",
      image: "eslint.svg",
      category: "workflow",
    },
    {
      id: 6,
      name: "Prettier",
      image: "prettier.svg",
      category: "workflow",
    },
    {
      id: 7,
      name: "Husky",
      image: "husky-black.svg",
      imageWhite: "husky-white.svg",
      category: "workflow",
    },
    {
      id: 8,
      name: "Lint-Staged",
      image: "lintstaged.svg",
      category: "workflow",
    },
  ],
}

export async function GET() {
  return NextResponse.json(profilePageData)
}

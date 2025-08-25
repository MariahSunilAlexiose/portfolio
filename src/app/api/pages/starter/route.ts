import { NextResponse } from "next/server"

const starterPageData = {
  title:
    "The Ultimate Starter Stack: TypeScript, React, Next.js & Tailwind CSS",
  labels: "Typescript",
  figma:
    "https://www.figma.com/design/VmhZjYKsAIwCVOsv9TTSJL/Template?node-id=2-27&p=f&t=xNRSRhSGvJgOB5oi-0",
  github: "https://github.com/MariahSunilAlexiose/starter",
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
      name: "PostCSS",
      image: "postcss.svg",
      category: "workflow",
    },
    {
      id: 4,
      name: "Prettier",
      image: "prettier.svg",
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
      name: "Husky",
      image: "husky-black.svg",
      imageWhite: "husky-white.svg",
      category: "workflow",
    },
    {
      id: 7,
      name: "Lint-Staged",
      image: "lintstaged.svg",
      category: "workflow",
    },
  ],
}

export async function GET() {
  return NextResponse.json(starterPageData)
}

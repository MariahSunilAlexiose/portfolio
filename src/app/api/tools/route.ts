import { NextResponse } from "next/server"

const toolsData = [
  {
    id: 1,
    name: "ReactJS",
    image: "reactjs.svg",
    category: "frontend",
  },
  {
    id: 2,
    name: "NextJS",
    image: "nextjs-black.svg",
    imageWhite: "nextjs-white.svg",
    category: "frontend",
  },
  { id: 3, name: "Redux", image: "redux.svg", category: "frontend" },
  {
    id: 4,
    name: "TailwindCSS",
    image: "tailwindcss.svg",
    category: "frontend",
  },
  {
    id: 5,
    name: "Bootstrap",
    image: "bootstrap.svg",
    category: "frontend",
  },
  {
    id: 6,
    name: "MaterialUI",
    image: "materialui.svg",
    category: "frontend",
  },

  { id: 7, name: "NodeJS", image: "nodejs.svg", category: "backend" },
  {
    id: 8,
    name: "Flask",
    image: "flask-black.svg",
    imageWhite: "flask-white.svg",
    category: "backend",
  },
  { id: 9, name: "Tomcat", image: "tomcat.svg", category: "backend" },
  {
    id: 10,
    name: "Express",
    image: "express.svg",
    category: "backend",
  },

  { id: 11, name: "MySQL", image: "mysql.svg", category: "storage" },
  {
    id: 12,
    name: "PostgreSQL",
    image: "postgresql.svg",
    category: "storage",
  },
  {
    id: 13,
    name: "MongoDB",
    image: "mongodb.svg",
    category: "storage",
  },
  {
    id: 14,
    name: "Firebase",
    image: "firebase.svg",
    category: "storage",
  },

  {
    id: 15,
    name: "Eslint",
    image: "eslint.svg",
    category: "workflow",
  },
  {
    id: 16,
    name: "Prettier",
    image: "prettier.svg",
    category: "workflow",
  },
  {
    id: 17,
    name: "Lint-Staged",
    image: "lintstaged.svg",
    category: "workflow",
  },
  { id: 18, name: "NPM", image: "npm.svg", category: "workflow" },
  {
    id: 19,
    name: "Husky",
    image: "husky-black.svg",
    imageWhite: "husky-white.svg",
    category: "workflow",
  },

  {
    id: 20,
    name: "Git",
    image: "git.svg",
    category: "design",
  },
  {
    id: 21,
    name: "VSCode",
    image: "vscode.svg",
    category: "design",
  },
  {
    id: 22,
    name: "Visual Studio",
    image: "vs.svg",
    category: "design",
  },

  {
    id: 23,
    name: "Figma",
    image: "figma.svg",
    category: "design",
  },
  {
    id: 24,
    name: "Photoshop",
    image: "photoshop.svg",
    category: "design",
  },

  {
    id: 25,
    name: "Jira",
    image: "jira.svg",
    category: "collaboration",
  },
  {
    id: 26,
    name: "Notion",
    image: "notion-black.svg",
    imageWhite: "notion-white.svg",
    category: "collaboration",
  },
]

export async function GET() {
  return NextResponse.json(toolsData)
}

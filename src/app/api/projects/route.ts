import { NextResponse } from "next/server"

const projectsData = [
  {
    id: "1",
    title:
      "The Ultimate Starter Stack: TypeScript, React, Next.js & Tailwind CSS",
    image: "starter-card.png",
    labels: "Typescript",
    page: "/projects/starter",
  },
  {
    id: "2",
    title: "Building DashBite: A Full-Stack Journey into Food Delivery Tech",
    image: "dashbite-card.png",
    labels: "Full Stack",
    page: "/projects/dashbite",
  },
  {
    id: "3",
    title:
      "Building This Profile Website with Next.js, Tailwind CSS & Jira: A Behind-the-Scenes Look",
    image: "profile-card.png",
    labels: "Typescript",
    page: "/projects/profile",
  },
]

export async function GET() {
  return NextResponse.json(projectsData)
}

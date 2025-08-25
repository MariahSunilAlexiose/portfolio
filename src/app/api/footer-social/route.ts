import { NextResponse } from "next/server"

const footerSocialMediaData = [
  {
    imageWhite: "linkedin-white.svg",
    imageBlack: "linkedin-black.svg",
    alt: "Linkedin Logo",
    link: "https://www.linkedin.com/in/mariah-sunil-alexiose-841464336/",
  },
  {
    imageWhite: "figma-white.svg",
    imageBlack: "figma-black.svg",
    alt: "Figma Logo",
    link: "https://www.figma.com/@mariah24",
  },
  {
    imageWhite: "github-white.svg",
    imageBlack: "github-black.svg",
    alt: "Github Logo",
    link: "https://github.com/MariahSunilAlexiose",
  },
  {
    imageWhite: "notion-white.svg",
    imageBlack: "notion-black.svg",
    alt: "Notion Logo",
    link: "",
  },
]

export async function GET() {
  return NextResponse.json(footerSocialMediaData)
}

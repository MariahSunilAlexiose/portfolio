import { StaticImport } from "next/dist/shared/lib/get-img-props"

/* eslint-disable */
export type ButtonProps = {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "accent"
    | "primary"
    | "link"
    | "success"
    | "ghost"
  size?: "default" | "xs" | "sm" | "lg" | "icon"
  children: React.ReactNode
  type?: "submit" | "reset" | "button"
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
/* eslint-enable */

export type FooterSocialMediaProps = {
  imageWhite: string
  imageBlack: string
  alt: string
  link: string
}

export type IconType = {
  img: StaticImport
  name: string
}

export type ProjectType = {
  id: string
  title: string
  image: string
  labels: string
}

export type BreakpointSizeType = "xs" | "sm" | "lg" | "xl"

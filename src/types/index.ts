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
  size?: "default" | "sm" | "lg" | "icon"
  children: React.ReactNode
  type?: "submit" | "reset" | "button"
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
/* eslint-enable */

export type FooterSocialMediaProps = {
  image: string
  alt: string
  link: string
}

export type IconType = {
  img: StaticImport
  name: string
}

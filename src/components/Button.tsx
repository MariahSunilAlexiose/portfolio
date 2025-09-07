"use client"

import { ButtonVariants } from "@/constants"

const Button = ({
  variant = "default",
  size = "default",
  children,
  type = "button",
  className,
  onClick,
}: {
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
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void // eslint-disable-line no-unused-vars
}) => {
  return (
    <button
      type={type}
      className={`${className} ${ButtonVariants.variant[variant]} ${ButtonVariants.size[size]} focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center rounded-md text-sm font-medium whitespace-nowrap transition-colors duration-300 ease-out focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button

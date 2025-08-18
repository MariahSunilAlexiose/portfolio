"use client"

import { ButtonVariants } from "@/constants"
import { ButtonProps } from "@/types"

const Button = ({
  variant = "default",
  size = "default",
  children,
  type = "button",
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${className} ${ButtonVariants.variant[variant]} ${ButtonVariants.size[size]} inline-flex cursor-pointer items-center justify-center rounded-md text-sm font-medium whitespace-nowrap transition-colors duration-300 ease-out focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button

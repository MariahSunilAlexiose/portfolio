"use client"

import Image from "next/image"

import { dark, light } from "@/context"
import { useTheme } from "@/providers"

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  // eslint-disable-next-line no-unused-vars
  const toggleTheme = () => {
    setTheme(theme === dark ? light : dark)
  }

  return (
    <header className="bg-background">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <Image
              className="h-8 w-auto"
              src="/favicon.ico"
              alt="Vercel Icon"
              width={10}
              height={10}
            />
          </a>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-foreground"
          >
            About Me
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

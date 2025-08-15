"use client"

import Image from "next/image"

import { dark, light } from "@/context"
import { useTheme } from "@/providers"

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === dark ? light : dark)
  }

  return (
    <header>
      <nav className="my-8 flex items-center bg-foreground rounded-full justify-between px-6 py-2 md:px-14 md:py-[14px] lg:px-15 lg:py-[17.5px] xl:px-16 xl:py-7">
        <a href="/">
          <Image
            src={
              theme === dark
                ? "/assets/icons/logo-black.svg"
                : "/assets/icons/logo-white.svg"
            }
            alt="My Portfolio Logo"
            width={62}
            height={12}
            className="w-16 h-3 md:w-[77px] md:h-5 lg:w-28 lg:h-6 xl:w-[152px] xl:h-8"
          />
        </a>

        <div className="flex gap-7 items-center">
          <a
            href="/about-me"
            className="text-xs md:text-sm lg:text-base xl:text-xl font-bold text-background font-sf_display"
          >
            About Me
          </a>
          <button onClick={toggleTheme}>
            <Image
              src={
                theme === dark
                  ? "/assets/icons/sun-black.svg"
                  : "/assets/icons/moon-white.svg"
              }
              alt="My Portfolio Logo"
              className="w-4 md:w-5 lg:w-6 xl:w-8"
              width={15}
              height={15}
            />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

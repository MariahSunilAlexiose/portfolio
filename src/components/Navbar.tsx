"use client"

import Image from "next/image"
import Link from "next/link"

import { dark, light } from "@/context"
import { useTheme } from "@/providers"

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === dark ? light : dark)
  }

  return (
    <header>
      <nav className="flex items-center justify-between rounded-full bg-foreground px-6 py-2 md:px-14 md:py-[14px] lg:px-15 lg:py-[17.5px] xl:px-16 xl:py-7">
        <Link href="/">
          <Image
            src={
              theme === dark
                ? "/assets/icons/logo-black.svg"
                : "/assets/icons/logo-white.svg"
            }
            alt="My Portfolio Logo"
            width={62}
            height={12}
            className="h-3 w-16 md:h-5 md:w-[77px] lg:h-6 lg:w-28 xl:h-8 xl:w-[152px]"
          />
        </Link>

        <div className="flex items-center gap-7">
          <a
            href="/about-me"
            className="font-sf-display text-xs font-bold text-background md:text-sm lg:text-base xl:text-xl"
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

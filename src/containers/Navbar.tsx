"use client"

import { useEffect, useState } from "react"

import Image from "next/image"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components"
import { dark, light } from "@/context"
import { useTheme } from "@/providers"

import Skeleton from "../components/Skeleton"

const Navbar = () => {
  const [loading, setLoading] = useState(true)
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === dark ? light : dark)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return loading ? (
    <Skeleton className="!rounded-full w-full h-20" />
  ) : (
    <header className="">
      <NavigationMenu className="bg-foreground flex items-center justify-between rounded-full px-6 py-2 md:px-14 md:py-[14px] lg:px-15 lg:py-[17.5px] xl:px-16 xl:py-7">
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

        <NavigationMenuList className="flex items-center gap-7">
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link
                href="/about-me"
                className="text-background text-xs font-bold md:text-sm lg:text-base xl:text-xl"
              >
                About Me
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <button onClick={toggleTheme} className="cursor-pointer">
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
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

export default Navbar

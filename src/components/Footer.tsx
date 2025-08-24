"use client"

import { useEffect, useState } from "react"

import Image from "next/image"

import { dark } from "@/context"
import { CopyrightIcon } from "@/icons"
import { useTheme } from "@/providers"
import { fetchData } from "@/scripts/useFetchData"
import { FooterSocialMediaProps } from "@/types"

import Button from "./Button"

const Footer = () => {
  const { theme } = useTheme()
  const [icons, setIcons] = useState<FooterSocialMediaProps[]>([])
  useEffect(() => {
    const fetchOptions = async () => {
      const newIcon =
        await fetchData<FooterSocialMediaProps[]>("footerSocialMedia")
      setIcons(newIcon)
    }
    fetchOptions()
  }, [])
  return (
    <footer>
      <div className="flex justify-between">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-xs md:text-sm lg:text-base xl:text-lg">
            Copyright
          </p>
          <Image
            src={CopyrightIcon}
            alt="copyright sign"
            className="h-4 w-auto"
            width={10}
            height={10}
          />
          <p className="text-xs md:text-sm lg:text-base xl:text-lg">
            2025 Mariah Sunil Alexiose
          </p>
        </div>
        <div className="flex gap-2 md:gap-5 xl:gap-[18px]">
          {icons.map((icon) => (
            <Button
              key={icon.alt}
              onClick={() => (window.location.href = icon.link)}
              className="rounded-full!"
            >
              <Image
                src={
                  theme === dark
                    ? `/assets/icons/${icon.imageBlack}`
                    : `/assets/icons/${icon.imageWhite}`
                }
                alt={icon.alt}
                width={12}
                height={12}
                className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6"
              />
            </Button>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer

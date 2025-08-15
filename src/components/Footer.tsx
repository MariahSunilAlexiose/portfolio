"use client"

import { useEffect, useState } from "react"

import Image from "next/image"

import { CopyrightIcon } from "@/icons"
import { fetchData } from "@/scripts/useFetchData"
import { FooterSocialMediaProps } from "@/types"

import Button from "./Button"

const Footer = () => {
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
        <div className="flex items-center justify-start gap-2">
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
              className="bg-foreground rounded-full!"
            >
              <Image
                src={`/assets/icons/${icon.image}`}
                alt={icon.alt}
                width={12}
                height={12}
                className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
              />
            </Button>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer

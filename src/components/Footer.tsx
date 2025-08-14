"use client"

import { useEffect, useState } from "react"

import Image from "next/image"

import { CopyrightIcon } from "@/icons"
import { fetchData } from "@/scripts/useFetchData"
import { SocialMediaProps } from "@/types"

const Footer = () => {
  const [icons, setIcons] = useState<SocialMediaProps[]>([])
  useEffect(() => {
    const fetchOptions = async () => {
      const newIcon = await fetchData<SocialMediaProps[]>("socialMedia")
      setIcons(newIcon)
    }
    fetchOptions()
  }, [])
  return (
    <footer className="mx-auto mt-72 max-w-[1440px] p-10 text-foreground">
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start"></div>
      </div>

      <div className="mt-24 flex justify-between max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 cursor-pointer items-center justify-start gap-2">
          <Image
            src={CopyrightIcon}
            alt="copyright sign"
            className="-my-3 h-4 w-auto rounded-full"
            width={10}
            height={10}
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <div className="mt-8 flex items-center gap-5">
          {icons.map((icon) => (
            <div
              className="flex h-12 w-12 cursor-pointer items-center justify-center hover:-translate-y-1 hover:transition"
              key={icon.alt}
            >
              <Image
                src={`/assets/icons/${icon.image}`}
                alt={icon.alt}
                width={10}
                height={10}
                className="h-8 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer

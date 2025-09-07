"use client"

import { useEffect, useState } from "react"

import Image, { StaticImageData } from "next/image"

import { useResponsiveSize } from "@/utils"

import Button from "./Button"
import Skeleton from "./Skeleton"

const IconInputBox = ({
  imgSrc,
  imgAlt,
  inputType,
  inputPlaceholder,
  buttonText,
}: {
  imgSrc: StaticImageData
  imgAlt: string
  inputType: string
  inputPlaceholder: string
  buttonText: string
}) => {
  const size = useResponsiveSize()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])
  return loading ? (
    <Skeleton className="w-full lg:h-10 h-8" />
  ) : (
    <div className="border-muted-foreground flex items-center justify-between rounded-full border px-4 py-1 md:py-2 lg:py-4 xl:py-3">
      <div className="flex items-center gap-2 md:gap-3">
        <Button className="bg-accent flex items-center !rounded-full p-2">
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={5}
            height={10}
            className="h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7"
          />
        </Button>
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          className="md:text-md flex w-full rounded-md border-none bg-transparent px-3 text-xs focus:ring-0 focus:outline-none sm:text-sm lg:text-lg xl:text-xl"
        />
      </div>
      <Button
        variant="primary"
        size={size === "xl" ? "lg" : size}
        className="!rounded-full md:text-base xl:text-xl"
      >
        {buttonText}
      </Button>
    </div>
  )
}

export default IconInputBox

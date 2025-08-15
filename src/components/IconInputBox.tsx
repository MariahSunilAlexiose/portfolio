"use client"

import { useEffect, useState } from "react"

import Image from "next/image"

import { EnvelopeIcon } from "@/icons"

import Button from "./Button"

const getSize = (width: number): "xs" | "sm" | "lg" => {
  if (width >= 1024) return "lg"
  if (width >= 768) return "sm"
  return "xs"
}

const InputBox = () => {
  const [size, setSize] = useState<"xs" | "sm" | "lg">(() =>
    getSize(window.innerWidth)
  )

  useEffect(() => {
    const handler = () => setSize(getSize(window.innerWidth))
    window.addEventListener("resize", handler)
    return () => window.removeEventListener("resize", handler)
  }, [])

  console.log(size)

  return (
    <div className="flex justify-between items-center border border-muted-foreground rounded-full px-4 py-1 md:py-2 lg:py-4 xl:py-3">
      <div className="flex gap-2 items-center md:gap-3">
        <Button
          // size="icon"
          className="items-center flex p-2 bg-accent !rounded-full"
        >
          <Image
            src={EnvelopeIcon}
            alt="Envelope Icon"
            width={5}
            height={10}
            className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
          />
        </Button>
        <input
          type="email"
          placeholder="Enter Email Address"
          className="flex w-full rounded-md text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl bg-transparent px-3 focus:outline-none focus:ring-0 border-none"
        />
      </div>
      <Button
        variant="primary"
        size={size}
        className="!rounded-full md:text-base xl:text-xl"
      >
        Send
      </Button>
    </div>
  )
}

export default InputBox

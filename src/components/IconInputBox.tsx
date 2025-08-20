"use client"

import Image from "next/image"

import { EnvelopeIcon } from "@/icons"
import { useResponsiveSize } from "@/utils"

import Button from "./Button"

const IconInputBox = () => {
  const size = useResponsiveSize()

  return (
    <div className="border-muted-foreground flex items-center justify-between rounded-full border px-4 py-1 md:py-2 lg:py-4 xl:py-3">
      <div className="flex items-center gap-2 md:gap-3">
        <Button
          // size="icon"
          className="bg-accent flex items-center !rounded-full p-2"
        >
          <Image
            src={EnvelopeIcon}
            alt="Envelope Icon"
            width={5}
            height={10}
            className="h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7"
          />
        </Button>
        <input
          type="email"
          placeholder="Enter Email Address"
          className="md:text-md flex w-full rounded-md border-none bg-transparent px-3 text-xs focus:ring-0 focus:outline-none sm:text-sm lg:text-lg xl:text-xl"
        />
      </div>
      <Button
        variant="primary"
        size={size === "xl" ? "lg" : size}
        className="!rounded-full md:text-base xl:text-xl"
      >
        Send
      </Button>
    </div>
  )
}

export default IconInputBox

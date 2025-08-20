import React from "react"

import { Button } from "@/components"

type Props = {}

const Header = ({}: Props) => {
  return (
    <div className="flex flex-col items-center gap-2.5 h-[156px] md:h-[254px] lg:h-[431px]">
      <Button
        variant="outline"
        className="md:text-base lg:text-xl xl:text-2xl !rounded-full"
      >
        Hello!
      </Button>
      <h1 className="text-center">
        I&apos;m <span className="text-primary">Mariah</span>, a Full Stack
        Developer
      </h1>
    </div>
  )
}

export default Header

import React from "react"

import { Button } from "@/components"

const Header = () => {
  return (
    <div className="flex h-[156px] flex-col items-center gap-2.5 md:h-[254px] lg:h-[431px]">
      <Button
        variant="outline"
        className="!rounded-full md:text-base lg:text-xl xl:text-2xl"
      >
        Hello!
      </Button>
      <span className="large text-center">
        I&apos;m <span className="text-primary">Mariah</span>, a Full Stack
        Developer
      </span>
    </div>
  )
}

export default Header

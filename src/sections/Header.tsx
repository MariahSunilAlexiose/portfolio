import React from "react"

import { Button } from "@/components"

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-2.5 h-[156px] md:h-[254px] lg:h-[431px]">
      <Button
        variant="outline"
        className="md:text-base lg:text-xl xl:text-2xl !rounded-full"
      >
        Hello!
      </Button>
      <span className="text-center large">
        I&apos;m <span className="text-primary">Mariah</span>, a Full Stack
        Developer
      </span>
    </div>
  )
}

export default Header

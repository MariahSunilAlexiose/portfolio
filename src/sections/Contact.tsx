import React from "react"

import { IconInputBox } from "@/components"

const Contact = () => {
  return (
    <div className="flex flex-col gap-3 py-9 md:gap-7 md:py-5 lg:py-13">
      <span className="text-xl font-semibold text-muted-foreground md:text-4xl lg:text-5xl xl:text-6xl text-center">
        Got a project idea or just want to <br /> chat?{" "}
        <span className="text-primary">Let&apos;s Talk</span>
      </span>
      <IconInputBox />
    </div>
  )
}

export default Contact

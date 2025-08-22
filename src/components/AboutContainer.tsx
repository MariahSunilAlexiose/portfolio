import React from "react"

import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

type Props = {
  icon: StaticImport
  title: string
  description: string
}

const AboutContainer = ({ icon, title, description }: Props) => {
  return (
    <div
      className="flex flex-col gap-3.5 p-5 cursor-pointer h-full rounded-xl hover:drop-shadow-lg w-48 shadow-foreground bg-accent stroke-muted-foreground"
      style={{ boxShadow: "0 4px 4px rgba(100, 100, 100, 0.3)" }}
    >
      <Image src={icon} alt="title" width={28} height={28} />
      <p className="text-xl font-semibold">{title}</p>
      <span className="text-base font-thin">{description}</span>
    </div>
  )
}

export default AboutContainer

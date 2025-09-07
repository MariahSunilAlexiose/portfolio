import { useEffect, useState } from "react"

import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

import Skeleton from "./Skeleton"

const AboutContainer = ({
  icon,
  title,
  description,
}: {
  icon: StaticImport
  title: string
  description: string
}) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])
  return loading ? (
    <Skeleton className="h-full w-48" />
  ) : (
    <div
      className="shadow-foreground bg-accent stroke-muted-foreground flex h-full w-48 cursor-pointer flex-col gap-3.5 rounded-xl p-5 hover:drop-shadow-lg"
      style={{ boxShadow: "0 4px 4px rgba(100, 100, 100, 0.3)" }}
    >
      <Image src={icon} alt="title" width={28} height={28} />
      <p className="text-xl font-semibold">{title}</p>
      <span className="text-base font-thin">{description}</span>
    </div>
  )
}

export default AboutContainer

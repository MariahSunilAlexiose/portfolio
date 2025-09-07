"use client"

import { useEffect, useState } from "react"

import { Button, Skeleton } from "@/components"

const Header = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return loading ? (
    <>
      <Skeleton className="!rounded-full h-9 w-24" />
      <Skeleton className="!rounded-full h-6 w-full md:h-12 lg:h-16 xl:h-24" />
    </>
  ) : (
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

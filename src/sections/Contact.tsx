"use client"

import React, { useEffect, useState } from "react"

import { IconInputBox, Skeleton } from "@/components"

const Contact = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="flex flex-col gap-3 py-9 md:gap-7 md:py-5 lg:py-13">
      {loading ? (
        <Skeleton className="h-5 md:h-9 lg:h-12 xl:h-16 w-full" />
      ) : (
        <span className="text-muted-foreground text-center text-xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl">
          Got a project idea or just want to <br /> chat?{" "}
          <span className="text-primary">Let&apos;s Talk</span>
        </span>
      )}
      <IconInputBox />
    </div>
  )
}

export default Contact

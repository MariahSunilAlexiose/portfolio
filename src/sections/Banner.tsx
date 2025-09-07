"use client"

import React, { useEffect, useState } from "react"

import Image from "next/image"

import { Skeleton } from "@/components"
import { BannerImg } from "@/img"

const Banner = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="-mx-14 md:-mx-22 lg:-mx-46">
      <div className="relative h-[53px] md:h-[63px] lg:h-[147px] xl:h-[147px]">
        {loading ? (
          <Skeleton className="h-full w-full" />
        ) : (
          <Image src={BannerImg} alt="Banner Image" className="object-fill" />
        )}
      </div>
    </div>
  )
}

export default Banner

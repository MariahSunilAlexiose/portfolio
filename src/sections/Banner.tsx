import React from "react"

import Image from "next/image"

import { BannerXlImg } from "@/img"

type Props = {}

const Banner = ({}: Props) => {
  return (
    <div className="-mx-14 md:-mx-22 lg:-mx-46">
      <div className="relative h-[53px] md:h-[63px] lg:h-[147px] xl:h-[147px]">
        <Image src={BannerXlImg} alt="Banner Image" className="object-fill" />
      </div>
    </div>
  )
}

export default Banner

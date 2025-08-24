"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

import { dark } from "@/context"
import { ArrowUpRightBlackIcon, ArrowUpRightWhiteIcon } from "@/icons"
import { useTheme } from "@/providers"
import { useResponsiveSize } from "@/utils"

import Button from "./Button"

type Props = {
  title: string
  image: string
  labels: string
  className?: string
  page: string
}

const Card = ({ title, image, labels, className, page }: Props) => {
  const { theme } = useTheme()
  const size = useResponsiveSize()
  const router = useRouter()
  return (
    <div
      className={`flex w-[198px] flex-col gap-3 rounded-4xl md:w-[217px] lg:w-[365px] lg:gap-5 xl:w-[416px] ${className}`}
    >
      <div className="relative w-[198px] md:w-[217px] lg:w-[365px] xl:w-[416px]">
        <div className="h-[198px] md:h-[217px] lg:h-[365px] xl:h-[416px]">
          {/* Image */}
          <Image
            src={`/assets/images/${image}`}
            alt={title}
            fill
            className="object-cover"
            style={{
              clipPath: size === "xl" ? "url(#clipXL)" : "url(#clipRest)",
            }}
          />
        </div>

        {/* Labels on Image */}
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
          {labels &&
            labels.split(";").map((label: string, index: number) => (
              <Button
                key={index}
                className="bg-foreground text-background px-2 py-1 text-xs shadow-md"
              >
                {label.trim()}
              </Button>
            ))}
        </div>

        {/* Arrow Button */}
        <Button
          className="absolute right-0 bottom-0 rounded-full! px-3 lg:px-6 lg:py-9 xl:py-9"
          onClick={() => router.push(page)}
        >
          <Image
            src={theme === dark ? ArrowUpRightBlackIcon : ArrowUpRightWhiteIcon}
            alt="Arrow Up Right Icon"
            className="h-2.5 w-2.5 md:h-4 md:w-4 lg:h-8 lg:w-8"
          />
        </Button>
      </div>

      {/* Title below image */}
      <span className="text-base lg:text-2xl xl:text-3xl">{title}</span>
    </div>
  )
}

export default Card

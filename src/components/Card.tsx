import Image from "next/image"

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
}

const Card = ({ title, image, labels, className }: Props) => {
  const { theme } = useTheme()
  const size = useResponsiveSize()
  return (
    <div
      className={`flex flex-col rounded-4xl xl:w-[416px] lg:w-[365px] md:w-[217px] w-[198px] ${className}`}
    >
      <div className="relative xl:w-[416px] lg:w-[365px] md:w-[217px] w-[198px]">
        <div className="h-[198px] xl:h-[416px] lg:h-[365px] md:h-[217px]">
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
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          {labels &&
            labels.split(";").map((label: string, index: number) => (
              <Button
                key={index}
                className="bg-foreground text-background text-xs px-2 py-1 shadow-md"
              >
                {label.trim()}
              </Button>
            ))}
        </div>

        {/* Arrow Button */}
        <Button className="absolute bottom-0 right-0 px-3 lg:px-6 lg:py-9 xl:py-9 rounded-full!">
          <Image
            src={theme === dark ? ArrowUpRightBlackIcon : ArrowUpRightWhiteIcon}
            alt={title}
            className="w-2.5 h-2.5 md:w-4 md:h-4 lg:w-8 lg:h-8"
          />
        </Button>
      </div>

      {/* Title below image */}
      <h3 className="mt-2 text-sm font-semibold">{title}</h3>
    </div>
  )
}

export default Card

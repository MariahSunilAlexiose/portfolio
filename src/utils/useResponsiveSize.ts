"use client"

import { useEffect, useState } from "react"

import { BREAKPOINTS } from "@/constants"
import { BreakpointSizeType } from "@/types"

const getSize = (width: number): BreakpointSizeType => {
  if (width >= BREAKPOINTS.xl) return "xl"
  if (width >= BREAKPOINTS.lg) return "lg"
  if (width >= BREAKPOINTS.sm) return "sm"
  return "xs"
}

const useResponsiveSize = (): BreakpointSizeType => {
  const [size, setSize] = useState<BreakpointSizeType>(() =>
    getSize(window.innerWidth)
  )

  useEffect(() => {
    const handler = () => setSize(getSize(window.innerWidth))
    window.addEventListener("resize", handler)
    return () => window.removeEventListener("resize", handler)
  }, [])

  return size
}

export default useResponsiveSize

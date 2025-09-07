"use client"

import { useEffect, useState } from "react"

import { BREAKPOINTS } from "@/constants"

type BreakpointSizeType = "xs" | "sm" | "lg" | "xl"

const getSize = (width: number): BreakpointSizeType => {
  if (width >= BREAKPOINTS.xl) return "xl"
  if (width >= BREAKPOINTS.lg) return "lg"
  if (width >= BREAKPOINTS.sm) return "sm"
  return "xs"
}

const useResponsiveSize = (): BreakpointSizeType => {
  const [size, setSize] = useState<BreakpointSizeType>("xs")

  useEffect(() => {
    const updateSize = () => setSize(getSize(window.innerWidth))
    updateSize() // Set initial size after mount
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return size
}

export default useResponsiveSize

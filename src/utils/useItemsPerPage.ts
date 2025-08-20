"use client"

import { useEffect, useState } from "react"

export function useItemsPerPage(): number {
  const [itemsPerPage, setItemsPerPage] = useState(1)

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth

      if (width >= 1440 || (width >= 744 && width <= 1024)) {
        setItemsPerPage(3) // xl & md
      } else if (width >= 1024 || (width > 527 && width < 744)) {
        setItemsPerPage(2) // lg
      } else {
        setItemsPerPage(1) // sm
      }
    }

    updateItemsPerPage()
    window.addEventListener("resize", updateItemsPerPage)
    return () => window.removeEventListener("resize", updateItemsPerPage)
  }, [])

  return itemsPerPage
}

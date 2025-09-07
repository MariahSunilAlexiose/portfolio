"use client"

import { useEffect, useState } from "react"

import Image from "next/image"

import { Button, Skeleton } from "@/components"
import { categoryLabels } from "@/constants"
import { dark } from "@/context"
import { useTheme } from "@/providers"
import { fetchData } from "@/scripts/useFetchData"
import { LogoType } from "@/types"

const Tools = () => {
  const { theme } = useTheme()
  const [logos, setLogos] = useState<LogoType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOptions = async () => {
      const newIcon = await fetchData<LogoType[]>("tools")
      setLogos(newIcon)
    }
    fetchOptions()

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Group logos by category
  const groupedLogos = logos.reduce<Record<string, LogoType[]>>((acc, logo) => {
    const category = logo.category || "uncategorized"
    if (!acc[category]) acc[category] = []
    acc[category].push(logo)
    return acc
  }, {})

  return (
    <div className="space-y-8">
      {Object.entries(groupedLogos).map(([category, logos]) => (
        <div key={category}>
          {loading ? (
            <div className="pb-5">
              <Skeleton className="h-10 w-48" />
            </div>
          ) : (
            <p className="mb-3 text-sm md:text-2xl">
              {categoryLabels[category] || category}:
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-5 md:justify-start">
            {logos.map((logo) =>
              loading ? (
                <Skeleton key={logo.id} className="h-[76px] w-[76px]" />
              ) : (
                <Button key={logo.id} variant="outline" size="icon">
                  <Image
                    src={`/assets/icons/${theme === dark && logo.imageWhite ? logo.imageWhite : logo.image}`}
                    alt={logo.name}
                    width={36}
                    height={36}
                    className="h-9 w-9"
                  />
                </Button>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Tools

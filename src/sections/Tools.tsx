"use client"

import React, { useEffect, useState } from "react"

import Image from "next/image"

import { Button } from "@/components"
import { categoryLabels } from "@/constants"
import { dark } from "@/context"
import { useTheme } from "@/providers"
import { fetchData } from "@/scripts/useFetchData"
import { LogoType } from "@/types"

const Tools = () => {
  const { theme } = useTheme()
  const [logos, setLogos] = useState<LogoType[]>([])

  useEffect(() => {
    const fetchOptions = async () => {
      const newIcon = await fetchData<LogoType[]>("tools")
      setLogos(newIcon)
    }
    fetchOptions()
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
          <p className="text-sm md:text-2xl mb-3">
            {categoryLabels[category] || category}:
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-5 justify-center md:justify-start">
            {logos.map((logo) => (
              <Button key={logo.id} variant="outline" size="icon">
                <Image
                  src={`/assets/icons/${theme === dark && logo.imageWhite ? logo.imageWhite : logo.image}`}
                  alt={logo.name}
                  width={36}
                  height={36}
                  className="w-9 h-9"
                />
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Tools

"use client"

import React, { useEffect, useState } from "react"

import Image from "next/image"

import { Button } from "@/components"
import { dark } from "@/context"
import { FigmaIcon, GithubBlackIcon, GithubWhiteIcon } from "@/icons"
import { useTheme } from "@/providers"
import { fetchData } from "@/scripts/useFetchData"
import { LogoType, PageDataType } from "@/types"

type Props = {
  page: string
}

const PageHeader = ({ page }: Props) => {
  const { theme } = useTheme()
  const [data, setData] = useState<PageDataType>({
    title: "",
    labels: "",
    figma: "",
    github: "",
    tools: [],
  })
  useEffect(() => {
    const fetchOptions = async () => {
      const pageData = await fetchData<PageDataType>(page)
      setData(pageData)
    }
    fetchOptions()
  }, [page])
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center mx-4">
        {data.labels &&
          data.labels.split(";").map((label: string, index: number) => (
            <Button
              key={index}
              variant="primary"
              className="text-xs px-2 py-1 shadow-md"
            >
              {label.trim()}
            </Button>
          ))}
        <div className="flex gap-7 items-center">
          <Button
            size="icon"
            className="p-1! h-7! w-7!"
            onClick={() => window.open(data.github, "_blank")}
          >
            <Image
              src={theme === dark ? GithubBlackIcon : GithubWhiteIcon}
              alt="Github Icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </Button>
          <Button
            size="icon"
            className="p-1! h-7! w-7!"
            onClick={() => window.open(data.figma, "_blank")}
          >
            <Image
              src={FigmaIcon}
              alt="Figma Icon"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </Button>
        </div>
      </div>
      <h1>{data.title}</h1>
      <div className="flex flex-wrap gap-x-6 gap-y-5 justify-center">
        {data.tools.map((tool: LogoType) => (
          <Button key={tool.id} variant="outline" size="icon">
            <Image
              src={`/assets/icons/${theme === dark && tool.imageWhite ? tool.imageWhite : tool.image}`}
              alt={tool.name}
              width={36}
              height={36}
              className="w-9 h-9"
            />
          </Button>
        ))}
      </div>
    </div>
  )
}

export default PageHeader

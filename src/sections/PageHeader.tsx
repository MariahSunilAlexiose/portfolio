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
      <div className="mx-4 flex items-center justify-between">
        {data.labels &&
          data.labels.split(";").map((label: string, index: number) => (
            <Button
              key={index}
              variant="primary"
              className="px-2 py-1 text-xs shadow-md"
            >
              {label.trim()}
            </Button>
          ))}
        <div className="flex items-center gap-7">
          <Button
            size="icon"
            className="h-7! w-7! p-1!"
            onClick={() => window.open(data.github, "_blank")}
          >
            <Image
              src={theme === dark ? GithubBlackIcon : GithubWhiteIcon}
              alt="Github Icon"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </Button>
          <Button
            size="icon"
            className="h-7! w-7! p-1!"
            onClick={() => window.open(data.figma, "_blank")}
          >
            <Image
              src={FigmaIcon}
              alt="Figma Icon"
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </Button>
        </div>
      </div>
      <h1>{data.title}</h1>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-5">
        {data.tools.map((tool: LogoType) => (
          <Button key={tool.id} variant="outline" size="icon">
            <Image
              src={`/assets/icons/${theme === dark && tool.imageWhite ? tool.imageWhite : tool.image}`}
              alt={tool.name}
              width={36}
              height={36}
              className="h-9 w-9"
            />
          </Button>
        ))}
      </div>
    </div>
  )
}

export default PageHeader

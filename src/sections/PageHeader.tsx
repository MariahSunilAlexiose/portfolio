"use client"

import { useEffect, useState } from "react"

import Image from "next/image"

import { Button, Skeleton } from "@/components"
import { dark } from "@/context"
import { FigmaIcon, GithubBlackIcon, GithubWhiteIcon } from "@/icons"
import { useTheme } from "@/providers"
import { fetchData } from "@/scripts/useFetchData"
import { LogoType } from "@/types"

type PageDataType = {
  title: string
  labels: string
  figma: string
  github: string
  tools: LogoType[]
}

const PageHeader = ({ page }: { page: string }) => {
  const { theme } = useTheme()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<PageDataType>({
    title: "",
    labels: "",
    figma: "",
    github: "",
    tools: [],
  })
  useEffect(() => {
    const fetchOptions = async () => {
      const pageData = await fetchData<PageDataType>(`/pages/${page}`)
      setData(pageData)
    }
    fetchOptions()
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [page])
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="flex flex-col gap-4">
      <div className="mx-4 flex items-center justify-between">
        {loading ? (
          <Skeleton className="!rounded-full h-10 w-24" />
        ) : (
          data.labels &&
          data.labels.split(";").map((label: string, index: number) => (
            <Button
              key={index}
              variant="primary"
              className="px-2 py-1 text-xs shadow-md"
            >
              {label.trim()}
            </Button>
          ))
        )}

        {loading ? (
          <div className="flex items-center gap-7">
            <Skeleton className="h-7 w-7" />
            <Skeleton className="h-7 w-7" />
            <Skeleton className="h-7 w-7" />
          </div>
        ) : (
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
        )}
      </div>
      {loading ? (
        <Skeleton className="h-9 md:h-10 w-full" />
      ) : (
        <h1>{data.title}</h1>
      )}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-5">
        {data.tools.map((tool: LogoType) =>
          loading ? (
            <Skeleton key={tool.id} className="h-[76px] w-[76px]" />
          ) : (
            <Button key={tool.id} variant="outline" size="icon">
              <Image
                src={`/assets/icons/${theme === dark && tool.imageWhite ? tool.imageWhite : tool.image}`}
                alt={tool.name}
                width={36}
                height={36}
                className="h-9 w-9"
              />
            </Button>
          )
        )}
      </div>
    </div>
  )
}

export default PageHeader

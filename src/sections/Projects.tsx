"use client"

import { useEffect, useState } from "react"

import { Pagination, Skeleton } from "@/components"
import { ClipPathLGSVG, ClipPathXLSVG } from "@/constants"
import { CardContainer } from "@/containers"
import { fetchData } from "@/scripts/useFetchData"
import { ProjectType } from "@/types"
import { useItemsPerPage } from "@/utils"

const Projects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([])
  const [loading, setLoading] = useState(true)

  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = useItemsPerPage()

  const lastItemIndex = currentPage * itemsPerPage
  const firstItemIndex = lastItemIndex - itemsPerPage
  const currentItems = projects.slice(
    firstItemIndex,
    lastItemIndex + (itemsPerPage === 2 ? 1 : 0)
  )

  useEffect(() => {
    const fetchOptions = async () => {
      const projectsData = await fetchData<ProjectType[]>("projects")
      setProjects(projectsData)
    }
    fetchOptions()

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="flex flex-col gap-9">
      {loading ? (
        <>
          <Skeleton className="h-6 md:h-9 w-44" />
          <Skeleton className="h-96 w-full" />
        </>
      ) : (
        <>
          <h2>My Projects</h2>
          <ClipPathXLSVG />
          <ClipPathLGSVG />
          <div className="flex flex-col gap-2">
            <div className="flex justify-center overflow-hidden gap-5 min-[528px]:justify-start min-[1535px]:justify-center">
              {currentItems.map((item: ProjectType, index: number) => {
                const isPartial = itemsPerPage === 2 && index === 2
                return (
                  <CardContainer
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    labels={item.labels}
                    className={isPartial ? "w-[50%] opacity-50" : ""}
                    page={item.page}
                  />
                )
              })}
            </div>
            <Pagination
              totalItems={projects.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default Projects

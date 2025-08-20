"use client"

import { useEffect, useState } from "react"

import { Card, Pagination } from "@/components"
import { ClipPathLGSVG, ClipPathXLSVG } from "@/constants"
import { fetchData } from "@/scripts/useFetchData"
import { ProjectType } from "@/types"
import { useItemsPerPage } from "@/utils"

function Cards() {
  const [items, setItems] = useState<ProjectType[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = useItemsPerPage()

  const lastItemIndex = currentPage * itemsPerPage
  const firstItemIndex = lastItemIndex - itemsPerPage
  const currentItems = items.slice(
    firstItemIndex,
    lastItemIndex + (itemsPerPage === 2 ? 1 : 0)
  )

  useEffect(() => {
    const fetchOptions = async () => {
      const projects = await fetchData<ProjectType[]>("projects")
      setItems(projects)
    }
    fetchOptions()
  }, [])

  return (
    <>
      <ClipPathXLSVG />
      <ClipPathLGSVG />
      <div className="flex flex-col gap-2">
        <div className="flex overflow-x-auto gap-5 justify-center min-[528px]:justify-start min-[823px]:justify-center lg:justify-start scrollbar-hide scrollbar-hide::-webkit-scrollbar">
          {currentItems.map((item, index) => {
            const isPartial = itemsPerPage === 2 && index === 2
            return (
              <Card
                key={item.id}
                title={item.title}
                image={item.image}
                labels={item.labels}
                className={isPartial ? "w-[50%] opacity-50" : ""}
              />
            )
          })}
        </div>
        <Pagination
          totalItems={items.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  )
}

export default Cards

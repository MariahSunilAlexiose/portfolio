import { useState } from "react"

import { Card, Pagination } from "@/components"
import { ClipPathLGSVG, ClipPathXLSVG } from "@/constants"
import { ProjectType } from "@/types"
import { useItemsPerPage } from "@/utils"

type Props = {
  data: {
    id: string
    title: string
    image: string
    labels: string
    page: string
  }[]
}

function Cards({ data }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = useItemsPerPage()

  const lastItemIndex = currentPage * itemsPerPage
  const firstItemIndex = lastItemIndex - itemsPerPage
  const currentItems = data.slice(
    firstItemIndex,
    lastItemIndex + (itemsPerPage === 2 ? 1 : 0)
  )

  return (
    <>
      <ClipPathXLSVG />
      <ClipPathLGSVG />
      <div className="flex flex-col gap-2">
        <div className="scrollbar-hide scrollbar-hide::-webkit-scrollbar flex justify-center gap-5 overflow-x-auto min-[528px]:justify-start min-[1535px]:justify-center">
          {currentItems.map((item: ProjectType, index: number) => {
            const isPartial = itemsPerPage === 2 && index === 2
            return (
              <Card
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
          totalItems={data.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  )
}

export default Cards

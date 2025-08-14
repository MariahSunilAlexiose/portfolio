"use client"

import { useState } from "react"

import { Card, Pagination } from "@/components"

function Cards() {
  const [items, setItems] = useState<[]>([]) // eslint-disable-line no-unused-vars
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage] = useState<number>(3)
  const lastItemIndex = currentPage * itemsPerPage
  const firstItemIndex = lastItemIndex - itemsPerPage
  const currentItems = items.slice(firstItemIndex, lastItemIndex)
  return (
    <>
      <div className="flex justify-center gap-5">
        {currentItems.map(() => (
          <Card
            key=""
            title=""
            description=""
            content=""
            footer={false}
            image=""
          />
        ))}
      </div>
      <Pagination
        totalItems={items.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

export default Cards

"use client"

import React from "react"

import Image from "next/image"

import { ActiveDotIcon, DotIcon } from "@/icons"

/* eslint-disable */
type Props = {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  setCurrentPage: (currentPage: number) => void
}
/* eslint-enable */

const PaginationLink = ({
  isActive,
  onClick,
  children,
}: {
  isActive?: boolean
  onClick?: () => void
  children: React.ReactNode
}) => (
  <button
    type="button"
    className="cursor-pointer"
    aria-current={isActive ? "page" : undefined}
    onClick={onClick}
  >
    {children}
  </button>
)

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: Props) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  if (totalPages <= 1) return null // Hide pagination if there's only one page

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  const maxPageNum = 5 // Maximum page numbers to display at once
  const pageNumLimit = Math.floor(maxPageNum / 2) // Current page should be in the middle if possible

  let activePages = pageNumbers.slice(
    Math.max(0, currentPage - 1 - pageNumLimit),
    Math.min(currentPage - 1 + pageNumLimit + 1, pageNumbers.length)
  )

  // Function to render page numbers with ellipsis
  const renderPages = () => {
    const renderedPages = activePages.map((page, idx) => {
      const isActive = currentPage === page
      return (
        <PaginationLink
          key={idx}
          isActive={isActive}
          onClick={() => setCurrentPage(page)}
        >
          <Image
            src={isActive ? ActiveDotIcon : DotIcon}
            alt={isActive ? "Active page dot" : "Page dot"}
            className={isActive ? "h-[13px] w-[65px]" : "h-[13px] w-[13px]"}
          />
        </PaginationLink>
      )
    })

    return renderedPages
  }

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className="mx-auto flex w-full justify-center"
    >
      <ul className="flex pl-0! items-center gap-1">{renderPages()}</ul>
    </nav>
  )
}

export default Pagination

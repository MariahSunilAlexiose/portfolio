"use client"

import React from "react"

import Image from "next/image"
import Link from "next/link"

import { ButtonVariants } from "@/constants"
import { ActiveDotIcon, DotIcon } from "@/icons"
import { ButtonProps } from "@/types"

/* eslint-disable */
type Props = {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  setCurrentPage: (currentPage: number) => void
}
/* eslint-enable */

const PaginationItem = React.forwardRef(function PaginationItem(
  { className, ...props }: React.ComponentProps<"li">,
  ref: React.Ref<HTMLLIElement>
) {
  return <li ref={ref} className={className} {...props} />
})

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<typeof Link>

const PaginationLink = ({
  isActive,
  size = "icon",
  onClick,
}: PaginationLinkProps & { onClick?: () => void }) => (
  <button
    className={`cursor-pointer ${ButtonVariants.size[size]}`}
    aria-current={isActive ? "page" : undefined}
    onClick={onClick}
  >
    <Image
      src={isActive ? ActiveDotIcon : DotIcon}
      alt={isActive ? "Active page dot" : "Page dot"}
      className="h-3 w-3"
    />
    <span className="sr-only">Page {isActive ? "active" : ""}</span>
  </button>
)

const PaginationEllipsis = ({ onClick }: { onClick?: () => void }) => (
  <button
    aria-hidden
    className="flex h-9 w-9 items-center justify-center opacity-50"
    onClick={onClick}
  >
    <Image src={DotIcon} alt="More pages" className="h-2 w-2" />
    <span className="sr-only">More pages</span>
  </button>
)

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: Props) => {
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
    const renderedPages = activePages.map((page, idx) => (
      <PaginationItem key={idx}>
        <PaginationLink
          href="#"
          isActive={currentPage === page}
          onClick={() => setCurrentPage(page)}
        />
      </PaginationItem>
    ))

    if (activePages[0] > 1) {
      renderedPages.unshift(
        <PaginationEllipsis
          key="ellipsis-start"
          onClick={() => setCurrentPage(activePages[0] - 1)}
        />
      )
    }

    if (activePages[activePages.length - 1] < pageNumbers.length) {
      renderedPages.push(
        <PaginationEllipsis
          key="ellipsis-end"
          onClick={() =>
            setCurrentPage(activePages[activePages.length - 1] + 1)
          }
        />
      )
    }

    return renderedPages
  }

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className="mx-auto flex w-full justify-center"
    >
      <ul className="flex flex-row items-center gap-1">{renderPages()}</ul>
    </nav>
  )
}

export default Pagination

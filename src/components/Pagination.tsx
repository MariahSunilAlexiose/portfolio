"use client"

import React from "react"

import Image from "next/image"

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
  React.ComponentProps<"button">

const PaginationLink = ({
  isActive,
  className,
  ...props
}: PaginationLinkProps) => (
  <button
    className={`focus:outline-none ${className ?? ""}`}
    aria-current={isActive ? "page" : undefined}
    {...props}
  />
)

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: Props) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  if (totalPages <= 1) return null // Hide pagination if there's only one page

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className="mx-auto flex w-full justify-center"
    >
      <ul className="flex flex-row items-center justify-center gap-5">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1
          const isActive = page === currentPage

          return (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={isActive}
                aria-label={`Go to page ${page}`}
                onClick={() => setCurrentPage(page)}
              >
                <Image
                  src={isActive ? ActiveDotIcon : DotIcon}
                  alt={isActive ? "Active page dot" : "Page dot"}
                  className={
                    isActive ? "h-[13px] w-[67px]" : "h-[13px] w-[13px]"
                  }
                />
              </PaginationLink>
            </PaginationItem>
          )
        })}
      </ul>
    </nav>
  )
}

export default Pagination

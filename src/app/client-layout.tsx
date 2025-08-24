"use client"

import { usePathname } from "next/navigation"

import { Footer, Navbar } from "@/components"
import { getBackgroundImage } from "@/utils"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const backgroundImage = getBackgroundImage(pathname)

  return (
    <div
      className="bg-background text-foreground font-sf_text flex flex-col gap-5 bg-cover bg-center p-4 md:gap-8 md:p-8 lg:gap-13 lg:px-6 lg:py-8 xl:gap-21 xl:px-20 xl:py-8"
      style={{ backgroundImage }}
    >
      <Navbar />
      <div className="flex min-h-screen flex-col">{children}</div>
      <Footer />
    </div>
  )
}

import type { Metadata } from "next"

import "../styles/globals.css"

import { Footer, Navbar } from "@/components"
import { ThemeProvider } from "@/providers"

export const metadata: Metadata = {
  title: "Portfolio - Mariah Sunil Alexiose",
  description: "Mariah Sunil Alexiose's Portfolio",
  icons: {
    icon: ["/favicon.ico"],
    // icon: ['/favicon.ico?v=10'],
    // apple: [""],
    // shortcut: [""],
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body
          className="bg-background text-foreground font-sf_text flex flex-col gap-5 p-4 md:p-8 md:gap-8 lg:gap-13 lg:px-6 lg:py-8 xl:gap-21 xl:px-20 xl:py-8 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/bg-patterns.png')" }}
        >
          <Navbar />
          <div className="flex min-h-screen flex-col">{children}</div>
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  )
}

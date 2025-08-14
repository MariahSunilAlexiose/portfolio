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
        <body>
          <Navbar />
          <div className="flex min-h-screen flex-col">{children}</div>
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  )
}

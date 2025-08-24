import type { Metadata } from "next"

import "../styles/globals.css"

import { ThemeProvider } from "@/providers"

import ClientLayout from "./client-layout"

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
          <ThemeProvider>
            <ClientLayout>{children}</ClientLayout>
          </ThemeProvider>
        </body>
      </html>
    </ThemeProvider>
  )
}

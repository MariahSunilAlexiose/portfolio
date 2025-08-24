import { Banner, Contact, Header, Projects } from "@/sections"

export default function Home() {
  return (
    <main className="flex flex-col gap-5 p-4 md:gap-8 md:p-8 lg:gap-13 lg:px-6 lg:py-8 xl:gap-21 xl:px-20 xl:py-8">
      <Header />
      <Projects />
      <Banner />
      <Contact />
    </main>
  )
}

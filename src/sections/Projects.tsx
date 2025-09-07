"use client"

import React, { useEffect, useState } from "react"

import { Skeleton } from "@/components"
import { Cards } from "@/containers"
import { fetchData } from "@/scripts/useFetchData"
import { ProjectType } from "@/types"

const Projects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOptions = async () => {
      const projectsData = await fetchData<ProjectType[]>("projects")
      setProjects(projectsData)
    }
    fetchOptions()

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="flex flex-col gap-9">
      {loading ? (
        <>
          <Skeleton className="h-6 md:h-9 w-44" />
          <Skeleton className="h-96 w-full" />
        </>
      ) : (
        <>
          <h2>My Projects</h2>
          <Cards data={projects} />
        </>
      )}
    </div>
  )
}

export default Projects

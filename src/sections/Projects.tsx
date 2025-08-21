"use client"

import React, { useEffect, useState } from "react"

import { Cards } from "@/containers"
import { fetchData } from "@/scripts/useFetchData"
import { ProjectType } from "@/types"

const Projects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([])
  useEffect(() => {
    const fetchOptions = async () => {
      const projectsData = await fetchData<ProjectType[]>("projects")
      setProjects(projectsData)
    }
    fetchOptions()
  }, [])
  return (
    <div className="flex flex-col gap-9">
      <h2>My Projects</h2>
      <Cards data={projects} />
    </div>
  )
}

export default Projects

"use client"

import React from "react"

import Image from "next/image"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components"
import { dark } from "@/context"
import { JiraDarkImg, JiraImg, ProfileHomeDarkImg, ProfileHomeImg } from "@/img"
import { useTheme } from "@/providers"
import { PageHeader } from "@/sections"

const ProfileProjectPage = () => {
  const { theme } = useTheme()
  return (
    <div className="flex flex-col gap-4">
      <PageHeader page="profilePage" />
      <div className="flex flex-col gap-13 md:gap-24">
        <div className="flex flex-col gap-6 md:flex-row md:justify-center">
          <div className="flex flex-col gap-6 md:flex-1">
            <p>
              This blog post is a little meta—in the best way possible. I&apos;m
              building a personal profile website, and I&apos;m blogging about
              the process on the very site I&apos;m creating. It&apos;s a
              full-circle moment that feels both exciting and surreal:
              designing, developing, and documenting all in one place.
            </p>
            <p>
              For this project, I&apos;m using a stack I&apos;ve grown
              comfortable with thanks to my previous work with The Ultimate
              Starter Stack:
            </p>
            <ul>
              <li>Next.js &#8211; for server-side rendering and routing</li>
              <li>Tailwind CSS &#8211; for rapid, utility-first styling</li>
              <li>
                TypeScript &#8211; for type safety and better developer
                experience
              </li>
              <li>Figma &#8211; for UI design and prototyping</li>
            </ul>
            <p>
              This combination gives me speed, flexibility, and a clean
              development workflow. I&apos;ve already completed the core UI and
              have my Figma files ready, which I&apos;ll be sharing in future
              posts.
            </p>
          </div>
          <div className="flex items-center justify-center md:flex-1">
            <Image
              src={theme === dark ? ProfileHomeDarkImg : ProfileHomeImg}
              alt="Starter Home Image"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2>UI Design: From Figma to Function</h2>
          <p>
            Designing the interface was my first major milestone. I wanted the
            site to feel clean, modern, and personal—something that reflects my
            style while staying functional.
          </p>
          <p>
            I&apos;ve created a full set of Figma designs and prototypes that
            cover every page, theme, and screen size:
          </p>
          <ul>
            <li>
              🎨 Figma Design File &#8211; includes light/dark mode layouts and
              responsive designs
            </li>
            <li>
              🧪 Interactive Prototype &#8211; walk through the user journey
              across devices
            </li>
          </ul>
          <p>✨ What&apos;s Included</p>
          <ul>
            <li>Themes: Light and dark mode for every page</li>
            <li>
              Responsive Layouts: Tailored designs for desktop, laptop, tablet,
              and mobile
            </li>
            <li>
              Prototypes: Interactive flows for each screen size and theme
            </li>
          </ul>
          <p>🧩 Pages Designed</p>
          <ul>
            <li>Home Page: Hero banner, project grid, footer</li>
            <li>About Page: Resume link, expertise overview</li>
            <li>Project Page: Project description, Figma and GitHub links</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h2>Website Architecture: Simple, Intentional, Navigable</h2>
          <p>
            My portfolio site is designed around three core pages, each with a
            distinct purpose and user experience:
          </p>
          <p>🏠 Home Page</p>
          <p>
            The central hub of the site. It introduces me, showcases featured
            projects, and acts as the launchpad for deeper exploration. From
            here, users can select a project to view in detail.
          </p>
          <p>👤 About Page</p>
          <p>
            A personal space that shares my story, design philosophy, and
            skills. It&apos;s where I connect with visitors on a more human
            level—beyond just the work.
          </p>
          <p>📁 Project Page</p>
          <p>
            This is a dynamic page that updates based on the project selected
            from the Home Page. Each project gets its own layout, visuals, and
            write-up. This modular approach lets me scale the site easily as I
            add more work.
          </p>
          <h3>🔄 How It All Connects</h3>
          <ul>
            <li>
              Each page is being designed in Figma, tracked in Jira under the
              High-Fidelity Wireframes and Responsive Layouts components.
            </li>
            <li>
              The Project Page will use Next.js dynamic routing, allowing me to
              load different content based on the selected project.
            </li>
            <li>
              Theming (light/dark) will be consistent across all pages, with
              tasks labeled accordingly (theme:light, theme:dark).
            </li>
          </ul>
          <p>
            This structure keeps the site clean, scalable, and easy to
            navigate—whether you&apos;re a recruiter, collaborator, or fellow
            designer.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h2>My Jira Workflow: Structure Meets Creativity</h2>
          <p>
            When using Jira, I wanted to be intentional about how I set it up. I
            didn&apos;t just want a task tracker—I wanted a system that reflects
            the creative and technical phases of building a portfolio site.
            Here&apos;s how I structured it:
          </p>
          <h3>🧩 Components: Breaking Down the Design Process</h3>
          <p>
            I created Jira components to represent key stages of the design
            workflow. These help me tag tasks and visualize progress across
            different layers of the UI.
          </p>
          <Table>
            <TableCaption>UI Components</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="uppercase">Component</TableHead>
                <TableHead className="uppercase">Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Design System Setup</TableCell>
                <TableCell>
                  Establishing typography, spacing, colors, and reusable UI
                  elements
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Low-Fidelity Wireframes</TableCell>
                <TableCell>
                  Sketch-style layouts to define structure without styling
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>High-Fidelity Wireframes</TableCell>
                <TableCell>
                  Pixel-perfect screens with finalized visuals and spacing
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dark Mode Wireframes</TableCell>
                <TableCell>
                  Designing alternate theme views for accessibility and style
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Prototyping</TableCell>
                <TableCell>
                  Initial layout exploration and user flow mapping
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p>
            These components keep my design tasks organized and help me track
            which parts of the UI are evolving.
          </p>
          <h3>🚀 Releases: Versioning My Progress</h3>
          <p>
            To simulate a real product life cycle, I created Jira releases to
            mark key milestones. Each version represents a distinct phase in the
            evolution of the project:
          </p>
          <ul>
            <li>v0.1 &#8211; Initial wireframe drafts</li>
            <li>v0.5 &#8211; High-fidelity designs</li>
            <li>v0.8 &#8211; Responsive layout implementation</li>
            <li>v1.0 &#8211; Final prototype ready for deployment</li>
            <li>v1.1 &#8211; Dark mode update</li>
          </ul>
          <p>
            This versioning system helps me stay organized and reflect on how
            the project has grown over time.
          </p>
          <h3>🧠 Epics: Organizing the Big Picture</h3>
          <p>To keep things focused, I created two main epics:</p>
          <ul>
            <li>
              Design Phase: Covers everything from wireframes to design system
              setup and visual polish. All tasks related to Figma, layout
              decisions, and UI refinement fall under this epic.
            </li>
            <li>
              Development Phase: Includes coding the site with Next.js,
              integrating TailwindCSS, setting up routing, and optimizing
              responsiveness. This epic will expand as I move into
              implementation.
            </li>
          </ul>
          <p>
            Using epics helps me zoom out and see how each task contributes to
            the overall goal—whether I’m sketching a layout or writing
            TypeScript.
          </p>
          <h3>🏷️ Labels: Theming with Precision</h3>
          <p>To keep track of visual variations, I added two Jira labels:</p>
          <ul>
            <li>
              theme:light – Used for tasks related to the default light theme
            </li>
            <li>
              theme:dark – Applied to tasks focused on dark mode design and
              implementation
            </li>
          </ul>
          <p>
            These labels help me quickly filter tasks by theme, especially when
            working on parallel versions of the same component. For example, a
            button might have separate design tasks for light and dark mode,
            each tagged accordingly.
          </p>
          <p>
            This setup ensures that theming isn’t just an afterthought—it’s
            baked into the workflow from the start.
          </p>
          <Image
            src={theme === dark ? JiraDarkImg : JiraImg}
            alt="Jira Image"
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default ProfileProjectPage

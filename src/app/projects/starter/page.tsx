"use client"

import React from "react"

import Image from "next/image"

import {
  Button,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components"
import { dark } from "@/context"
import {
  ErrorToastDarkImg,
  ErrorToastImg,
  FirstTabDarkImg,
  FirstTabImg,
  FooterDarkImg,
  FooterImg,
  InfoToastDarkImg,
  InfoToastImg,
  MainBranchDarkImg,
  MainBranchImg,
  NavbarThemeBannerDarkImg,
  NavbarThemeBannerImg,
  SecondTabDarkImg,
  SecondTabImg,
  StarterHomeDarkImg,
  StarterHomeImg,
  SuccessToastDarkImg,
  SuccessToastImg,
} from "@/img"
import { useTheme } from "@/providers"
import { PageHeader } from "@/sections"

const StarterPage = () => {
  const { theme } = useTheme()
  return (
    <div className="flex flex-col gap-4">
      <PageHeader />
      <div className="flex flex-col gap-13 md:gap-24">
        {/* intro */}
        <div className="flex flex-col md:flex-row gap-6 md:justify-center">
          <div className="flex flex-col gap-6 md:flex-1">
            <p>
              In today&apos;s fast-paced web development landscape, having a
              solid project foundation is essential. Whether you&apos;re
              building a scalable SaaS product or a sleek portfolio site, the
              right stack and tooling can make all the difference.
            </p>
            <p>
              This post dives into a robust project template that combines
              TypeScript, React, Next.js, and Tailwind CSS—along with a suite of
              tools to enforce code quality, consistency, and developer
              productivity.
            </p>
          </div>
          <div className="flex justify-center items-center md:flex-1">
            <Image
              src={theme === dark ? StarterHomeDarkImg : StarterHomeImg}
              alt="Starter Home Image"
              className="w-full"
            />
          </div>
        </div>
        {/* h1 */}
        <div className="flex flex-col gap-6">
          <h2>UX & UI Strategy: From Frameworks to ShadCN UI</h2>
          <p>
            My approach to UX and UI design is shaped by hands-on experience
            with popular frameworks like Material UI and Bootstrap. While both
            are powerful, they come with trade-offs that led me to explore a
            more flexible solution for this project.
          </p>
          <h3>🧪 What I Learned from Material UI & Bootstrap</h3>
          <ul>
            <li>
              <span className="underline">Material UI:</span> Offers a polished
              component library and strong accessibility, but customizing
              styles—especially with Emotion—can be tedious. It often feels like
              working against the framework when trying to implement a unique
              design system.
            </li>
            <li>
              <span className="underline">Bootstrap:</span> Great for quick
              layout scaffolding, but its design language is highly opinionated.
              Making Bootstrap components feel modern and tailored usually
              requires heavy overrides or complete rewrites.
            </li>
          </ul>
          <p>
            These tools were valuable for learning layout, responsiveness, and
            component structure—but they didn&apos;t offer the level of control
            I wanted for this project.
          </p>
          <h3>✨ Why I Chose ShadCN UI</h3>
          <p>
            For this project, I copied and customized components from ShadCN UI,
            which is built on Radix UI and Tailwind CSS. This gave me a strong
            foundation of accessible, headless components with full styling
            control.
          </p>
          <ul>
            <li>
              <span className="underline">Tailwind-first: </span>ShadCN
              components are styled using Tailwind utility classes, making them
              easy to adapt to my design tokens
            </li>
            <li>
              <span className="underline">Accessibility baked in: </span>Built
              on Radix primitives, they handle keyboard navigation, ARIA roles,
              and focus management out of the box
            </li>
            <li>
              <span className="underline">Modular and composable: </span>Each
              component is isolated and easy to extend or refactor
            </li>
            <li>
              <span className="underline">Production-ready: </span>The
              components are clean, performant, and follow best practices
            </li>
          </ul>
          <p>
            Instead of reinventing the wheel, I used ShadCN UI as a reliable
            base—then tailored the visuals, structure, and behavior to match my
            design system and project architecture.
          </p>
          <h3>🎨 UI Philosophy</h3>
          <ul>
            <li>
              <span className="underline">Consistency:</span> Typography,
              spacing, and theming are unified across all components
            </li>
            <li>
              <span className="underline">Responsiveness:</span> Layouts adapt
              smoothly across screen sizes
            </li>
            <li>
              <span className="underline">Accessibility-first:</span> Every
              interactive element is usable by keyboard and screen reader{" "}
            </li>
            <li>
              <span className="underline">Minimal customization friction:</span>{" "}
              Thanks to Tailwind, tweaking styles is fast and predictable
            </li>
          </ul>
        </div>
        {/* h2 */}
        <div className="flex flex-col gap-6">
          <h2>Project Purpose & Overview</h2>
          <p>
            This is a modern web app template built with scalability,
            performance, and developer experience at its core. Whether
            you&apos;re building a SaaS product, a portfolio site, or a reusable
            UI library, this setup provides a clean, extensible foundation
            designed to accelerate development without compromising quality.
          </p>
          <p>
            It was kickstarted with Create Next App, laying the groundwork with
            Next.js for routing and server-side rendering, React for
            component-based architecture, and TypeScript for type safety and
            enhanced developer ergonomics. From there, the focus was on crafting
            a robust development environment that enforces code quality and
            streamlines the workflow—making the project not just functional, but
            clean, scalable, and enjoyable to work on.
          </p>
          <h3>🧱 What&apos;s Inside</h3>
          <ul>
            <li>Type safety powered by TypeScript</li>
            <li>Component-driven architecture using React</li>
            <li>Server-side rendering and routing with Next.js</li>
            <li>Rapid UI development with Tailwind CSS</li>
            <li>Dynamic theming via a custom theme system</li>
            <li>
              Custom design system with tokens for colors, spacing, and
              typography
            </li>
            <li>
              Automated code quality enforcement using ESLint, Prettier, Husky,
              and lint-staged
            </li>
          </ul>
          <p>
            It also includes a secondary branch called starter-cmp, which
            introduces a rich set of ShadCN-inspired UI components—perfect for
            building polished interfaces quickly and consistently.
          </p>
        </div>
        {/* h3 */}
        <div className="flex flex-col gap-6">
          <h2>Code Quality & Import Strategy</h2>
          <p>
            To ensure a clean, consistent, and production-ready codebase, this
            project uses a proactive workflow that functions like a local CI
            pipeline—automating checks, enforcing standards, and streamlining
            the developer experience.
          </p>
          <p>
            Before every commit, a series of automated tasks run behind the
            scenes:
          </p>
          <ul>
            <li>
              TypeScript validates type correctness to catch potential bugs
              early.
            </li>
            <li>
              ESLint enforces coding standards and highlights problematic
              patterns.
            </li>
            <li>
              Prettier formats code automatically to maintain stylistic
              consistency.
            </li>
            <li>
              lint-staged ensures only staged files are checked, keeping the
              process fast.
            </li>
            <li>
              Husky orchestrates these checks by triggering them before each
              commit.
            </li>
            <li>
              Validated and formatted files are re-added to the commit to ensure
              consistency.
            </li>
          </ul>
          <p>
            This setup guarantees that every commit meets the quality bar—like
            having a mini CI pipeline running locally. It prevents bad commits,
            speeds up development, and boosts confidence that the code is always
            in a deployable state.
          </p>
          <h3>🧠 Import Sorting Strategy</h3>
          <p>
            To keep import statements clean and logically grouped, the project
            uses @ianvs/prettier-plugin-sort-imports, which integrates directly
            with Prettier. This plugin automatically organizes imports without
            requiring a separate linting pass.
          </p>
          <h4>Why It Works</h4>
          <ul>
            <li>
              Seamless integration with Prettier—no extra tooling required
            </li>
            <li> Preserves side-effect imports to avoid runtime issues</li>
            <li>
              Merges type and value imports for cleaner, more readable code
            </li>
            <li>Supports regex-based grouping for flexible organization</li>
            <li>Handles comments gracefully without disrupting structure</li>
          </ul>
          <h4>Why Not Other Tools?</h4>
          <p>
            Other import-sorting tools were considered, but didn&apos;t align as
            well with the project&apos;s workflow:
          </p>
          <ul>
            <li>
              eslint-plugin-import/order requires a separate linting pass and
              offers less formatting control.
            </li>
            <li>
              simple-import-sort works well with ESLint but lacks Prettier
              integration.
            </li>
            <li>
              @trivago/prettier-plugin-sort-imports is solid, but IanVS&apos;s
              fork adds more polish and flexibility.
            </li>
          </ul>
          <p>
            By aligning with the existing Prettier and Husky setup, this
            strategy keeps the codebase clean, consistent, and
            friction-free—without adding complexity.
          </p>
        </div>
        {/* h4 */}
        <div className="flex flex-col gap-6">
          <h2>Design System</h2>
          <p>
            The design system is built around Tailwind CSS and a set of custom
            design tokens that ensure consistency, scalability, and visual
            harmony.
          </p>
          <p>Defined in the styles/ directory:</p>
          <ul>
            <li>
              colors.ts &#8211; Tailored palette for light and dark themes
            </li>
            <li>
              spacing.ts &#8211; Consistent layout rhythm across components
            </li>
            <li>globals.css &#8211; Global styles and Tailwind base layer</li>
          </ul>
          <h3>✨ SF Pro Font System</h3>
          <p>
            Typography plays a central role in the app&apos;s visual identity. I
            integrated the full SF Pro font family, including:
          </p>
          <ul>
            <li>SF Pro Display &#8211; For headers and hero sections</li>
            <li>SF Pro Text &#8211; Optimized for body content</li>
            <li>
              SF Pro Rounded &#8211; Used selectively for softer UI elements
            </li>
            <li>Base fonts &#8211; Fallback versions for broader support</li>
          </ul>
          <p>
            Each variant includes multiple weights and matching italic styles,
            giving full control over tone and emphasis. Fonts are loaded via
            styles/fonts.ts and integrated into Tailwind&apos;s configuration
            for dynamic styling across themes and screen sizes.
          </p>
          <p>
            Combined with Tailwind&apos;s utility-first approach, this
            typography system creates a cohesive and flexible design language
            that scales beautifully across components and layouts.
          </p>
          <h3>🌗 Theme System</h3>
          <p>
            The app supports light and dark modes using a custom theme context:
          </p>
          <ul>
            <li>Managed via ThemeProvider in providers/</li>
            <li>Persistent theme state across sessions</li>
            <li>Tailwind&apos;s dark: variants for styling</li>
            <li>A custom Switch component for toggling themes</li>
          </ul>
          <p>
            This system ensures a dynamic, user-friendly UI that adapts to user
            preferences.
          </p>
        </div>
        {/* h5 */}
        <div className="flex flex-col gap-6">
          <h2>Folder Structure & Architecture</h2>
          <p>
            To keep the project modular and scalable, I organized the src folder
            as follows:
          </p>
          <Table>
            <TableCaption>Organization of folders</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="uppercase">Folder</TableHead>
                <TableHead className="uppercase">Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>components/</TableCell>
                <TableCell>Reusable UI components</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fonts/</TableCell>
                <TableCell>Raw font files used throughout the app</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>providers/</TableCell>
                <TableCell>
                  Context providers, including the theme system
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>context/</TableCell>
                <TableCell>Theme context logic</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>styles/</TableCell>
                <TableCell>Design tokens and global styles</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>sections/</TableCell>
                <TableCell>
                  Page-level layout sections (currently empty)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>constants/</TableCell>
                <TableCell>
                  Static values like breakpoints or config (currently empty)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>types/</TableCell>
                <TableCell>
                  TypeScript interfaces and types (currently empty)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>utils/</TableCell>
                <TableCell>Utility functions (currently empty)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p>
            Even the empty folders are intentional—they&apos;re placeholders for
            future expansion and help maintain a clean, intuitive architecture.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h2> Component Library: starter-cmp Branch</h2>
          <p>
            The starter-cmp branch features a fully custom-built set of
            ShadCN-inspired UI components, recreated from scratch to align with
            my architecture and design system. These components are modular,
            accessible, and styled entirely with Tailwind CSS, making them easy
            to integrate and extend.
          </p>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex flex-col gap-6 lg:w-3/4">
              <h2>✨ Key Features</h2>
              <ul>
                <li className="pt-5">
                  <span className="underline">Accessibility-first:</span> ARIA
                  roles, keyboard support, and focus management
                </li>
                <li className="pt-5">
                  <span className="underline">Tailwind-based styling:</span>{" "}
                  Fully customizable with design tokens
                </li>
                <li className="pt-5">
                  <span className="underline">Modular and reusable:</span> Easy
                  to drop into any interface
                </li>
                <li className="pt-5">
                  <span className="underline">Performance-optimized:</span>{" "}
                  Clean, production-ready code
                </li>
              </ul>
              <p>
                This library gives me a solid foundation for building polished,
                responsive UIs with consistent styling and behavior—perfectly
                aligned with my Tailwind-based design system.
              </p>
            </div>
            <div className="flex flex-col gap-6 w-full">
              <div className="flex relative justify-center items-center w-full">
                <Image
                  src={theme === dark ? ErrorToastDarkImg : ErrorToastImg}
                  alt="Error Toast Image"
                  className="w-full"
                />
                <Button className="absolute left-4 bottom-4">
                  Clicking Danger Button will activate an Error toast
                </Button>
              </div>
              <div className="flex relative justify-center items-center w-full">
                <Image
                  src={theme === dark ? InfoToastDarkImg : InfoToastImg}
                  alt="Information Toast Image"
                  className="w-full"
                />
                <Button className="absolute left-4 bottom-4">
                  Clicking Info Button will activate an Information toast
                </Button>
              </div>
              <div className="flex relative justify-center items-center w-full">
                <Image
                  src={theme === dark ? SuccessToastDarkImg : SuccessToastImg}
                  alt="Success Toast Image"
                  className="w-full"
                />
                <Button className="absolute left-4 bottom-4">
                  Clicking Success Button will activate an Success toast
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex relative justify-center items-center w-full lg:w-1/2">
              <Image
                src={theme === dark ? SecondTabDarkImg : SecondTabImg}
                alt="Second Tab Image"
                className="w-full"
              />
              <Button className="absolute left-4 bottom-4">
                Second Tab that contains Accordion, Alert, TextArea, RadioGroup,
                Dialog and Combobox
              </Button>
            </div>

            <div className="flex relative justify-center items-center w-full lg:w-1/2">
              <Image
                src={theme === dark ? FirstTabDarkImg : FirstTabImg}
                alt="First Tab Image"
                className="w-full"
              />
              <Button className="absolute left-4 bottom-4">
                First Tab that contains Carousel with Pagination
              </Button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex relative justify-center items-center w-full lg:w-1/2">
              <Image
                src={
                  theme === dark
                    ? NavbarThemeBannerDarkImg
                    : NavbarThemeBannerImg
                }
                alt="Navbar with Theme Toggle and Banner Image"
                className="w-full"
              />
              <Button className="absolute left-4 bottom-4">
                Navbar with Theme Toggle and Banner
              </Button>
            </div>
            <div className="flex relative justify-center items-center w-full lg:w-1/2">
              <Image
                src={theme === dark ? FooterDarkImg : FooterImg}
                alt="Footer Image"
                className="w-full"
              />
              <Button className="absolute left-4 bottom-4">Footer</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2>Branching Strategy: main vs starter-cmp</h2>
          <p>
            Splitting the project into two branches—main and starter-cmp—was a
            strategic decision to keep the core architecture clean while
            allowing space for UI experimentation and component development.
          </p>
          <h3>🧭 main Branch: Core Foundation</h3>
          <p>The main branch contains the essential scaffolding for the app:</p>
          <ul>
            <li>
              Project setup with TypeScript, React, Next.js, and Tailwind CSS
            </li>
            <li>Design system tokens (colors, spacing, typography)</li>
            <li>Theme context and global styling</li>
            <li>Code quality tooling (ESLint, Prettier, Husky, lint-staged)</li>
            <li>Folder structure and architecture ready for scaling</li>
          </ul>
          <p>
            This branch serves as a lean, production-ready starting
            point—focused purely on structure and design foundations.
          </p>
          <div className="flex relative justify-center items-center md:flex-1">
            <Image
              src={theme === dark ? MainBranchDarkImg : MainBranchImg}
              alt="Main Branch Image"
              className="w-full"
            />
            <Button className="absolute left-4 bottom-4">
              Main branch only displays ThemeToggle
            </Button>
          </div>
          <h3>🔄 Why Two Branches?</h3>
          <p>Keeping them separate offers several advantages:</p>
          <ul>
            <li>
              <span className="underline">Modularity:</span> Choose between a
              minimal setup or a full UI kit depending on the project&apos;s
              needs
            </li>
            <li>
              <span className="underline">Clean Git history:</span> Architecture
              changes stay isolated from component experimentation
            </li>
            <li>
              <span className="underline">Flexibility:</span> Easier to
              maintain, refactor, or even publish the component library
              independently
            </li>
            <li>
              <span className="underline">Clarity:</span> Each branch has a
              focused purpose, reducing cognitive load and making iteration
              smoother
            </li>
          </ul>
          <h3>🧩 starter-cmp Branch: Component Playground</h3>
          <p>
            The starter-cmp branch builds on top of main and introduces a fully
            custom component library inspired by ShadCN UI:
          </p>
          <ul>
            <li>
              Recreated components like Dialog, Tabs, Toast, Combobox, etc.
            </li>
            <li>
              Tailwind-styled form elements, layout primitives, and utility
              components
            </li>
            <li>Accessibility features and performance optimizations</li>
            <li>
              A ready-to-use UI layer for rapid prototyping or production use
            </li>
          </ul>
          <p>
            This branch acts as a sandbox for UI development—ideal for building
            out interfaces quickly and consistently.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h2>Challenges & What I&apos;d Do Differently</h2>
          <p>
            Building this template was incredibly rewarding, but it wasn&apos;t
            without its hurdles. Here are a few challenges I ran into—and how
            I&apos;d approach them differently in future iterations:
          </p>
          <h3>⚠️ Challenges Faced</h3>
          <ul>
            <li>
              <span className="underline">
                Tailwind configuration complexity:
              </span>{" "}
              Customizing Tailwind with design tokens and integrating fonts
              required a lot of trial and error. Getting typography to behave
              consistently across screen sizes and themes took time and careful
              tuning.
            </li>
            <li>
              <span className="underline">Component abstraction:</span>{" "}
              Rebuilding ShadCN components from scratch was a great learning
              experience, but some components (like Combobox and Dialog) had
              nuanced accessibility behaviors that were tricky to replicate
              without introducing bugs.
            </li>
            <li>
              <span className="underline">Tooling overload:</span> While tools
              like ESLint, Prettier, Husky, and lint-staged are powerful,
              configuring them to work harmoniously—especially across different
              environments—was more time-consuming than expected.
            </li>
            <li>
              <span className="underline">
                Font licensing and fallback handling:
              </span>{" "}
              Integrating SF Pro fonts required attention to licensing and
              fallback strategies. Ensuring graceful degradation when fonts
              failed to load was a subtle but important detail.
            </li>
            <li>
              <span className="underline">Branch management:</span> Maintaining
              the starter-cmp branch alongside the main branch introduced some
              friction when syncing updates or refactoring shared logic.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h2>Final Thoughts</h2>
          <p>
            This template isn&apos;t just a starting point—it&apos;s a
            development philosophy. It emphasizes:
          </p>
          <ul>
            <li>Clean code</li>
            <li>Fast iteration</li>
            <li>Scalable architecture</li>
            <li>Thoughtful design</li>
          </ul>
          <p>
            Whether you&apos;re building a side project or a full-fledged
            product, this setup gives you the tools to succeed. Clone the repo,
            switch to starter-cmp, and start crafting your UI with confidence.
          </p>
        </div>
      </div>
    </div>
  )
}

export default StarterPage

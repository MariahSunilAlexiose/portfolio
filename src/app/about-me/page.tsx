"use client"

import React from "react"

import Image from "next/image"

import { AboutContainer, Button } from "@/components"
import { dark } from "@/context"
import {
  AcademicCapBlackIcon,
  AcademicCapWhiteIcon,
  ArrowDownTrayBlackIcon,
  ArrowDownTrayWhiteIcon,
  CodeBracketBlackIcon,
  CodeBracketWhiteIcon,
} from "@/icons"
import { useTheme } from "@/providers"
import { Contact, Tools } from "@/sections"

const AboutPage = () => {
  const { theme } = useTheme()
  return (
    <div className="flex flex-col gap-6 md:mx-20 md:gap-13">
      <div className="flex flex-col items-center justify-between gap-3 md:flex-row md:items-end">
        <div className="flex flex-col items-center md:items-start">
          <h4>Introduction</h4>
          <h3>About Me</h3>
        </div>
        <Button
          variant="accent"
          className="border-muted-foreground rounded-full! px-4 py-2 text-[10px] md:text-lg"
        >
          <a
            href="/assets/Resume_Mariah Sunil Alexiose.pdf"
            download
            className="flex items-center gap-2.5"
          >
            My Resume
            <Image
              src={
                theme === dark ? ArrowDownTrayWhiteIcon : ArrowDownTrayBlackIcon
              }
              alt="Arrow Down Tray Icon"
              className="h-4 w-4"
            />
          </a>
        </Button>
      </div>
      <div className="flex flex-col gap-9">
        <div className="text-center lg:text-left">
          <span className="text-xs leading-6 md:text-xl md:leading-10">
            I&apos;m a Full Stack Developer with a passion for building
            responsive, scalable web applications using technologies like React,
            Node.js, and PostgreSQL. I thrive on turning complex problems into
            elegant solutions, blending clean code with intuitive design across
            the entire development stack.
          </span>
        </div>
        <div className="flex flex-col items-center gap-8 md:h-52 md:flex-row">
          <AboutContainer
            icon={theme === dark ? CodeBracketWhiteIcon : CodeBracketBlackIcon}
            title="Programming & Scripting"
            description="Javascript, Typescript, Python, PHP, SQL, HTML, CSS"
          />
          <AboutContainer
            icon={theme === dark ? AcademicCapWhiteIcon : AcademicCapBlackIcon}
            title="Education"
            description="Bachelor of Computer Science"
          />
        </div>
        <Tools />
        <Contact />
      </div>
    </div>
  )
}

export default AboutPage

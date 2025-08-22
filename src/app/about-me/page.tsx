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
    <div className="flex flex-col gap-6 md:gap-13 md:mx-20">
      <div className="flex justify-between gap-3 items-center flex-col md:flex-row md:items-end">
        <div className="flex flex-col items-center md:items-start">
          <h4>Introduction</h4>
          <h3>About Me</h3>
        </div>
        <Button
          variant="accent"
          className="rounded-full! border-muted-foreground px-4 py-2 text-[10px] md:text-lg"
        >
          <a
            href="/assets/Resume_Mariah Sunil Alexiose.pdf"
            download
            className="flex gap-2.5 items-center"
          >
            My Resume
            <Image
              src={
                theme === dark ? ArrowDownTrayWhiteIcon : ArrowDownTrayBlackIcon
              }
              alt="Arrow Down Tray Icon"
              className="w-4 h-4"
            />
          </a>
        </Button>
      </div>
      <div className="flex flex-col gap-9">
        <div className="text-center lg:text-left">
          <span className="text-xs md:text-xl leading-6 md:leading-10">
            I&apos;m a Full Stack Developer with a passion for building
            responsive, scalable web applications using technologies like React,
            Node.js, and PostgreSQL. I thrive on turning complex problems into
            elegant solutions, blending clean code with intuitive design across
            the entire development stack.
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center md:h-52">
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

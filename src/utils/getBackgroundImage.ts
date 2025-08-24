const getBackgroundImage = (pathname: string): string => {
  if (pathname.startsWith("/projects")) {
    return "url('/assets/images/projects-bg.png')"
  }

  if (pathname.startsWith("/about-me")) {
    return "url('/assets/images/aboutme-bg.png')"
  }

  return "url('/assets/images/bg.png')"
}

export default getBackgroundImage

import { ComponentProps } from "react"

const NavigationMenu = ({ className, children }: ComponentProps<"div">) => {
  return (
    <nav data-slot="navigation-menu" className={`${className} relative flex`}>
      {children}
    </nav>
  )
}

const NavigationMenuList = ({ className, children }: ComponentProps<"div">) => {
  return (
    <ul
      data-slot="navigation-menu-list"
      className={`${className} flex list-none items-center justify-center gap-1`}
    >
      {children}
    </ul>
  )
}

const NavigationMenuItem = ({ className, children }: ComponentProps<"div">) => {
  return (
    <li data-slot="navigation-menu-item" className={`${className} w-full`}>
      {children}
    </li>
  )
}

const NavigationMenuLink = ({
  className,
  children,
  href,
}: ComponentProps<"a">) => {
  return (
    <a
      data-slot="navigation-menu-link"
      href={href}
      className={`${className} flex flex-col gap-1 rounded-sm p-2 text-sm transition`}
    >
      {children}
    </a>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
}

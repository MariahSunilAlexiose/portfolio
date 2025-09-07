const Label = ({
  children,
  className,
  htmlFor,
}: React.ComponentProps<"label">) => {
  return (
    <label
      data-slot="label"
      htmlFor={htmlFor}
      className={`text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
    >
      {children}
    </label>
  )
}

export default Label

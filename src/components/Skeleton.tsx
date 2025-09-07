const Skeleton = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={`${className} bg-primary/30 animate-pulse rounded-md`}
      {...props}
    />
  )
}

export default Skeleton

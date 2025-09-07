type Props = {
  className: string
}

const Skeleton = ({ className, ...props }: Props) => {
  return (
    <div
      className={`${className} bg-primary/30 animate-pulse rounded-md`}
      {...props}
    />
  )
}

export default Skeleton

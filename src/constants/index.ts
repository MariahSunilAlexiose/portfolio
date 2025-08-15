export const ButtonVariants = {
  variant: {
    default: "rounded hover:bg-accent/80 hover:text-accent-foreground", // ghost
    destructive:
      "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/85",
    outline:
      "border rounded border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
    accent: "bg-accent text-accent-foreground shadow-sm hover:bg-accent/85",
    primary: "bg-primary text-background shadow hover:bg-primary/85",
    link: "text-primary hover:text-primary/85 underline-offset-4 hover:underline",
    success:
      "bg-green-600 text-primary-foreground shadow-sm hover:bg-green/85 shadow-green-400/40",
  },
  size: {
    default: "h-9 px-4 py-2",
    xs: "h-4 p-3 rounded-md text-xs font-bold",
    sm: "h-8 rounded-md px-3 text-sm",
    lg: "h-10 rounded-md px-8 text-lg",
    icon: "h-5 w-9",
  },
}

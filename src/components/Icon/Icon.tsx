import { LucideProps, icons } from 'lucide-react'

export interface IconProps extends LucideProps {
  name?: keyof typeof icons
}

export const Icon = ({ name, ...props }: IconProps) => {
  if (!name) return null
  const LucideIcon = icons[name]
  if (!LucideIcon) return null

  return <LucideIcon size={20} role="img" {...props} />
}

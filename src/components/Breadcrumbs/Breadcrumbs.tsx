import React from 'react'
import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material'
import { Link } from '@/components'

type BreadcrumbItem = {
  href: string
  label: string
}

type Props = {
  items: BreadcrumbItem[]
  separator?: string
}
export const Breadcrumbs = ({ items = [], separator = '/' }: Props) => (
  <MuiBreadcrumbs separator={separator}>
    {items.map((item) => (
      <Link key={item.href} href={item.href}>
        {item.label}
      </Link>
    ))}
  </MuiBreadcrumbs>
)

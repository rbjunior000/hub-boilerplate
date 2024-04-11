'use client'

import { ListItemIcon, ListItemText, Menu, MenuItem, MenuList } from '@mui/material'
import React from 'react'
import { Icon, IconProps, Link } from '@/components'

export type DropdownItem = {
  label: string
  href?: string
  onClick?: (e: any) => void
  icon?: IconProps['name']
}

export type DropdownProps = {
  items: DropdownItem[]
  children: ({
    onToggle,
  }: {
    onToggle: (e: React.MouseEvent<HTMLButtonElement>) => void
  }) => React.ReactNode
}

export const Dropdown: React.FC<DropdownProps> = ({ items, children }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      {children({ onToggle: handleClick })}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuList>
          {items.map(({ label, href, icon, onClick }) => (
            <MenuItem
              key={label}
              LinkComponent={Link}
              onClick={(e) => {
                onClick && onClick(e)
                handleClose()
              }}
              {...(href ? { href } : {})}
            >
              {icon && (
                <ListItemIcon>
                  <Icon name={icon} />
                </ListItemIcon>
              )}
              <ListItemText>{label}</ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  )
}

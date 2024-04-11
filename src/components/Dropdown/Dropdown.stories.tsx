import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from '@mui/material'
import { Dropdown } from '@/components'
import type { DropdownProps } from '@/components'

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: { actions: { argTypesRegex: '^on.*' } },
}
export default meta

const Template: StoryFn<DropdownProps> = (args) => (
  <Dropdown {...args}>
    {({ onToggle }) => (
      <Button onClick={onToggle} aria-label="dropdown-icon-trigger">
        Dropdown
      </Button>
    )}
  </Dropdown>
)

export const Default = Template.bind({})
Default.args = {
  items: [
    { label: 'Home', href: '/', icon: 'Home' },
    { label: 'Profile', href: '/profile', icon: 'User' },
    { label: 'Settings', href: '/settings', icon: 'Settings' },
    { label: 'Logout', onClick: action('Logout Clicked'), icon: 'LogOut' },
  ],
}

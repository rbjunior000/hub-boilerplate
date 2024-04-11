import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { TextField } from './TextField'

export default {
  title: 'Components/TextField',
  component: TextField,
  args: {
    label: 'Label',
  },
} as Meta<typeof TextField>

const Template: StoryFn<typeof TextField> = (args) => <TextField {...args} />

export const Default = Template.bind({})
Default.args = {}

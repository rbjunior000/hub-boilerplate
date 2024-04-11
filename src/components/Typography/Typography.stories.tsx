import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Typography } from './Typography'

export default {
  title: 'Components/Typography',
  component: Typography,
  args: {
    children: 'Hublocal example typography',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'subtitle1',
          'subtitle2',
          'body1',
          'body2',
          'caption',
          'overline',
        ],
      },
    },
  },
} as Meta<typeof Typography>

const Template: StoryFn<typeof Typography> = (args) => <Typography {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: 'body1',
}

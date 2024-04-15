import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { IconButton } from './IconButton'

export default {
  title: 'Components/IconButton',
  component: IconButton,
  args: {
    iconName: 'AArrowDown',
  },
} as Meta<typeof IconButton>

const Template: StoryFn<typeof IconButton> = (args) => <IconButton {...args} />

export const Default = Template.bind({})
export const WithTooltip = Template.bind({})
WithTooltip.args = {
  tooltip: 'This is a tooltip',
  tooltipProps: { placement: 'bottom-start', arrow: true },
}
Default.args = {}

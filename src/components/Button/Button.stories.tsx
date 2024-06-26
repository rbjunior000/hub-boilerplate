import { Meta, StoryFn } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button example',
    variant: 'contained',
    onClick: action('clicked'),
  },
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
export const WithTooltip = Template.bind({})
WithTooltip.args = {
  tooltip: 'This is a tooltip',
  tooltipProps: { placement: 'bottom-start', arrow: true },
}
Default.args = {}

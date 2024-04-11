import { Meta, StoryFn } from '@storybook/react'
import { Select } from './Select'

export default {
  title: 'Components/Select',
  component: Select,
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    placeholder: 'Select an option',
    label: 'select',
    fullWidth: true,
  },
} as Meta<typeof Select>

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />

export const Default = Template.bind({})

Default.args = {}

import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { icons } from 'lucide-react'
import { Icon } from './Icon'

const meta: Meta = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: { type: 'radio' },
      options: Object.keys(icons),
    },
  },
}

export default meta

const Template: StoryFn<any> = (args: any) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'MoveDownLeft',
}

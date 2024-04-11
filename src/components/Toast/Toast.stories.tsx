import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Toast } from './Toast'
import { Button } from '../Button'
import { toast } from './toast-store'

export default {
  title: 'Components/Toast',
  component: Toast,
} as Meta<typeof Toast>

const Template: StoryFn<typeof Toast> = () => (
  <>
    <Button variant="contained" onClick={() => toast.success({ message: 'Toast de sucesso' })}>
      Toast sucesso bottom right
    </Button>
    <Button onClick={() => toast.error({ message: 'Toast de error' }, { position: 'top-center' })}>
      Toast de error at top center
    </Button>
  </>
)

export const Default = Template.bind({})
Default.args = {}

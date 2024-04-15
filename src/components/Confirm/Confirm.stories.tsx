import { Meta, StoryFn } from '@storybook/react'
import { PropsWithChildren } from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from '../Button'
import { confirm } from '..'
import { Confirm, ConfirmModalProps } from './Confirm'
import { Typography } from '../Typography'

export default {
  title: 'Components/Confirm',
  component: Confirm,
} as Meta<PropsWithChildren<ConfirmModalProps>>

const Template: StoryFn<PropsWithChildren<ConfirmModalProps>> = (args) => (
  <Button {...args} onClick={() => confirm(args)}>
    Abrir confirm
  </Button>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Title',
  children: <Typography>Conteudo modal confirmação</Typography>,
  confirm: action('submited'),
}

const fakePromise = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
export const AsyncConfirm = Template.bind({})
AsyncConfirm.args = {
  title: 'Title',
  children: <Typography>Conteudo modal confirmação</Typography>,
  confirm: fakePromise,
}

export const AsyncConfirmRejected = Template.bind({})
AsyncConfirmRejected.args = {
  title: 'Title',
  children: <Typography>Conteudo modal confirmação</Typography>,
  confirm: () =>
    new Promise((_, reject) => {
      setTimeout(reject, 2000)
    }),
}

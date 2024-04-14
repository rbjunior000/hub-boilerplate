import { Meta, StoryFn } from '@storybook/react'
import { PropsWithChildren } from 'react'
import { Button } from '../Button'
import { confirm } from '../Modal/modal-store'
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
}

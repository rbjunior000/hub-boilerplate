import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Modal } from './Modal'
import { Button } from '../Button'
import { openModal } from './modal-store'

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta<typeof Modal>

const ModalExample = (
  <>
    <Modal.Body>CustomModalBoddy</Modal.Body>
    <Modal.Footer>CustomModalFoter</Modal.Footer>
  </>
)

const Template: StoryFn<typeof Modal> = () => (
  <Button onClick={() => openModal({ children: ModalExample, title: 'Titulo' })}>Open modal</Button>
)

export const Default = Template.bind({})
Default.args = {}

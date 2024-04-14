import {
  Dialog,
  DialogActions,
  DialogActionsProps,
  DialogContent,
  DialogContentProps,
  DialogTitle,
  DialogTitleProps,
} from '@mui/material'
import React from 'react'

export type ModalProps = {
  isOpen?: boolean
  title?: string
  onClose?: () => void
  children?: React.ReactNode
}

export const Modal = (props: ModalProps) => (
  <Dialog
    open={!!props.isOpen}
    onClose={() => {
      props.onClose && props.onClose()
    }}
  >
    {props.title && <Modal.Title>{props.title}</Modal.Title>}
    {props.children}
  </Dialog>
)

const ModalTitle = (props: DialogTitleProps) => <DialogTitle {...props} />

const ModalBody = (props: DialogContentProps) => <DialogContent dividers {...props} />

const ModalFooter = (props: DialogActionsProps) => <DialogActions {...props} />

Modal.Body = ModalBody
Modal.Title = ModalTitle

Modal.Footer = ModalFooter

import { LoadingButton } from '@mui/lab'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
} from '@mui/material'
import type { PropsWithChildren } from 'react'
import { useState } from 'react'
import { ButtonProps } from '../Button'
import { closeModal } from '../Modal/modal-store'

export type ConfirmModalProps = {
  isOpen: boolean
  title: string
  confirm?: () => void
  closeModal?: () => void
  confirmText?: string
  cancelText?: string
  confirmButtonProps: Omit<ButtonProps, 'children' | 'onClick'>
  cancelButtonProps: Omit<ButtonProps, 'children' | 'onClick'>
  modalProps: Omit<DialogProps, 'open'>
  onSuccess?: () => void
  onError?: (error: any) => void
}

const BaseConfirmModal = (props: PropsWithChildren<Partial<ConfirmModalProps>>) => {
  const {
    cancelButtonProps,
    confirmButtonProps,
    isOpen,
    modalProps,
    title,
    cancelText,
    children,
    confirm,
    confirmText,
    onError = () => {},
    onSuccess = () => {},
  } = props
  const [loading, setLoading] = useState(false)
  const handleCancel = () => {
    closeModal && closeModal()
  }

  const handleOk = async () => {
    setLoading(true)
    try {
      if (confirm) {
        await confirm()
        // closeModal && closeModal()
        onSuccess()
      }
    } catch (error) {
      onError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={!!isOpen} {...(modalProps || {})}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} {...(cancelButtonProps || {})}>
          {cancelText || 'Cancelar'}
        </Button>
        <LoadingButton
          form="formId"
          loading={loading}
          onClick={handleOk}
          variant="contained"
          {...(confirmButtonProps || {})}
        >
          {confirmText || 'Salvar'}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  )
}

export const Confirm = BaseConfirmModal

import { LoadingButton } from '@mui/lab'
import { Button, DialogProps } from '@mui/material'
import type { PropsWithChildren } from 'react'
import { useState } from 'react'
import { ButtonProps } from '../Button'
import { Modal } from '../Modal'

export type ConfirmModalProps = {
  isOpen?: boolean
  title?: string
  confirm?: () => void
  closeModal?: () => void
  confirmText?: string
  cancelText?: string
  confirmButtonProps?: Omit<ButtonProps, 'children' | 'onClick'>
  cancelButtonProps?: Omit<ButtonProps, 'children' | 'onClick'>
  modalProps?: Omit<DialogProps, 'open'>
  onSuccess?: () => void
  onError?: (error: any) => void
  onClose?: () => void
  formId?: string
}

const BaseConfirmModal = (props: PropsWithChildren<ConfirmModalProps>) => {
  const {
    cancelButtonProps,
    confirmButtonProps,
    cancelText,
    children,
    confirm,
    confirmText,
    onError = () => {},
    onSuccess = () => {},
    onClose = () => {},
    formId,
  } = props
  const [loading, setLoading] = useState(false)
  const handleCancel = () => {
    onClose()
  }

  const handleOk = async () => {
    setLoading(true)
    try {
      if (confirm) {
        await confirm()
        onSuccess()
      }
    } catch (error) {
      onError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button autoFocus onClick={handleCancel} {...(cancelButtonProps || {})}>
          {cancelText || 'Cancelar'}
        </Button>
        <LoadingButton
          form={formId}
          loading={loading}
          onClick={handleOk}
          variant="contained"
          {...(confirmButtonProps || {})}
        >
          {confirmText || 'Salvar'}
        </LoadingButton>
      </Modal.Footer>
    </>
  )
}

export const Confirm = BaseConfirmModal

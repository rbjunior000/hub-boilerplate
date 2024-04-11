import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import type { PropsWithChildren } from 'react'
import { forwardRef, useState } from 'react'
import { LoadingButton } from '@mui/lab'
import { ModalStore, closeModal } from './modal-store'

const BaseModal = (props: PropsWithChildren<ModalStore>) => {
  function isPromises(obj: any) {
    return (
      !!obj &&
      (typeof obj === 'object' || typeof obj === 'function') &&
      typeof obj.then === 'function'
    )
  }

  const [loading, setLoading] = useState(false)
  const isPromise = isPromises(props.confirm)
  const handleCancel = () => {
    closeModal()
  }

  const handleOk = async () => {
    setLoading(true)
    try {
      if (props.confirm) {
        await props.confirm()
      }
    } catch (error) {
      console.error('An error occurred:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      open={props.isOpen}
    >
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent dividers>
        {JSON.stringify(isPromise)}
        {props.children}
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <LoadingButton loading={loading} onClick={handleOk}>
          Salvar
        </LoadingButton>
      </DialogActions>
    </Dialog>
  )
}

export const Modal = forwardRef(BaseModal)

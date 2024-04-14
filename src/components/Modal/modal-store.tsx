import React, { PropsWithChildren } from 'react'
import { create } from 'zustand'
import { Confirm } from '../Confirm'
import type { ConfirmModalProps, ModalProps } from '@/components'

export const useModalStore = create<Record<string, ModalProps>>(() => ({}))

export function openModal(props: Partial<ModalProps>): string {
  const currentState = useModalStore.getState()

  if (!Object.keys(currentState).length) {
    useModalStore.setState({
      1: {
        ...props,
        isOpen: true,
      },
    })
  } else {
    const lastIndex = Object.keys(currentState).length
    useModalStore.setState({
      ...currentState,
      [lastIndex + 1]: {
        ...props,
        isOpen: true,
      },
    })
  }
  const modalAddedKey = Object.keys(useModalStore.getState()).pop()

  return modalAddedKey || '1'
}

export const confirm = (confirmModalProps: PropsWithChildren<ConfirmModalProps>) => {
  const id = openModal({
    ...confirmModalProps,
    children: (
      <Confirm
        {...confirmModalProps}
        onClose={() => {
          confirmModalProps.onClose && confirmModalProps.onClose()
          closeModal()
        }}
      />
    ),
  })
  return id
}

export function closeModal(): void {
  const currentState = useModalStore.getState()
  if (currentState) {
    const lastKey = Object.keys(currentState).pop()
    if (lastKey) {
      delete currentState[lastKey]
      useModalStore.setState({ ...currentState })
    }
  }
}

export const updateModal = (
  id: string,
  props: PropsWithChildren<Partial<ConfirmModalProps>>
): void => {
  const currentState = useModalStore.getState()

  if (!currentState[id]) {
    return
  }

  useModalStore.setState({
    ...currentState,
    [id]: {
      ...currentState[id],
      ...props,
    },
  })
}

import React, { PropsWithChildren } from 'react'
import { create } from 'zustand'
import type { ConfirmModalProps } from '../Confirm'

export type ModalStore = {
  isOpen: boolean
  title?: string
  confirm?: () => void
  children?: string | React.ReactNode
  close?: () => void
}

export const useModalStore = create<Record<string, ModalStore>>(() => ({}))

export function openModal(props: Partial<ModalStore>): string {
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

export const confirm = (
  confirmModalProps: PropsWithChildren<Partial<ConfirmModalProps>>
): string => {
  const id = openModal(confirmModalProps)
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

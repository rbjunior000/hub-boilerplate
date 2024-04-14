import { Modal } from './Modal'
import { useModalStore } from './modal-store'

const ModalProvider = () => {
  const modalStore = useModalStore()
  return (
    <>
      {Object.entries(modalStore).map(([key, modal]) => (
        <Modal key={key} {...modal}>
          {modal.children}
        </Modal>
      ))}
    </>
  )
}

export default ModalProvider

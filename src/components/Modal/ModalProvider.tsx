import { Confirm } from '../Confirm'
import { useModalStore } from './modal-store'

const ModalProvider = () => {
  const modalStore = useModalStore()
  return (
    <>
      {Object.entries(modalStore).map(([key, modal]) => (
        <Confirm key={key} title={modal.title} confirm={modal.confirm} {...modal}>
          {modal.children}
        </Confirm>
      ))}
    </>
  )
}

export default ModalProvider

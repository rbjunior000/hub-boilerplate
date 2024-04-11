import { Alert, AlertProps } from '@mui/material'
import { ExternalToast, toast as SonnerToast } from 'sonner'

export type ToastPropsConfig = {
  duration?: number
  position?: ExternalToast['position']
}

export type ToastProps = {
  variant?: AlertProps['severity']
  message?: string
}

export const toast = (props: ToastProps, config: ToastPropsConfig = {}) => {
  const { message = '', variant = 'info' } = props
  return SonnerToast.custom(
    (toastId) => (
      <Alert severity={variant} onClose={() => SonnerToast.dismiss(toastId)}>
        {message}
      </Alert>
    ),
    config
  )
}

toast.success = (props: Omit<ToastProps, 'variant'>, config: ToastPropsConfig = {}) =>
  toast({ ...props, variant: 'success' }, config)
toast.error = (props: Omit<ToastProps, 'variant'>, config: ToastPropsConfig = {}) =>
  toast({ ...props, variant: 'error' }, config)
toast.warning = (props: Omit<ToastProps, 'variant'>, config: ToastPropsConfig = {}) =>
  toast({ ...props, variant: 'warning' }, config)
toast.info = (props: Omit<ToastProps, 'variant'>, config: ToastPropsConfig = {}) =>
  toast({ ...props, variant: 'info' }, config)

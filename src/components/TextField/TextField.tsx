import { forwardRef } from 'react'
import type { Ref, PropsWithChildren, ChangeEvent } from 'react'
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material'

type TextFieldProps = {
  variant?: MuiTextFieldProps['variant']
  label?: string
  fullWidth?: boolean
  size?: MuiTextFieldProps['size']
  disabled?: boolean
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: boolean
  helperText?: string
}

const BaseTextField = (props: PropsWithChildren<TextFieldProps>, ref: Ref<any>) => {
  const { onChange, value, ...rest } = props

  return <MuiTextField ref={ref} variant="outlined" {...rest} />
}

export const TextField = forwardRef(BaseTextField)

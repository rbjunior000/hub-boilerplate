import { InputAdornment, TextField } from '@mui/material'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { IconButton } from '../IconButton'

type PasswordInputProps = {
  name: string
  renderIcon?: (password: boolean) => JSX.Element
}
export const PasswordInput = ({ name }: PasswordInputProps) => {
  const [show, setShow] = useState(true)
  const { register, formState } = useFormContext()

  return (
    <TextField
      {...register(name)}
      error={!!formState.errors[name]}
      helperText={formState.errors[name]?.message?.toString()}
      type={show ? 'password' : 'text'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton iconName={show ? 'EyeOff' : 'Eye'} onClick={() => setShow(!show)} />
          </InputAdornment>
        ),
      }}
    />
  )
}

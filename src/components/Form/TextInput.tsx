import { TextField } from '@mui/material'
import { useFormContext } from 'react-hook-form'

type TextInputProps = {
  name: string
}
export const TextInput = ({ name }: TextInputProps) => {
  const { register, formState } = useFormContext()

  return (
    <TextField
      {...register(name)}
      error={!!formState.errors[name]}
      helperText={formState.errors[name]?.message?.toString()}
    />
  )
}

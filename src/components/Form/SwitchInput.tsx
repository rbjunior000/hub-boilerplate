import { FormControl, FormControlLabel, FormGroup, FormHelperText, Switch } from '@mui/material'
import { useFormContext } from 'react-hook-form'

type SwitchInputProps = {
  name: string
  label?: string
}
export const SwitchInput = ({ name, label }: SwitchInputProps) => {
  const { register, formState } = useFormContext()

  return (
    <FormControl required component="fieldset" error={!!formState.errors[name]}>
      <FormGroup>
        <FormControlLabel label={label} control={<Switch {...register(name)} />} />
      </FormGroup>
      <FormHelperText>{formState.errors[name]?.message as string}</FormHelperText>
    </FormControl>
  )
}

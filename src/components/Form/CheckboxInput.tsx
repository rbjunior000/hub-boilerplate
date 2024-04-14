import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText } from '@mui/material'
import { useFormContext } from 'react-hook-form'

type CheckboxInputProps = {
  name: string
  label?: string
}
export const CheckboxInput = ({ name, label }: CheckboxInputProps) => {
  const { register, formState } = useFormContext()

  return (
    <FormControl component="fieldset" error={!!formState.errors[name]}>
      <FormGroup>
        <FormControlLabel label={label} control={<Checkbox {...register(name)} />} />
      </FormGroup>
      <FormHelperText>{formState.errors[name]?.message as string}</FormHelperText>
    </FormControl>
  )
}

import { useController, useFormContext } from 'react-hook-form'
import { Select, SelectProps } from '../Select'

type SelectInputProps = {
  name: string
  options: SelectProps['options']
}
export const SelectInput = ({ name, options }: SelectInputProps) => {
  const { formState, control } = useFormContext()

  const { field } = useController({ name, control })

  return (
    <Select
      {...field}
      onChange={(value) => field.onChange({ target: { value }, type: 'change' })}
      options={options}
      error={!!formState.errors[name]}
      helperText={formState.errors[name]?.message?.toString()}
    />
  )
}

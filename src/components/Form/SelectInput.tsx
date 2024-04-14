import { useFormContext } from 'react-hook-form'
import { Select, SelectProps } from '../Select'

type SelectInputProps = {
  name: string
  options: SelectProps['options']
}
export const SelectInput = ({ name, options }: SelectInputProps) => {
  const { register, formState } = useFormContext()

  const field = register(name)

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

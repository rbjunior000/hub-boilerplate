import { DatePicker } from '@mui/x-date-pickers'
import { isValid } from 'date-fns'
import { useController, useFormContext } from 'react-hook-form'

type DateInputProps = {
  name: string
}

export const DateInput = ({ name }: DateInputProps) => {
  const { control, formState } = useFormContext()

  const { field } = useController({
    name,
    control,
  })

  return (
    <DatePicker
      defaultValue={field.value ? new Date(field.value) : null}
      onChange={(date) => {
        field.onChange({
          target: { value: isValid(date) && !!date ? date.toISOString() : null },
          type: 'change',
        })
      }}
      slotProps={{
        textField: {
          error: !!formState.errors[name],
          helperText: formState.errors[name]?.message as string,
        },
      }}
    />
  )
}

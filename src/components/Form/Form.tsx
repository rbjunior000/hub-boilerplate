import { zodResolver } from '@hookform/resolvers/zod'
import type { PropsWithChildren } from 'react'
import { DefaultValues, FieldValues, FormProvider, useForm } from 'react-hook-form'
import { ZodSchema } from 'zod'
import { DateInput } from './DateInput'
import { SelectInput } from './SelectInput'
import { TextInput } from './TextInput'
import { DateTimeInput } from './DateTimeInput'
import { PasswordInput } from './PasswordInput'
import { CheckboxInput } from './CheckboxInput'
import { SwitchInput } from './SwitchInput'

type FormProps<T> = {
  formId: string
  onSubmit: (values: T) => void
  schema?: ZodSchema
  defaultValues: DefaultValues<T>
}

export const Form = <T extends FieldValues>(props: PropsWithChildren<FormProps<T>>) => {
  const { children, onSubmit, formId, schema, defaultValues } = props
  const form = useForm<T>({
    resolver: schema && zodResolver(schema),
    defaultValues,
  })

  return (
    <FormProvider {...form}>
      <form id={formId} onSubmit={form.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}

Form.Text = TextInput
Form.Select = SelectInput
Form.Date = DateInput
Form.DateTime = DateTimeInput
Form.Password = PasswordInput
Form.Switch = SwitchInput
Form.Checkbox = CheckboxInput

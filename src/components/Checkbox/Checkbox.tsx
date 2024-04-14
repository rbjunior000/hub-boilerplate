import { FormControl, FormControlLabel, FormGroup, Checkbox as MuiCheckbox } from '@mui/material'
import type { PropsWithChildren, Ref } from 'react'
import { forwardRef } from 'react'

type CheckboxProps = {
  value: string
  label: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const BaseCheckbox = (props: PropsWithChildren<CheckboxProps>, ref: Ref<any>) => {
  const { label, onChange, value } = props

  return (
    <FormControl component="fieldset" ref={ref}>
      <FormGroup>
        <FormControlLabel
          label={label}
          control={<MuiCheckbox value={value} onChange={onChange} />}
        />
      </FormGroup>
    </FormControl>
  )
}

export const Checkbox = forwardRef(BaseCheckbox)

import { forwardRef } from 'react'
import type { Ref, PropsWithChildren } from 'react'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from '@mui/material'

type MenuItemProps = {
  value: string
  label: string
}

type SelectProps = {
  options: MenuItemProps[]
  value?: string
  onChange?: (value: string) => void
  variant?: MuiSelectProps['variant']
  label?: string
  placeholder?: string
  fullWidth?: boolean
}

const BaseSelect = (props: PropsWithChildren<SelectProps>, ref: Ref<any>) => {
  const { children, onChange, options, label, fullWidth, ...rest } = props

  return (
    <FormControl fullWidth={fullWidth}>
      {label && <InputLabel>{label}</InputLabel>}
      <MuiSelect
        ref={ref}
        label={label}
        onChange={(e) => onChange && onChange(e.target.value)}
        {...rest}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}

export const Select = forwardRef(BaseSelect)

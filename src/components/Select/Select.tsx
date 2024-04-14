import { forwardRef } from 'react'
import type { Ref, PropsWithChildren } from 'react'
import {
  FormControl,
  FormHelperText,
  InputLabel,
  ListItemIcon,
  MenuItem,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from '@mui/material'
import { Icon } from '../Icon'

type MenuItemProps = {
  value: string
  label: string
}

export type SelectProps = {
  options: MenuItemProps[]
  value?: string
  onChange?: (value: string) => void
  variant?: MuiSelectProps['variant']
  label?: string
  placeholder?: string
  fullWidth?: boolean
  error?: boolean
  helperText?: string
}

const BaseSelect = (props: PropsWithChildren<SelectProps>, ref: Ref<any>) => {
  const { children, onChange, options, label, fullWidth, helperText, value, ...rest } = props

  return (
    <FormControl fullWidth={fullWidth}>
      {label && <InputLabel>{label}</InputLabel>}
      <MuiSelect<string>
        ref={ref}
        label={label}
        defaultValue={value}
        sx={{ width: 300 }}
        onChange={(e) => {
          if (value === e.target.value) {
            onChange?.('')
          } else {
            onChange?.(e.target.value)
          }
        }}
        renderValue={(va) => options.find((o) => o.value === va)?.label}
        {...rest}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {value === option.value && (
              <ListItemIcon>
                <Icon name="Check" />
              </ListItemIcon>
            )}
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}

export const Select = forwardRef(BaseSelect)

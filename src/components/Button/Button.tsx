import { forwardRef } from 'react'
import type { Ref, PropsWithChildren } from 'react'
import {
  Button as MuiButton,
  Tooltip,
  TooltipProps,
  ButtonProps as MuiButtonProps,
} from '@mui/material'

export type ButtonProps = {
  tooltip?: string
  tooltipProps?: Pick<TooltipProps, 'placement' | 'arrow'>
  onClick?: (e: any) => void
  variant?: MuiButtonProps['variant']
  type?: MuiButtonProps['type']
}

const BaseButton = (props: PropsWithChildren<ButtonProps>, ref: Ref<any>) => {
  const { children, ...rest } = props

  if (rest.tooltip) {
    return (
      <Tooltip title={rest.tooltip} {...rest.tooltipProps}>
        <MuiButton {...rest}>{children}</MuiButton>
      </Tooltip>
    )
  }

  return (
    <MuiButton ref={ref} variant="contained" {...rest}>
      {children}
    </MuiButton>
  )
}

export const Button = forwardRef(BaseButton)

import { forwardRef } from 'react'
import type { Ref, PropsWithChildren } from 'react'
import { IconButton as MuiIconButton, Tooltip, TooltipProps } from '@mui/material'
import { Icon, IconProps } from '../Icon'

type IconButtonProps = {
  iconName: IconProps['name']
  iconProps?: Omit<IconProps, 'name'>
  tooltip?: string
  tooltipProps?: Omit<Omit<TooltipProps, 'title'>, 'children'>
  onClick?: (e: any) => void
}

const BaseIconButton = (props: PropsWithChildren<IconButtonProps>, ref: Ref<any>) => {
  const { iconName, ...rest } = props

  if (props.tooltip) {
    return (
      <Tooltip title={props.tooltip} {...(props.tooltipProps || {})}>
        <MuiIconButton {...rest}>
          <Icon name={iconName} {...rest.iconProps} />
        </MuiIconButton>
      </Tooltip>
    )
  }

  return (
    <MuiIconButton ref={ref} {...rest}>
      <Icon name={props.iconName} {...rest.iconProps} />
    </MuiIconButton>
  )
}

export const IconButton = forwardRef(BaseIconButton)

import { forwardRef } from 'react'
import type { Ref, PropsWithChildren } from 'react'
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@mui/material'

export type TypographyProps = {
  variant?: MuiTypographyProps['variant']
  color?: MuiTypographyProps['color']
}

const BaseTypography = (props: PropsWithChildren<TypographyProps>, ref: Ref<any>) => {
  const { children, ...rest } = props

  return (
    <MuiTypography ref={ref} {...rest}>
      {children}
    </MuiTypography>
  )
}

export const Typography = forwardRef(BaseTypography)

import { addons } from '@storybook/preview-api'
import React, { useEffect } from 'react'
import { IconButton, Providers } from '../src/components'
import { useModalStore } from '../src/components/Modal/modal-store'
import { useTheme } from '../src/hooks/useTheme'
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode'

const channel = addons.getChannel()

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
  const theme = useTheme() as any

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, theme.handleChangeColor)
    return () => channel.off(DARK_MODE_EVENT_NAME, theme.handleChangeColor)
  }, [channel])

  return <></>
}

export const decorators = [
  (renderStory: any) => {
    return (
      <Providers>
        <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>
        {renderStory()}
      </Providers>
    )
  },
]

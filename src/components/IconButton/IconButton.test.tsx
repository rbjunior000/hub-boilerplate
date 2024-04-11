import React from 'react'
import { render } from '@/test-utils'

import { IconButton } from './IconButton'

describe('IconButton', () => {
  it('renders without crashing', () => {
    render(<IconButton iconName='AArrowDown' />)
    expect(true).toBe(true)
  })
})
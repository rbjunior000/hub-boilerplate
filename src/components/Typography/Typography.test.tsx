import React from 'react'
import { render } from '@/test-utils'

import { Typography } from './Typography'

describe('Typography', () => {
  it('renders without crashing', () => {
    render(<Typography />)
    expect(true).toBe(true)
  })
})
import React from 'react'
import { render } from '@/test-utils'

import { TextField } from './TextField'

describe('TextField', () => {
  it('renders without crashing', () => {
    render(<TextField />)
    expect(true).toBe(true)
  })
})

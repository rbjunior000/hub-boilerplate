import React from 'react'
import { render } from '@/test-utils'

import { Button } from './Button'

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button />)
    expect(true).toBe(true)
  })
})

import React from 'react'
import { render } from '@/test-utils'

import { Toast } from './Toast'

describe('Toast', () => {
  it('renders without crashing', () => {
    render(<Toast />)
    expect(true).toBe(true)
  })
})

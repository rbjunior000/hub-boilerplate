import React from 'react'
import { render } from '@/test-utils'

import { Confirm } from './Confirm'

describe('Confirm', () => {
  it('renders without crashing', () => {
    render(<Confirm />)
    expect(true).toBe(true)
  })
})

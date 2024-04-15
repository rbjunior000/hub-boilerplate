import React from 'react'
import { render } from '@/test-utils'

import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('renders without crashing', () => {
    render(<Checkbox />)
    expect(true).toBe(true)
  })
})

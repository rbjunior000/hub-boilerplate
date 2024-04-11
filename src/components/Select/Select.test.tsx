import React from 'react'
import { render } from '@/test-utils'

import { Select } from './Select'

describe('Select', () => {
  it('renders without crashing', () => {
    render(<Select options={[]} />)
    expect(true).toBe(true)
  })
})

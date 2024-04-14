import React from 'react'
import { render } from '@/test-utils'

import { Form } from './Form'

describe('Form', () => {
  it('renders without crashing', () => {
    render(<Form />)
    expect(true).toBe(true)
  })
})
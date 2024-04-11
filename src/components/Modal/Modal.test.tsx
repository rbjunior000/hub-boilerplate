import React from 'react'
import { render } from '@/test-utils'

import { Modal } from './Modal'

describe('Modal', () => {
  it('renders without crashing', () => {
    render(<Modal />)
    expect(true).toBe(true)
  })
})
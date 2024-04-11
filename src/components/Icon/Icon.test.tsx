import { render, screen } from '@/test-utils'
import { Icon } from './Icon'

describe('Icon', () => {
  it('renders the correct icon', () => {
    render(<Icon name="Check" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})

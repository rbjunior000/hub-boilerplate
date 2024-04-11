import { render, screen, fireEvent } from '@/test-utils'
import { Dropdown, DropdownItem } from './Dropdown'

const onClickLogout = jest.fn()

const items: DropdownItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: 'LayoutDashboard',
  },
  {
    label: 'Profile',
    href: '/profile',
    icon: 'User',
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: 'Settings',
  },
  {
    label: 'Logout',
    onClick: onClickLogout,
    icon: 'LogOut',
  },
]

describe('Dropdown component', () => {
  it('renders the dropdown menu with correct items', () => {
    render(<Dropdown items={items} icon="AArrowDown" />)

    expect(screen.getByLabelText('dropdown-icon-trigger')).toBeInTheDocument()

    fireEvent.click(screen.getByLabelText('dropdown-icon-trigger'))

    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
  })

  it('calls onClick when an item without href is clicked', () => {
    render(<Dropdown items={items} icon="AArrowDown" />)

    fireEvent.click(screen.getByLabelText('dropdown-icon-trigger'))
    fireEvent.click(screen.getByText('Logout'))

    expect(onClickLogout).toHaveBeenCalled()
  })

  it('navigates to the correct href when an item with href is clicked', async () => {
    render(<Dropdown items={items} icon="AArrowDown" />)

    fireEvent.click(screen.getByLabelText('dropdown-icon-trigger'))
    const link = screen.getByRole('menuitem', { name: 'Profile' })

    expect(link).toHaveAttribute('href', '/profile')
  })
})

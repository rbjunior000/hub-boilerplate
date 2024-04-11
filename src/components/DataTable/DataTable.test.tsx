/* eslint-disable jest/no-focused-tests */
import { render, screen, fireEvent } from '@/test-utils'
import { DataTable } from './DataTable'
import { TableColumn } from './types'

type UserData = {
  name: string
  id: string
}

const onSearchChange = jest.fn()
const onClickRow = jest.fn()

const onClickEdit = jest.fn()
const onClickDelete = jest.fn()

describe('DataTable component', () => {
  const columns: TableColumn<UserData>[] = [
    {
      key: 'id',
      title: 'Age',
    },
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'actions',
      title: 'Ações',
      actions: [
        {
          icon: 'Pencil',
          label: 'Edit',
          onClick: onClickEdit,
        },
        {
          icon: 'Delete',
          label: 'Delete',
          onClick: onClickDelete,
        },
      ],
    },
  ]

  const data: UserData[] = [
    { name: 'John', id: '25' },
    { name: 'Jane', id: '30' },
  ]

  beforeEach(() => {})

  it('renders the table with correct columns', () => {
    render(
      <DataTable
        primaryKey="id"
        columns={columns}
        data={data}
        total={2}
        defaultFilters={{}}
        onSearchChange={onSearchChange}
        onClickRow={onClickRow}
        isLoading={false}
      />
    )
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Age')).toBeInTheDocument()
    expect(screen.getByText('Ações')).toBeInTheDocument()
  })

  it('renders the table with correct data', () => {
    render(
      <DataTable
        primaryKey="id"
        columns={columns}
        data={data}
        total={2}
        defaultFilters={{}}
        onSearchChange={onSearchChange}
        onClickRow={onClickRow}
        isLoading={false}
      />
    )
    expect(screen.getByText('John')).toBeInTheDocument()
    expect(screen.getByText('25')).toBeInTheDocument()
    expect(screen.getByText('Jane')).toBeInTheDocument()
    expect(screen.getByText('30')).toBeInTheDocument()
  })

  it('calls onSearchChange when search term changes', () => {
    render(
      <DataTable
        primaryKey="id"
        columns={columns}
        data={data}
        total={2}
        defaultFilters={{}}
        onSearchChange={onSearchChange}
        onClickRow={onClickRow}
        isLoading={false}
      />
    )
    const searchInput = screen.getByPlaceholderText('Buscar')
    fireEvent.change(searchInput, { target: { value: 'John' } })
    setTimeout(() => {
      expect(onSearchChange).toHaveBeenCalledWith({ page: 0, pageSize: 10, term: 'John' })
    }, 1000)
  })

  it('calls onClickRow when a row is clicked', () => {
    render(
      <DataTable
        primaryKey="id"
        columns={columns}
        data={data}
        total={2}
        defaultFilters={{}}
        onSearchChange={onSearchChange}
        onClickRow={onClickRow}
        isLoading={false}
      />
    )
    screen.getByText('John').closest('td')?.click()
    expect(onClickRow).toHaveBeenCalledWith({ name: 'John', id: '25' })
  })

  it('shows actions when action trigger are pressed', () => {
    render(
      <DataTable
        primaryKey="id"
        columns={columns}
        data={data}
        total={2}
        defaultFilters={{}}
        onSearchChange={onSearchChange}
        onClickRow={onClickRow}
        isLoading={false}
      />
    )
    const actionTrigger = screen.getAllByLabelText('dropdown-icon-trigger')
    fireEvent.click(actionTrigger[0] as Element)
    expect(screen.getByText('Edit')).toBeInTheDocument()
    screen.getByText('Edit').closest('button')?.click()
    expect(screen.getByText('Delete')).toBeInTheDocument()
    screen.getByText('Delete').closest('button')?.click()

    expect(onClickEdit).toHaveBeenCalledWith(data[0])

    expect(onClickDelete).toHaveBeenCalledWith(data[0])
  })
})

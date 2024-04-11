import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { DataTable } from '@/components'
import type { TableProps, TableColumn } from '@/components'

type User = { id: string; name: string }

const columns: TableColumn<User>[] = [
  { key: 'id', title: 'Id' },
  { key: 'name', title: 'Nome' },
  {
    key: 'actions',
    title: 'Ações',
    actions: [
      {
        label: 'Editar',
        icon: 'Pencil',
        onClick: action('edit'),
      },
      {
        label: 'Excluir',
        icon: 'Delete',
        onClick: action('delete'),
      },
    ],
  },
]

const data: User[] = [
  { id: '1', name: 'João' },
  { id: '2', name: 'Maria' },
  { id: '3', name: 'José' },
]

export default {
  title: 'Components/DataTable',
  component: DataTable,
  args: {
    columns,
    data,
    primaryKey: 'id',
    total: 30,
    defaultFilters: { page: 0, pageSize: 10 },
    onSearchChange: action('filters'),
    isLoading: false,
    onClickRow: action('clickRow'),
  },
} as Meta

const Template: StoryFn<TableProps<User>> = (args: TableProps<User>) => <DataTable {...args} />

export const Default = Template.bind({})
Default.args = {}

export const EmptyState = Template.bind({})
EmptyState.args = { data: [], total: 0 }

'use client'

import React, { useMemo, useState } from 'react'
import { useDebouncedValue } from '@mantine/hooks'
import {
  Checkbox,
  IconButton,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material'
import { useWatch } from '@/hooks'
import { TableProps, TableColumn, Dropdown, Icon } from '@/components'

const EmptyState = () => (
  <TableCell colSpan={5} align="center">
    Nenhum registro encontrado
  </TableCell>
)

export const DataTable = <T,>({
  columns,
  data,
  primaryKey,
  total,
  defaultFilters,
  onSearchChange,
  onClickRow,
  isLoading,
}: TableProps<T>) => {
  const [page, setPage] = useState(Number(defaultFilters?.page) + 1 || 1)
  const [pageSize] = useState(defaultFilters?.pageSize || 10)
  const [term, setTerm] = useState(defaultFilters?.term || '')
  const [debounced] = useDebouncedValue(term, 1000)
  const [selection, setSelection] = useState<string[]>([])

  const filters = useMemo(
    () => ({ page: page - 1, pageSize, term: debounced }),
    [page, pageSize, debounced]
  )

  useWatch(() => {
    onSearchChange(filters)
  }, [filters])

  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    )

  const toggleAll = () =>
    setSelection((current) =>
      current.length === data.length ? [] : data.map((item) => String(item[primaryKey]))
    )

  const renderActions = (item: T) => {
    if (columns.some((column) => column.key === 'actions')) {
      const { actions } = columns.find(({ key }) => key === 'actions') as TableColumn<T, 'actions'>
      return (
        <Dropdown
          items={actions.map((props) => ({
            label: props.label,
            icon: props.icon,
            onClick: () => props.onClick(item),
            href: props.href,
          }))}
        >
          {() => (
            <IconButton>
              <Icon name="MoveVertical" />
            </IconButton>
          )}
        </Dropdown>
      )
    }
    return null
  }

  const rows = data.map((item, index) => {
    const selected = selection.includes(String(item[primaryKey]))
    return (
      <TableRow key={index}>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onChange={() => toggleRow(String(item[primaryKey]))} />
        </TableCell>
        {columns.map((column) => (
          <TableCell
            key={String(column.key)}
            onClick={(e) => {
              e.stopPropagation()
              onClickRow && onClickRow(item)
            }}
            style={{ cursor: onClickRow ? 'pointer' : undefined }}
            align={column.key === 'actions' ? 'right' : undefined}
          >
            {column.key === 'actions'
              ? renderActions(item)
              : column.customRender
                ? column.customRender(item)
                : (item[column.key as keyof T] as React.ReactNode)}
          </TableCell>
        ))}
      </TableRow>
    )
  })

  return (
    <>
      <TableContainer component={Paper}>
        <TextField
          placeholder="Buscar"
          fullWidth
          size="small"
          InputProps={{
            endAdornment: <Icon name="Search" />,
          }}
          value={term}
          onChange={(event) => setTerm(event.currentTarget.value)}
        />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  onChange={toggleAll}
                  checked={selection.length === data.length && !!selection.length}
                  indeterminate={!!selection.length && selection.length !== data.length}
                />
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.title}
                  style={{ textAlign: column.key === 'actions' ? 'right' : undefined }}
                >
                  {column.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{rows.length ? rows : !isLoading && <EmptyState />}</TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={columns.length + 1}>
                <Pagination
                  page={page}
                  onChange={(ev, p) => setPage(p)}
                  count={Math.round((total || 0) / filters.pageSize) || 0}
                />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  )
}

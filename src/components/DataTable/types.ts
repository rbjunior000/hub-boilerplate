import { IconProps } from '@/components'

type TableActions<T> = {
  icon: IconProps['name']
  onClick: (item: T) => void
  label: string
  href?: string
}[]

export type TableColumn<T, K = keyof T | 'actions'> = K extends 'actions'
  ? {
      key?: K
      title: string
      actions: TableActions<T>
      customRender?: (item: T) => React.ReactNode
    }
  : {
      key?: K
      title: string
      customRender?: (item: T) => React.ReactNode
    }

export type DefaultFilters = {
  pageSize: number
  page: number
  term: string
}

export type TableProps<T> = {
  columns: TableColumn<T>[]
  data: T[]
  primaryKey: keyof T
  total?: number
  onSearchChange: (filters: DefaultFilters) => void
  defaultFilters?: Partial<DefaultFilters>
  onClickRow?: (item: T) => void
  isLoading?: boolean
}

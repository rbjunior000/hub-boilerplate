import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import {
  LocalizationProvider,
  LocalizationProviderProps,
  MuiPickersAdapter,
} from '@mui/x-date-pickers'
import { ptBR } from 'date-fns/locale/pt-BR'

export type DateFnsProviderProps<TDate extends Date> = Omit<
  LocalizationProviderProps<TDate, any>,
  'dateAdapter'
> & {
  dateAdapter?: new (...args: any) => MuiPickersAdapter<TDate>
}

export default function DateFnsProvider({ children, ...props }: DateFnsProviderProps<Date>) {
  const { dateAdapter, ...localizationProps } = props
  return (
    <LocalizationProvider
      dateAdapter={dateAdapter || AdapterDateFns}
      adapterLocale={ptBR}
      {...localizationProps}
    >
      {children}
    </LocalizationProvider>
  )
}

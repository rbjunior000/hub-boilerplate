import { format, addDays, addHours, subDays, subHours } from 'date-fns'

export { dateFormater }

const dateFormater = () => ({
  format,
  addDays,
  subDays,
  addHours,
  subHours,
})

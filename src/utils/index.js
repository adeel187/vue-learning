import { isToday, isYesterday, format } from 'date-fns'

export function formatDate(createAt) {
  const date = new Date(createAt)
  if (isToday(date)) {
    return 'Today'
  } else if (isYesterday(date)) {
    return 'Yesterday'
  } else {
    return format(date, 'dd MMMM')
  }
}

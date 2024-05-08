export const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]
export const levelColors = {
  0: 'grey',
  1: 'lightgreen',
  2: 'green',
  3: 'darkgreen',
  4: 'darkestgreen'
}

const formatDate = dateString => {
  const date = new Date(dateString)
  const options = { month: 'short', day: '2-digit' }
  return date.toLocaleDateString('en-US', options)
}

const calculateGridPosition = date => {
  const row = date.getDay()
  const column = Math.floor((date - new Date(date.getFullYear(), 0, 1)) / (1000 * 60 * 60 * 24) / 7)
  return { row, column }
}

export { formatDate, calculateGridPosition }

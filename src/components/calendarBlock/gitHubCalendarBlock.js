import React from 'react'
import { calculateGridPosition, formatDate, levelColors } from '@/utils'
import styles from './style.module.css'

const GitHubCalendarBlock = ({ contribution: { count, level, date } }) => {
  const formattedDate = formatDate(date)
  const { row, column } = calculateGridPosition(new Date(date))
  const color = levelColors[level]

  return (
    <div
      className={`${styles.githubCalendarBlock} ${styles[color]}`}
      title={` ${count} contribution on ${formattedDate} `}
      style={{ gridColumn: `${column + 1}`, gridRow: `${row + 1}` }}
    />
  )
}

export default GitHubCalendarBlock

'use client'
import React, { useState, useEffect } from 'react'
import { monthNames } from '@/utils'
import styles from './style.module.css'
import GitHubCalendarBlock from '../calendarBlock/gitHubCalendarBlock'
import { fetchGitHubData } from '@/services/githubActivity.service'

const GitHubCalendar = () => {
  const [contributions, setContributions] = useState([])
  const [totalCommits, setTotalCommits] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGitHubData()
        const contributionsData = data.contributions
        setContributions(contributionsData)
        setTotalCommits(data.total.lastYear)
      } catch (error) {
        setError(error.message)
      }
    }

    fetchData()
  }, [])

  return (
    <div className={styles.githubCalendarContainer}>
      <div className={styles.blockContainer}>
        <div className={styles.monthNames}>
          {monthNames.map((month, index) => (
            <div key={index} className='month-name'>
              {month}
            </div>
          ))}
        </div>
        <div className={styles.githubCalendar}>
          {contributions.map((contribution, index) => (
            <GitHubCalendarBlock key={index} contribution={contribution} />
          ))}
        </div>
        <div className='mt-4'>
          <p>
            Total Commits in Year 2024: <strong>{totalCommits}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default GitHubCalendar

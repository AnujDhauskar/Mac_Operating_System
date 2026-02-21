import React, { useEffect, useState } from 'react'

const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

const formatDateTime = (date) => {
  const dayName = DAYS[date.getDay()]
  const monthName = MONTHS[date.getMonth()]
  const dayOfMonth = date.getDate()

  const hours24 = date.getHours()
  const period = hours24 >= 12 ? 'pm' : 'am'
  const hours12 = hours24 % 12 || 12
  const minutes = String(date.getMinutes()).padStart(2, '0')

  return `${dayName} ${monthName} ${dayOfMonth} ${hours12}:${minutes} ${period}`
}

const DateTime = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return <span>{formatDateTime(now)}</span>
}

export default DateTime

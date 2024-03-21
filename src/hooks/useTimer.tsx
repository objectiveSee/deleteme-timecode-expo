import { useEffect, useState } from 'react'

import { formatTime } from '../utilities/date'

const TIMER_INTERVAL = 50

export const useTimer = (startDate: Date) => {
  const [time, setTime] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now() - startDate.getTime())
    }, TIMER_INTERVAL)
    return () => { clearInterval(interval) }
  }, [startDate])

  return time
}

export const useTimerFormatted = (startDate: Date) => {
  const time = useTimer(startDate)
  return formatTime(time)
}
import { useEffect, useState } from 'react'

const TIMER_INTERVAL = 50
const FRAMES_PER_SECOND = 60

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
  const date = new Date(time)
  const frames = Math.floor((date.getUTCMilliseconds() / 1000) * FRAMES_PER_SECOND)
  const formattedTime = `${date.getUTCHours().toString().padStart(2, '0')}:${date.getUTCMinutes().toString().padStart(2, '0')}:${date.getUTCSeconds().toString().padStart(2, '0')}:${frames.toString().padStart(2, '0')}`
  return formattedTime
}
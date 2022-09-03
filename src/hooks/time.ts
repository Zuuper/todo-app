import { useState } from 'react'

export default function useDate (): Date {
  const [ date, setDate ] = useState(new Date())
  const updateTime = (): void => {
    setDate(new Date())
  }
  setInterval(updateTime, 1000)

  return date
}

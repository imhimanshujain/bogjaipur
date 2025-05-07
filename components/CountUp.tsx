'use client'
import { useState, useEffect } from 'react'

export default function CountUp({ end, duration = 1 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const totalFrames = Math.round(duration * 60)
    const increment = end / totalFrames
    let frame = 0
    function updateCount() {
      frame++
      start += increment
      if (frame < totalFrames) {
        setCount(Math.floor(start))
        requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }
    updateCount()
  }, [end, duration])

  return <>{count}</>
}

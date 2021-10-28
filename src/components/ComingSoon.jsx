import React, { useState, useRef, useEffect } from 'react'

/* Styles */
import { CountdownContainer, CountdownTimer, CounterText, CounterNumbersBox, CounterNumbers, CountdownTitleContainer, CountdownTitle, CounterNumbersContainer } from '@styles/ComingSoonStyles'

export const ComingSoon = () => {
  const [timeDays, setTimerDays] = useState('00')
  const [timeHours, setTimerHours] = useState('00')
  const [timeMinutes, setTimerMinutes] = useState('00')
  const [timeSeconds, setTimerSeconds] = useState('00')

  let interval = useRef()

  const startTimer = () => {
    const countdownDate = new Date('Nov 30, 2021 00:00:00').getTime()
    interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current)
      } else {
        // update timer
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    }, 1000)
  }

  // componentDidMont
  useEffect(() => {
    startTimer()
    return () => {
      clearInterval(interval.current)
    }
  })

  return (
    <CountdownContainer>
      <CountdownTimer>
        <CountdownTitleContainer>
          <CountdownTitle>COMING<br />SOON</CountdownTitle>
        </CountdownTitleContainer>
        <CounterNumbersContainer>
          <CounterNumbersBox>
            <CounterNumbers>{timeDays}</CounterNumbers>
            <CounterText>Days</CounterText>
          </CounterNumbersBox>
          <CounterNumbersBox>
            <CounterNumbers>{timeHours}</CounterNumbers>
            <CounterText>Hours</CounterText>
          </CounterNumbersBox>
          <CounterNumbersBox>
            <CounterNumbers>{timeMinutes}</CounterNumbers>
            <CounterText>Minutes</CounterText>
          </CounterNumbersBox>
          <CounterNumbersBox>
            <CounterNumbers><small>{timeSeconds}</small></CounterNumbers>
            <CounterText>Seconds</CounterText>
          </CounterNumbersBox>
        </CounterNumbersContainer>
      </CountdownTimer>
    </CountdownContainer>
  )
}

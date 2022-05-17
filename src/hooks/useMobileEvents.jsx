import { useState } from 'react'

export const useMobileEvents = () => {
  /* const [leftMove, setLeftMove] = useState(false)
  const [rightMove, setRightMove] = useState(false)
  const [upMove, setUpMove] = useState(false)
  const [downMove, setDownMove] = useState(false) */

  const [move, setMove] = useState({
    moved: '',
    startX: 0,
    startY: 0,
    movingX: 0,
    movingY: 0
  })

  const setStart = (e) => {
    setMove({
      ...move,
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY
    })
  }
  const setMoving = (e) => {
    setMove({
      ...move,
      movingX: e.touches[0].clientX,
      movingY: e.touches[0].clientY
    })
  }
  const setDir = () => {
    const dif = 100
    console.log(move)
    if (move.startX + dif < move.movingX) {
      setMove({ ...move, moved: 'right' })
    } else if (move.startX - dif > move.movingX) {
      setMove({ ...move, moved: 'left' })
    } else if (move.startY + dif < move.movingY) {
      setMove({ ...move, moved: 'down' })
    } else if (move.startY - dif > move.movingY) {
      setMove({ ...move, moved: 'up' })
    } else {
      setMove({ ...move, moved: 'not moved' })
    }
  }

  const events = { onTouchStart: setStart, onTouchMove: setMoving, onTouchEnd: setDir }

  return [move, events, setMove]
}

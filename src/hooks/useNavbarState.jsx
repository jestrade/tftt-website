import { useState } from 'react'

const useNavbarState = () => {
  const [navState, setState] = useState(false)

  const changeNav = (valueLocation) => {
    valueLocation === '/gallery' ? setState(true) : setState(false)
  }

  return { navState, changeNav }
}
export default useNavbarState

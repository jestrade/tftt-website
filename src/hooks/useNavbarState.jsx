import { useState } from 'react'

const useNavbarState = () => {
  const [navState, setState] = useState(false)

  const changeNav = (valueLocation) => {
    console.log(`set state nav to ${valueLocation}`)
    valueLocation === '/gallery' ? setState(true) : setState(false)
  }

  return { navState, changeNav }
}
export default useNavbarState

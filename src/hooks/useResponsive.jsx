
import { css } from 'styled-components'

export const cssResponsive = (type = 'Desktop15', isMin = false) => {
  const screens = {
    Mobile: '768px',
    MobileNav: '1240px',
    Desktop13: '1400px',
    Desktop15: '1830px'
  }
  if (!isMin) {
    return (
      css`@media only screen and (max-width:${screens[type]})`
    )
  }
  return (
    css`@media screen and (min-width: ${screens[type]})`
  )
}

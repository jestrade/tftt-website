
import { css } from 'styled-components'

export const cssResponsive = (type = 'Desktop15') => {
  const screens = {
    Mobile: '768px',
    Desktop13: '1024',
    Desktop15: '1400px'
  }

  return (
    css`@media only screen and (max-width:${screens[type]})`
  )
}

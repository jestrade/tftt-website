import { css } from 'styled-components'

/**
 * For standard breakpoints use range, othewise use display value
 * @param {*} display min-width value or range key
 * @returns css media query
 */
export const ResponsiveTo = (display = 'Desktop13') => {
  const range = {
    // Tablet: '768px',
    Tablet: '760px',
    Desktop13: '1024px',
    Desktop15: '1200px',
    Desktop22: '1680px'
  }
  return (css`@media only screen and (min-width: ${range[display] || display} )`)
}

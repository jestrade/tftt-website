import { css, keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`

const leftKeyFrames = keyframes`
  from{
    
    left:-200px;
    opacity:0;
  }
  to{
    
    left:0;
    opacity:1;
  }
`

const rightKeyFrames = keyframes`
  from{
    right:-200px;
    opacity:0;
  }
  to{
    right:0;
    opacity:1;
  }
`

export const fadeIn = ({ time = '3s', type = 'ease' } = {}) => css`
  animation: ${time} ${fadeInKeyframes} ${type};
`

export const slideAnimate = ({ time = '3s', type = 'ease', direction = 'left' } = {}) =>
  direction === 'left'
    ? css`animation: ${time} ${leftKeyFrames} ${type};`
    : css`animation: ${time} ${rightKeyFrames} ${type};`

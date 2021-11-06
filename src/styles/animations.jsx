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
const loadingKeyFrames = keyframes`
  from{
    transform:rotate(0deg)
  }
  to{
    transform:rotate(359deg)
  }
`

const upNav = keyframes`
  from{
    bottom:0px;
    opacity:1;
  }
  to{
    bottom:970px;
    opacity:0;
    
  }
`
const downNav = keyframes`
  from{
    bottom:970px;
    opacity:0;
    
  }
  to{
    bottom:0px;
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

export const loadingAnimate = ({ time = '3s', type = 'ease' } = {}) => css`
  animation: ${time} ${loadingKeyFrames} ${type};
`

export const hiddenNavAnimate = ({ time = '3s', type = 'ease' } = {}) => css`
   animation: ${time} ${upNav} ${type};
   animation-fill-mode: forwards;
`

export const showNavAnimate = ({ time = '3s', type = 'ease' } = {}) => css`
   animation: ${time} ${downNav} ${type};
   animation-fill-mode: forwards;
`

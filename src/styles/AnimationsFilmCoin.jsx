import { keyframes, css } from 'styled-components'

const vibrateKeyframe = () => {
  let cssCode = ''
  let flag = true
  const steps = 10
  for (let i = 0; i <= 100;) {
    cssCode += `${i}%{transform:rotate(${flag ? '10deg' : '-10deg'});}`
    i = i + steps
    flag = !flag
  }
  return keyframes`${cssCode}`
}
const TextScrollKeyFrame = keyframes`
  from{
    transform:translateX(120%)
  }
  to{
    transform:translateX(-120%)
  }
`
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
const getBubbleKeyFrame = () => { // code for create path of bubbles
  const sec = (2 * Math.PI) / 8
  const parts = (100 / 9)
  let css = '0%{transform: translate( 40px,0);}'
  for (let i = 1; i <= 8; i++) {
    const X = 40 * Math.cos(sec * i) * (0.2 + Math.random())
    const Y = 40 * Math.sin(sec * i) * (0.2 + Math.random())
    // eslint-disable-next-line no-const-assign
    css += `${parts * i}%{transform: translate( ${X}px,${Y}px)}`
  }
  css += '100%{transform: translate( 40px,0);}'

  const bubbleKeyFrame = keyframes`${css}`
  return bubbleKeyFrame
}

export const fadeInAnimation = ({ time = '3s', type = 'ease' } = {}) => css`
  animation: ${time} ${fadeInKeyframes} ${type};
`

export const TextScrollAnimation = ({ time = '5s', type = 'linear' } = {}) => css`
  animation: ${time} ${TextScrollKeyFrame} ${type} infinite; 
`

export const BubbleAnimation = ({ time = '5s', type = 'linear' } = {}) => css`
  animation: ${time} ${getBubbleKeyFrame()} ${type} infinite; 
`
export const vibrateAnimation = ({ time = '1s', type = 'linear' } = {}) => css`
animation: ${time} ${vibrateKeyframe()} ${type} ; 
`

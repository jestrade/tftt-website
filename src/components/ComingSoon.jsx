import React from 'react'

/* Styles */
import { CountdownContainer, CustomButtonTitle, CountdownTitleContainer, CountdownTitle } from '@styles/ComingSoonStyles'

export const ComingSoon = (props) => {
  return (
    <CountdownContainer>
      <CountdownTitleContainer>
        <CountdownTitle>COMING SOON</CountdownTitle>
        <CustomButtonTitle>{props.name}</CustomButtonTitle>
      </CountdownTitleContainer>
    </CountdownContainer>
  )
}

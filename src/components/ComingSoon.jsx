import React from 'react'

/* Styles */
import { CountdownContainer, CustomButtonTitle, CountdownTitleContainer, CountdownTitle } from '@styles/ComingSoonStyles'

export const ComingSoon = (props) => {
  return (
    <CountdownContainer>
      <CountdownTitleContainer>
        <CountdownTitle>COMING<br />SOON</CountdownTitle>
        <CustomButtonTitle>{props.name}</CustomButtonTitle>
      </CountdownTitleContainer>
    </CountdownContainer>
  )
}

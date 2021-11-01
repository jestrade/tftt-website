import React from 'react'

/* Styles */
import { CountdownContainer, CustomButtonTitle, CountdownTimer, CountdownTitleContainer, CountdownTitle } from '@styles/ComingSoonStyles'

export const ComingSoon = (props) => {
  return (
    <CountdownContainer>
      <CountdownTimer>
        <CountdownTitleContainer>
          <CountdownTitle>COMING<br />SOON</CountdownTitle>
          <CustomButtonTitle>{props.name}</CustomButtonTitle>
        </CountdownTitleContainer>
      </CountdownTimer>
    </CountdownContainer>
  )
}

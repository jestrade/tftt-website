import React, { useState } from 'react'

// Styles
import {
  Section,
  Container,
  Icon,
  TextBox,
  BoxMins,
  MinContainer,
  Description,
  BackButton,
  Loading,
  Center,
  CheckImage,
  LoadingImage

} from '@styles/PopUpRegistrationStyles.jsx'

// Icons

import checkLogo from '@icons/checkLogo.png'

export const PopUpRegistration = () => {
  const [finishUpload, setFinishUpload] = useState(false)

  return (
    <Section>
      <Container>
        <Icon>
          <Loading>
            {finishUpload
              ? <img src={checkLogo} alt='check logo' />
              : <Center />}
          </Loading>
        </Icon>
        <TextBox>
          {finishUpload
            ? <>
              <h1>MESSAGE SENT</h1>
              <p>
                We will get back to you as soon as possible,
                you attached files are up and ready too review.
              </p>
              {/* eslint-disable-next-line react/jsx-closing-tag-location */}
            </>
            : <>
              <h1>UPLOADING FILES</h1>
              <p>
                Your files are being uploaded hold up a second,
                you can check them below.
              </p>
              {/* eslint-disable-next-line react/jsx-closing-tag-location */}
            </>}

        </TextBox>
        <hr />
        <BoxMins>
          <MinContainer>
            <img src='https://picsum.photos/200/300' alt='' />
            {finishUpload
              ? <CheckImage />
              : <LoadingImage />}
          </MinContainer>
          <MinContainer>
            <img src='https://picsum.photos/200/300' alt='' />
            {finishUpload
              ? <CheckImage />
              : <LoadingImage />}
          </MinContainer>
          <MinContainer>
            <img src='https://picsum.photos/200/300' alt='' />
            {finishUpload
              ? <CheckImage />
              : <LoadingImage />}
          </MinContainer>
          <MinContainer>
            <img src='https://picsum.photos/200/300' alt='' />
            {finishUpload
              ? <CheckImage />
              : <LoadingImage />}
          </MinContainer>
        </BoxMins>
        <Description>
          {finishUpload ? 'Attached files' : 'Loading...'}
        </Description>
        {finishUpload && <BackButton>  Back </BackButton>}

      </Container>
    </Section>
  )
}

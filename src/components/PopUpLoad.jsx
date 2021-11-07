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
  LoadingImage,
  NameFile

} from '@styles/PopUpLoadStyles.jsx'

// Icons

import checkLogo from '@icons/checkLogo.png'

export const PopUpLoad = () => {
  const [finishUpload, setFinishUpload] = useState(true)

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
            <NameFile> My_song_drill.mp3</NameFile>
            <div>
              {finishUpload
                ? <CheckImage />
                : <LoadingImage />}
            </div>
          </MinContainer>
          <MinContainer>
            <NameFile> This is my first music video.mp4</NameFile>
            <div>
              {finishUpload
                ? <CheckImage />
                : <LoadingImage />}
            </div>
          </MinContainer>
          <MinContainer>
            <NameFile> My freestyle music session.mp3</NameFile>
            <div>
              {finishUpload
                ? <CheckImage />
                : <LoadingImage />}
            </div>
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

import React, { useState } from 'react'
import { Container, ImgContainer, Section, TextBox, Button, BoxButtons } from '@styles/GeneralCardStyles'

export default (props) => {
  const [showButtons, setShowButtons] = useState(true)
  const HandleOnClick = (e) => {
    e.preventDefault()
    setShowButtons(false)
  }
  return (
    <Section>

      <Container>
        <ImgContainer bgImg={props.bgImg} />
        <TextBox>
          <h1>{props.question}</h1>
          <div>
            {
              showButtons
                ? <BoxButtons>
                  <Button onClick={HandleOnClick}>
                    <span> Yes </span>
                  </Button>

                  {/* eslint-disable-next-line react/jsx-indent */}
                  </BoxButtons>
                : <p>{props.text}</p>
            }

          </div>
        </TextBox>
      </Container>
    </Section>
  )
}

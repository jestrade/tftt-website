import React, { useState } from 'react'

// Styles
import {
  Section,
  Image,
  Container,
  Form,
  Input,
  Text,
  InputLetUs,
  CheckInput,
  ButtonsContainer,
  SendButton,
  AttachFileButton,
  ButtonTerms,
  Hr
} from '@styles/ContactFormStyles'

// Images
import imgForm from '@images/contactFormImage.png'

// Icons
import iconMessageCheck from '@icons/messageCheck.png'
import iconFolder from '@icons/folder.png'

export const ContactForm = () => {
  const [checkBox, setCheckBox] = useState(false)
  const handleCheck = (e) => {
    e.preventDefault()
    setCheckBox(!checkBox)
  }
  return (

    <Section>
      <Container>
        <Text>
          <p> What’s up?</p>
          <p>Wanna talk with us? Let us know the deal and we will message you shortly.</p>
        </Text>
        <Hr />
        <Form>
          <Input>
            <label htmlFor=''> Contact Mail</label>
            <input type='text' placeholder='Enter email address' />
          </Input>
          <Input>
            <label htmlFor=''>Subjet</label>
            <input type='text' placeholder='Wath´s up?  ' />
          </Input>
          <InputLetUs>
            <label htmlFor=''> Let us know</label>
            <textarea type='text' placeholder='Message' />
          </InputLetUs>
          <CheckInput>
            <ButtonTerms onClick={handleCheck}>
              <div style={{ width: 21, height: 21, borderRadius: '50%', padding: 3, backgroundColor: 'white' }}>
                {checkBox
                  ? <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#F13D3C' }} />
                  : <div />}
              </div>
              <div style={{ marginLeft: 10, color: 'white', fontSize: 16 }}>
                I agree to terms & conditions
              </div>
            </ButtonTerms>
          </CheckInput>
          <ButtonsContainer>
            <SendButton type='submit'>
              <img src={iconMessageCheck} alt='message check icon ' /> <span>Send</span>
            </SendButton>
            <AttachFileButton href='#'>
              <img src={iconFolder} alt='folder icon' /><span>Attach file</span>
            </AttachFileButton>
          </ButtonsContainer>
        </Form>
      </Container>
      <Image>
        <img src={imgForm} alt='man with mask image' />
      </Image>
    </Section>

  )
}

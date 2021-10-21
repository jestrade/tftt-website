import React from 'react'

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

  Hr
} from '@styles/ContactFormStyles'

// Images
import imgForm from '@images/contactFormImage.png'

// Icons

import iconMessageCheck from '@icons/messageCheck.png'
import iconFolder from '@icons/folder.png'

export const ContactForm = () => {
  return (

    <Section>
      <Container>
        <Text>
          <p>What’s up?</p>
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
            <input id='checkTerms' type='radio' />
            <div className='radioBox' />
            <label for='checkTerms'>I agree to terms & conditions</label>
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

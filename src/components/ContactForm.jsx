import React, { useState } from 'react'

// Styles
import {
  Contact,
  Image,
  FormContainer,
  Form,
  Input,
  Text,
  InputLetUs,
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
    <Contact>
      <FormContainer>
        <Text>
          <h1> What’s up?</h1>
          <p>Wanna talk with us? Let us know the deal and we will message you shortly.</p>
        </Text>
        <Hr />
        <Form>
          <Input>
            <label htmlFor=''>Contact Mail*</label>
            <input type='text' placeholder='Enter email address' />
          </Input>
          <Input>
            <label htmlFor=''>Subjet</label>
            <input type='text' placeholder="What's up?" />
          </Input>
          <InputLetUs>
            <label htmlFor=''> Let us know</label>
            <textarea type='text' placeholder='Message' />
          </InputLetUs>
          <ButtonTerms onClick={handleCheck}>
            <div>
              {checkBox
                ? <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#F13D3C' }} />
                : <div />}
            </div>
            <p>
              I agree to terms &amp; conditions
            </p>
          </ButtonTerms>
          <ButtonsContainer>
            <SendButton type='submit'>
              <img src={iconMessageCheck} alt='message check icon ' /> <span>Send</span>
            </SendButton>
            <AttachFileButton href='#'>
              <img src={iconFolder} alt='folder icon' /><span>Attach file</span>
            </AttachFileButton>
          </ButtonsContainer>
        </Form>
      </FormContainer>
      <Image>
        <img src={imgForm} alt='man with mask image' />
      </Image>
    </Contact>
  )
}

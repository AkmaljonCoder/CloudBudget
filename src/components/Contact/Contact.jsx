import React from 'react'
import { CenterDiv, ContactDiv, FormDiv, LeftDiv, Main, MuiBtn, MuiInp, NameInp, Names, Pitag, RightDiv, Title } from './style'

const Contact = () => {
  return (
    <Main>
      <CenterDiv>
        <LeftDiv>
          <ContactDiv>
            <Title>Contact</Title>
            <br /><br />
            <Pitag>Questions or concerns? Just fill out the form below and our support Questions or concerns? Questions or concerns? team will get back to you within 24 hours</Pitag>
          </ContactDiv>
        </LeftDiv>
        <RightDiv>
          <FormDiv>
            <Names>
              <NameInp label="First name" variant="outlined"/>
              <NameInp label="Last name" variant="outlined"/>
            </Names>
            <MuiInp label="Phone Number" variant="outlined" />
            <MuiInp label="Select Service" variant="outlined" />
            <MuiBtn variant='contained' >Submit Now</MuiBtn>
          </FormDiv>
        </RightDiv>
      </CenterDiv>
    </Main>
  )
}

export default Contact
import React from 'react'
import { CenterDiv, ContactDiv, FormDiv, LeftDiv, Main, MuiBtn, MuiInp, NameInp, Names, Pitag, RightDiv, Title } from './style'

const Contact = (props) => {
  return (
    <Main>
      <CenterDiv>
        <LeftDiv>
          <ContactDiv>
            <Title>{props.language==='usa'?'Contact':'Контакт'}</Title>
            <br /><br />
            <Pitag>{props.language==='usa'?'Questions or concerns? Just fill out the form below and our support Questions or concerns? Questions or concerns? team will get back to you within 24 hours':'Вопросы или опасения? Просто заполните форму ниже, и наша поддержка Вопросы или проблемы? Вопросы или опасения? команда свяжется с вами в течение 24 часов'}</Pitag>
          </ContactDiv>
        </LeftDiv>
        <RightDiv>
          {
            props.language==='usa'?
            <FormDiv>
            <Names>
              <NameInp label="First name" variant="outlined"/>
              <NameInp label="Last name" variant="outlined"/>
            </Names>
            <MuiInp label="Phone Number" variant="outlined" />
            <MuiInp label="Select Service" variant="outlined" />
            <MuiBtn variant='contained' >Submit Now</MuiBtn>
            </FormDiv>
            :
            <FormDiv>
            <Names>
              <NameInp label="Имя" variant="outlined"/>
              <NameInp label="Фамилия" variant="outlined"/>
            </Names>
            <MuiInp label="Номер телефона" variant="outlined" />
            <MuiInp label="Выберите услугу" variant="outlined" />
            <MuiBtn variant='contained' >Отправить</MuiBtn>
            </FormDiv>
          }
        </RightDiv>
      </CenterDiv>
    </Main>
  )
}

export default Contact
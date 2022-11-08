import React from 'react'
import { BottomDiv, Box, CenterDiv, ImgIcons, InfoDiv, Main, Number, Paragraf, Title, TopDiv } from './style'

//import img
import CloudImg from './Image/Cloud.png'
import SecureImg from './Image/Secure.png'
import PDFImg from './Image/Pdf.png'
import CSVImg  from './Image/Csv.png'

const Technology = () => {
  return (
    <Main>
      <CenterDiv>
        <TopDiv>Technology</TopDiv>
        <BottomDiv>
          <Box>
            <Number>01</Number>
            <InfoDiv>
              <ImgIcons src={CloudImg} />
              <Title>Cloud Storage</Title>
              <Paragraf>Access your account from anywhere in the world on any device</Paragraf>
            </InfoDiv>
          </Box>
          <Box>
            <Number>02</Number>
            <InfoDiv>
              <ImgIcons src={SecureImg} />
              <Title>Secure</Title>
              <Paragraf>All your information is stored on secure cloud servers</Paragraf>
            </InfoDiv>
          </Box>
          <Box>
            <Number>03</Number>
            <InfoDiv>
              <ImgIcons src={PDFImg} />
              <Title>PDF Download</Title>
              <Paragraf>Download any of your reports in PDF format</Paragraf>
            </InfoDiv>
          </Box>
          <Box>
            <Number>04</Number>
            <InfoDiv>
              <ImgIcons src={CSVImg} />
              <Title>CSV Download</Title>
              <Paragraf>All your information is stored on secure cloud servers</Paragraf>
            </InfoDiv>
          </Box>
        </BottomDiv>
      </CenterDiv>
    </Main>
  )
}

export default Technology
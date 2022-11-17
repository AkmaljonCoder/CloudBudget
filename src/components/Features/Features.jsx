import React from 'react'
import { BottomDiv, Box, Card, CenterDiv, Conteyner, Img, InfoDiv, Main, MoreText, Paragraph, Title, TopDiv } from './style'

/// Import Image
import BG1 from './Image/Bg1.png'
import BG2 from './Image/Bg2.png'
import BG3 from './Image/B3.png'

const Features = () => {
  return (
    <Main>
      <CenterDiv>
        <TopDiv>Features</TopDiv>
        <BottomDiv>
          <Conteyner>
            <Card>
              <Img src={BG1} />
              <Box>
                <Title>Supports All Currencies and Cards</Title>
                <Paragraph>We support all popular currencies and is fully customizable to add</Paragraph>
                <MoreText>More Info</MoreText>
              </Box>
            </Card>
            <Card>
            <Img src={BG2} />
            <Box>
                <Title>Manage your expenses on the go</Title>
                <Paragraph>You can access your account from anywhere in the world on any device</Paragraph>
                <MoreText>More Info</MoreText>
              </Box>
            </Card>
            <Card>
            <Img src={BG3} />
            <Box>
                <Title>Cloud Budget Management Software</Title>
                <Paragraph>Our software is made so you can access and manage your budget</Paragraph>
                <MoreText>More Info</MoreText>
              </Box>
            </Card>
          </Conteyner>
        </BottomDiv>
      </CenterDiv>
    </Main>
  )
}

export default Features
import React from 'react'
import styled, { CenterDiv, Hadding1, ImageDiv, Img, InfoDiv, LeftDiv, Main, MoreText, Paragraph, RightDiv } from './style'

// Import Img
import TeamImg from './Image/TeamImage.png'


const Video = () => {
  return (
    <Main>
      <CenterDiv>
        <LeftDiv>
          <InfoDiv>
            <Hadding1>Easy to Use Cloud Budget Management Software</Hadding1>
            <br />
            <Paragraph>
              Our software is made so you can access and manage your budget and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spending patterns and budget at a glance. Read below to find out more.
            </Paragraph>
            <MoreText>Learn More</MoreText>
          </InfoDiv>
        </LeftDiv>
        <RightDiv>
          <ImageDiv>
            <Img src={TeamImg} />
          </ImageDiv>
        </RightDiv>
      </CenterDiv>
    </Main>

  )
}

export default Video
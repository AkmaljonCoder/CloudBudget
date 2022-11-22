import React from 'react'
import styled, { CenterDiv, Img, InfoDiv, LeftDiv, Main,  MoreText,  Paragraphs,  RightDiv, Title, VideoDiv } from './style'

// Import Img
import TeamImg from './Image/TeamImage.png'


const Video = () => {
  return (
    <Main>
      <CenterDiv>
        <LeftDiv>
          <InfoDiv>
            <Title>Easy to Use Cloud Budget Management Software</Title>
            <Paragraphs>Our software is made so you can access and manage your budget and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spending patterns and budget at a glance. Read below to find out more.</Paragraphs>
            <MoreText>Learn More</MoreText>
          </InfoDiv>
        </LeftDiv>
        <RightDiv>
          <VideoDiv>
            <Img src={TeamImg} />
          </VideoDiv>
        </RightDiv>
      </CenterDiv>
    </Main>

  )
}

export default Video
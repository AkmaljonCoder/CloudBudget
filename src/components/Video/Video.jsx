import React from 'react'
import styled, { CenterDiv, Img, InfoDiv, LeftDiv, Main,  MoreText,  Paragraphs,  RightDiv, Title, VideoDiv } from './style'

// Import Img
import TeamImg from './Image/TeamImage.png'


const Video = (props) => {
  return (
    <Main>
      <CenterDiv>
        <LeftDiv>
          <InfoDiv>
            <Title>{props.language==='usa'?'Easy to Use Cloud Budget Management Software':'Простое в использовании программное обеспечение для управления "Cloud Budget"'}</Title>
            <Paragraphs>{props.language==='usa'?'Our software is made so you can access and manage your budget and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spending patterns and budget at a glance. Read below to find out more.':'Наше программное обеспечение создано для того, чтобы вы могли получать доступ к своему бюджету и расходам онлайн и управлять ими в любое время с любого устройства. Он предоставляет подробные отчеты о доходах и расходах с графиками, чтобы вы могли легко увидеть свои схемы расходов и бюджет с первого взгляда. Читайте ниже, чтобы узнать больше.'}</Paragraphs>
            <MoreText>{props.language==='usa'?'Learn More':'Узнать больше'}</MoreText>
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
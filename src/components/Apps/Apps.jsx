import React from 'react'
import { CenterDiv, Icons, IconsDiv, Img1, Img2, ImgDiv, LeftDiv, Main, MainImg, Paragraf, RightDiv, TextDiv, Title } from './style'

//Import Image
import PlayMarket from './Image/Playmarket.png'
import AppStore from './Image/AppStore.png'
import Windows from './Image/Windows.png'
import BG1 from './Image/BgImg1.png'
import BG2 from './Image/BgImg2.png'
import Imagee from './Image/Imagee.png'

const Apps = () => {
  return (
    <Main>
      <CenterDiv>
        <LeftDiv>
          <TextDiv>
            <Title>Stay focused on saving money</Title>
            <Paragraf>It is important to stay focused on saving money in any way you can. We help you monitor your spending habits so you can easily spot and cut any unnecessary expenses. Simply join today to get started!</Paragraf>
            <IconsDiv>
              <Icons src={PlayMarket} />
              <Icons src={AppStore} />
              <Icons src={Windows} />
            </IconsDiv>
          </TextDiv>
        </LeftDiv>
        <RightDiv>
          <ImgDiv>
            <Img1 src={BG1} />
            <Img2 src={BG2} />
            <MainImg src={Imagee} />
          </ImgDiv>
        </RightDiv>
      </CenterDiv>
    </Main>
  )
}

export default Apps
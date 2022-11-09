import React from 'react'
import { CenterDiv, Main,FooterDiv, Box, Category, Info, Image, PoweredBy, Br} from './style'


//Import img
import Social from './Img/SocialMedia.png'
import Pey from './Img/Pey.png'

const Footer = () => {
  return (
    <Main>
      <CenterDiv>
        <FooterDiv>
          <Box>
            <Category>Address</Category>
            <Info>
              Pipang Ltd, Griva Digeni, <br />
              81-83 Jacovides Tower, 1st Floor <br />
              1090 Picosia USA <br />
            </Info>
          </Box>
          <Box>
            <Category>Services</Category>
            <Info>
              overview <Br />
              features <Br />
              technology <Br />
              Terms & Conditions <Br />
              Privecy <Br />
            </Info>
          </Box>
          <Box>
            <Category>Get in Touch</Category>
            <Info>
            info@cloudbudget.com <br/>
            +1 844-721-7120 <br/>
            <Image src={Social} />
            </Info>
          </Box>
          <Box>
            <Category>We Support</Category>
            <Info>
              <Image src={Pey} />
            </Info>
          </Box>
        </FooterDiv>
        <PoweredBy>© 2022 Farohiddin and Akmal</PoweredBy>
      </CenterDiv>
    </Main>
  )
}

export default Footer
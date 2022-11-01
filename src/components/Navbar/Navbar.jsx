import React from 'react'
import { Button, Container, LangSwitch, LinkDiv, Logo, ThirdDiv, Wrapper } from './style'

import DownIcon from '@mui/icons-material/KeyboardArrowDown';

import LogoImg from '../../assets/Navbar/Logo.png'
import Flag from '../../assets/Navbar/Flag.svg'

const Navbar = () => {
  return (
    <Wrapper>
        <Container>
            <Logo src={LogoImg} />
            <LinkDiv>
                <h2>overview</h2>
                <h2>features</h2>
                <h2>technology</h2>
                <h2>contact</h2>
                <h2>sign up</h2>
            </LinkDiv>
            <ThirdDiv>
                <LangSwitch>
                    <img src={Flag} alt="" />
                    <h3>ENG</h3>
                    <DownIcon/>
                </LangSwitch>
                <Button>LOGIN</Button>
            </ThirdDiv>
        </Container>
    </Wrapper>
  )
}

export default Navbar
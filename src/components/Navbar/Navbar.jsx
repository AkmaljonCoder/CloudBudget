import React,{useState , useEffect} from 'react'
import { Button, Container, LangSwitch, LinkDiv, Logo, ThirdDiv, Wrapper } from './style'

import {BurgerSpin as Burger} from 'react-burger-icons' // react burger icon

import DownIcon from '@mui/icons-material/KeyboardArrowDown';

import LogoImg from '../../assets/Navbar/Logo.png'
import Flag from '../../assets/Navbar/Flag.svg'

const Navbar = () => {

    const [isClosed, setIsClosed] = useState(false);

    const toggleClosed = ( ) => setIsClosed(!isClosed);

    const [show, setShow] = useState(false);

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
                <LangSwitch> {/* language switcher */}
                    <button className='dropbtn'>Dropdown</button>
                    <div id='myDropdown'>
                        <a>Home</a>
                        <a>About</a>
                        <a>Contact</a>
                    </div>
                </LangSwitch>
                <Button>LOGIN</Button>
                <div onClick={toggleClosed}>
                    <Burger isClosed={isClosed} />
                </div>
            </ThirdDiv>
        </Container>
    </Wrapper>
  )
}

export default Navbar
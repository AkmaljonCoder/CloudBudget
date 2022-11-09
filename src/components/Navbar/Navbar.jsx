import React,{useState} from 'react'
import { Button, Container, LangSwitch, LinkDiv, Logo, Menus, ThirdDiv, Wrapper } from './style'

import {BurgerSpin as Burger} from 'react-burger-icons' // react burger icon

import DownIcon from '@mui/icons-material/ArrowDropDown';

import LogoImg from '../../assets/Navbar/Logo.png'
import Usa from '../../assets/Navbar/usa.png'
import Russia from '../../assets/Navbar/russia.png'

const Navbar = ({language,setLanguage}) => {

    const [isClosed, setIsClosed] = useState(false);

    const toggleClosed = ( ) => setIsClosed(!isClosed);

    const [show, setShow] = useState(false);

  return (
    <Wrapper>
        <Container>
            <Logo src={LogoImg} />
            {
                language === 'usa' ?
                <LinkDiv>
                    <h2>overview</h2>
                    <h2>features</h2>
                    <h2>technology</h2>
                    <h2>contact</h2>
                    <h2>sign up</h2>
                </LinkDiv>
                :
                <LinkDiv>
                    <h2>обзор</h2>
                    <h2>Особенности</h2>
                    <h2>технологии</h2>
                    <h2>контакт</h2>
                    <h2>регистрация</h2>
                </LinkDiv>
            }
            <ThirdDiv>
                <LangSwitch className={`${show===true? 'show' : ''}`}> {/* language switcher */}
                    <button className='swt-btn' onClick={()=>setShow(!show)}>
                        <img src={language==='usa'? Usa : Russia} alt="" />
                        <h2>{language==='usa'? 'en' : 'ru'}</h2>
                        <DownIcon className='down-ic'/>
                    </button>
                    <div className='swt-menu'>
                        <div
                        onClick={()=>{setShow(false);setLanguage(language==='usa'? 'russia' : 'usa')}}
                        className='swt-lang'
                        >
                            <img src={language==='usa'? Russia : Usa} alt="" />
                            <h2>{language==='usa'? 'ru' : 'en'}</h2>
                        </div>
                    </div>
                </LangSwitch>
                {
                    language === 'usa' ?
                    <Button>login</Button>
                    :
                    <Button>регистрация</Button>
                }
                <div onClick={toggleClosed}>
                    <Burger isClosed={isClosed} />
                </div>
            </ThirdDiv>
                <Menus className={`${isClosed===true? 'show-menu' : ''}`}>
                    {
                        language === 'usa' ?
                        <>
                            <h2 style={{animationDelay:'0.1s'}}>overview</h2>
                            <h2 style={{animationDelay:'0.2s'}}>features</h2>
                            <h2 style={{animationDelay:'0.3s'}}>technology</h2>
                            <h2 style={{animationDelay:'0.4s'}}>contact</h2>
                            <h2 style={{animationDelay:'0.5s'}}>sign up</h2>
                        </>
                        :
                        <>
                            <h2 style={{animationDelay:'0.1s'}}>обзор</h2>
                            <h2 style={{animationDelay:'0.2s'}}>Особенности</h2>
                            <h2 style={{animationDelay:'0.3s'}}>технологии</h2>
                            <h2 style={{animationDelay:'0.4s'}}>контакт</h2>
                            <h2 style={{animationDelay:'0.5s'}}>регистрация</h2>
                        </>
                    }
                    <div className='line'></div>
                    <div className='language'>
                        <h1 onClick={()=>setLanguage('usa')}>en</h1>
                        <h1 onClick={()=>setLanguage('russia')}>ru</h1>
                        <div className={`${language==='usa'? 'lang-usa' : 'lang-rus'}`}></div>
                    </div>
                </Menus>

        </Container>
    </Wrapper>
  )
}

export default Navbar
import React from 'react'
import { Container, Image, Texts } from './style'
import Imagee from '../../assets/Video.png'

const Video = () => {
  return (
    <Container>
      <Texts>
        <h2>Easy to Use Cloud Budget Management Software</h2>
        <p>
        Our software is made so you 
        can access and manage your budget 
        and expenses online at any time from 
        any device. It provides detailed income 
        and expense reports with graphs so you can 
        easilly see your spending patterns and budget 
        at a glance. Read below to find out more.
        </p>
        <button>Learn More</button>
      </Texts>
      <Image src={Imagee}/>
    </Container>
  )
}

export default Video
import React,{useState} from 'react'
import './App.css'
// Components

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Video from './components/Video/Video'
import Features from './components/Features/Features'
import Technology from './components/Technology/Technology'
import Apps from './components/Apps/Apps'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {

  const [language, setLanguage] = useState('usa');

  return (
    <>
      <Navbar
      language={language}
      setLanguage={setLanguage}
      />
      <Home
      language={language}
      />
      <Video
      language={language}
      />
      <Features 
      language={language}
      />
      <Technology
      language={language}
      />
      <Apps
      language={language}
      />
      <Contact
      language={language}
      />
      <Footer
      language={language}
      />
    </>
  )
}

export default App
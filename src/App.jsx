import React,{useState} from 'react'

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

  const [language, setLanguage] = useState('')

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
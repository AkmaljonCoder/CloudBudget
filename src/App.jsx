import React,{useState} from 'react'

// Components

import Navbar from './components/Navbar/Navbar'

const App = () => {

  const [language, setLanguage] = useState('')

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
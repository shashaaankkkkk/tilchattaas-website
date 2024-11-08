import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Home from './components/Home'
import Brands from './components/Logo'
import Integration from './components/Integrations'
import Features from './components/Features'
import HowItWorks from './components/Works'
import Testi from './components/Testi'
import Action from './components/Action'
import TeamSection from './components/Team'
import RotatingSkills from './components/GhumtiChakri'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

   <Home/>

   <Brands></Brands>
   <Integration></Integration>
   <HowItWorks/>
    <Testi/>
    <TeamSection/>

    </>
  )
}

export default App

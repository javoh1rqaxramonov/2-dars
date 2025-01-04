import React from 'react'
import HelloWorld from './components/Helloworld'
import AnimalGAllery from './components/AnimalGallery'
import ColorList from './components/ColorList'
import WeekDays from './components/WeekDays'
import GreetingCard from './components/GreetingCard'
import SeasonColors from './components/SeasonColors'
import SimpleMenu from './components/SimpleMenu'
import FamousCities from './components/FamousCities'
import './App.css'
function App() {
  return (
    <div className='main'>
        <HelloWorld/>
        <AnimalGAllery/>
        <ColorList/>
        <WeekDays/>
        <GreetingCard/>
        <FamousCities/>
        <SeasonColors/>
        <SimpleMenu/>
    </div>
  )
}


export default App
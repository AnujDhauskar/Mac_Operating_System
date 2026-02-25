import { useState } from 'react'
import './app.scss' 
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/Windows/Github'
import Note from './components/Windows/Note'
import Resume from './components/Windows/Resume'
import Spotify from './components/Windows/Spotify'
import Cli from './components/Windows/Cli'


function App() {


  return (
  <main>
    <Nav/>
    <Dock />
    <Github/> 
    <Note/>
    <Resume/>
    <Spotify/>
    <Cli/>
  </main> 
  )
}

export default App

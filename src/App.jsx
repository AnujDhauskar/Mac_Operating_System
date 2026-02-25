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
  const [windowsState, setwindowsState] = useState({
    github: false,
    Note: false,
    Resume: false,
    Spotify: false,
    Cli: false
  })

  return (
  <main>
    <Nav/>
    <Dock windowsState = {windowsState} setWindowsState = {setwindowsState}/>
    {windowsState.github && <Github windowName = 'github'  setWindowsState = {setwindowsState}/>}
    {windowsState.Note && <Note windowName = 'Note'  setWindowsState = {setwindowsState}/>}
    {windowsState.Resume && <Resume windowName = 'Resume'  setWindowsState = {setwindowsState}/>}
    {windowsState.Spotify && <Spotify windowName = 'Spotify'  setWindowsState = {setwindowsState}/>}
    {windowsState.Cli && <Cli windowName = 'Cli'  setWindowsState = {setwindowsState}/>}
  </main> 
  )
}

export default App

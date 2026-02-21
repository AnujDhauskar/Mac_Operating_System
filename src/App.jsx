import { useState } from 'react'
import './app.scss' 
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './components/Windows/MacWindow'


function App() {


  return (
  <main>
    <Nav/>
    <Dock />
    <MacWindow>
      <h1>hello world</h1>
    </MacWindow>
  </main> 
  )
}

export default App

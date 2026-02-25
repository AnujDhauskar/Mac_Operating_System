import React from 'react'
import "./dock.scss"
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Dock = ({windowsState, setWindowsState}) => {
  return (
    <div>
      <footer className='dock'>
        <div 
        onClick={()=>{ setWindowsState(state =>({...state, github:true}))}}
        className="icon github"><img src="/public/doc-icons/github.svg" alt="" /></div>

        <div 
        onClick={()=>{ setWindowsState(state =>({...state, Note:true}))}}
        className="icon note"><img src="/public/doc-icons/note.svg" alt="" /></div>

        <div 
        onClick={()=>{ setWindowsState(state =>({...state, Resume:true}))}}
        className="icon pdf"><img src="/public/doc-icons/pdf.svg" alt="" /></div>

        <div 
        onClick={()=>{window.open("https://calender.google.com", "_blank")}}
        className="icon calender"><img src="/public/doc-icons/calender.svg" alt="" /></div>

        <div 
        onClick={()=>{ setWindowsState(state =>({...state, Spotify:true}))}}
        className="icon spotify"><img src="/public/doc-icons/spotify.svg" alt="" /></div>

        <div 
        onClick={()=>{window.open("mailto:anujdhauskar64@gmail.com", "_blank")}}
        className="icon mail"><img src="/public/doc-icons/mail.svg" alt="" /></div>

        <div 
        onClick={()=>{window.open("https://www.linkedin.com/in/anuj-dhauskar/", "_blank")}}
        className="icon link"><img src="/public/doc-icons/link.svg" alt="" /></div>

        <div 
        onClick={()=>{ setWindowsState(state =>({...state, Cli:true}))}}
        className="icon cli"><img src="/public/doc-icons/cli.svg" alt="" /></div>
      </footer>
    </div>
  )
}

export default Dock

// import { useState } from 'react'
import './App.css'
import MainMenu from './components/MainMenu'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-center bg-[url('src/assets/background.gif')]">
      <MainMenu/>
    </div>
  )
}

export default App
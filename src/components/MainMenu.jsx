// import { useState } from 'react'
// import './MainMenu.css'
import nbaLogo from '../assets/nba.svg'

function DifficultyButton({difficulty}) {
  return (
    <button className="hover:underline text-2xl">{difficulty}</button>
  )
}

function MainMenu() {
  return (
    <div className="flex flex-col items-center justify-center space-y-16 border-4 border-black p-16 bg-white">
      <div className='flex items-center'>
        <img src={nbaLogo} alt="NBA Logo" className='size-8'/>
        <h1 className="text-3xl font-bold">NBA Matching Game</h1>
      </div>

      <div className='flex flex-col items-center'>
        <h2 className="underline text-2xl font-bold">Pick Difficulty</h2>
        <span className="space-x-4">
          <DifficultyButton difficulty={"Easy"}/>
          <DifficultyButton difficulty={"Medium"}/>
          <DifficultyButton difficulty={"Hard"}/>
        </span>
      </div>
    </div>
  )
}

export default MainMenu
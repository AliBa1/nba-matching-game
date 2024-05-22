// import { useState } from 'react'
// import './MainMenu.css'
import nbaLogo from '../assets/nba.svg'
import Button from './Button';

function MainMenu({ setDifficulty, setGameState }) {
  function handleClick(difficulty) {
    setDifficulty(difficulty);
    setGameState('game');
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-12 border-4 border-black p-16 bg-white">
      <div className='flex items-center'>
        <img src={nbaLogo} alt="NBA Logo" className='size-8'/>
        <h1 className="text-3xl font-bold">NBA Matching Game</h1>
      </div>

      <div className='flex flex-col items-center'>
        <h2 className="underline text-2xl font-bold">Pick Difficulty</h2>
        <span className="space-x-4">
          <Button onClick={() => handleClick('Easy')} text={"Easy"}/>
          <Button onClick={() => handleClick('Medium')}  text={"Medium"}/>
          <Button onClick={() => handleClick('Hard')}  text={"Hard"}/>
        </span>
      </div>
    </div>
  )
}

export default MainMenu
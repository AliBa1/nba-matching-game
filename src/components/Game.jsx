// import { useState } from 'react'
// import './Game.css'

function Game({currentRound, totalRounds, score, bestScore}) {
  return (
    // <div className="flex flex-col items-center justify-center space-y-12 border-4 border-black p-16 bg-white">
    //   Hello, World!
    // </div>
    
    <div className="text-center text-4xl font-bold text-white p-8 space-y-8">
      <h1>Round {currentRound}/{totalRounds}</h1>
      <h1>Cards</h1>
      <h1>Score: {score}</h1>
      <h1>Best Score: {bestScore}</h1>
    </div>
  )
}

export default Game
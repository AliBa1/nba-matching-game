// import { useState } from 'react'
// import './Game.css'

import Card from "./Card"

function Game({currentRound, totalRounds, score, bestScore, players}) {
  console.log("Players: ", players);
  // console.log("Player: ", players[0]);
  const playerCards = players.map((player, index) => 
    <div key={player.name + index}>
      <Card name={player.name} image={player.image}/>
    </div>
  )
  return (
    // <div className="flex flex-col items-center justify-center space-y-12 border-4 border-black p-16 bg-white">
    //   Hello, World!
    // </div>
    
    <div className="text-center text-4xl font-bold text-white p-8 space-y-8">
      <h1>Round {currentRound}/{totalRounds}</h1>
      {/* <div className="flex flex-wrap border place-content-center"> */}
      <div className="grid grid-cols-5 gap-4 place-content-center">
        {/* <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/> */}
        {playerCards}
      </div>

      <h1>Score: {score}</h1>
      <h1>Best Score: {bestScore}</h1>
    </div>
  )
}

export default Game
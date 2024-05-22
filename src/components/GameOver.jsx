// import { useState } from "react";
import Button from "./Button"
import lostGIF from '../assets/GiannisLose.gif'
import wonGIF from '../assets/ThunderWin.gif'

function GameOver({ result, bestScore, setGameState }) {
  console.log(result);
  return (
    <div className="flex flex-col items-center space-y-12 border-4 border-black p-8 bg-white">
      <h1 className="text-3xl font-bold">{result == "won" ? 'You Won!':'You Lost!'}</h1>

      <img src={result == "won" ? wonGIF:lostGIF} alt="GIF" />

      <h1 className="text-3xl">Your High Score: {bestScore}</h1>
      <div className='flex flex-col space-y-2'>
        <Button onClick={() => {setGameState('game')}} text={"Play Again"}/>
        <Button onClick={() => {setGameState('menu')}} text={"Change Difficulty"}/>
      </div>
    </div>
  )
}

export default GameOver
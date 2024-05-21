import { useState, useEffect } from 'react'
import './App.css'
import MainMenu from './components/MainMenu'
import Game from './components/Game'
import Card from './components/Card'
import GameOver from './components/GameOver'
import FetchData from './components/FetchData'

function App() {
  function setRounds(difficulty) {
    switch (difficulty) {
      case 'Easy':
        return 5;
      case 'Medium':
        return 10;
      case 'Hard':
        return 15;
      default:
        return 0;
    }
  }


  const [bestScores, setBestScores] = useState({Easy: 0, Medium: 0, Hard: 0});

  function setSettings(difficulty) {
    switch (difficulty) {
      case 'Easy':
        return {totalRounds: 5, bestScore: bestScores.Easy};
      case 'Medium':
        return {totalRounds: 10, bestScore: bestScores.Medium};
      case 'Hard':
        return {totalRounds: 15, bestScore: bestScores.Hard};
      default:
        return 0;
    }
  }

  const [gameState, setGameState] = useState('menu');
  const [difficulty, setDifficulty] = useState('');
  const [currentRound, setCurrentRound] = useState(1);
  const totalRounds = (gameState == 'game' ? (setSettings(difficulty).totalRounds):0);
  const bestScore = setSettings(difficulty).bestScore;


  useEffect(() => {
    // console.log(difficulty);
    // console.log(gameState);
  }, [difficulty, gameState]);

  let test = 0;
  if (test == 0) {
    // FetchData();
    test = 1;
  }

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-center bg-[url('src/assets/background.gif')]">
    <div className="flex flex-col items-center justify-center min-h-screen bg-cloudy">
      {gameState == 'menu' ? <MainMenu setDifficulty={setDifficulty} setGameState={setGameState}/>:<></>}
      {gameState == 'game' ? <Game currentRound={currentRound} totalRounds={totalRounds} score={0} bestScore={bestScore}/>:<></>}
      {gameState == 'gameOver' ? <GameOver/>:<></>}
      {/* <Card/> */}
    </div>
  )
}

export default App
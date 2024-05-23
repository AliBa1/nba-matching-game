import { useState, useEffect } from 'react'
import './App.css'
import MainMenu from './components/MainMenu'
import Game from './components/Game'
import GameOver from './components/GameOver'
import getPlayers from './components/GetPlayers'

function App() {
  const [players, setPlayers] = useState([]);
  const [gameSettings, setGameSettings] = useState('');
  const score = (gameSettings && gameSettings.score);
  const currentRound = (gameSettings && gameSettings.currentRound);
  const totalRounds = (gameSettings && gameSettings.totalRounds);
  const bestScore = (gameSettings != '' ? gameSettings.bestScore:0);
  const [loading, setLoading] = useState('');
  const [gameState, setGameState] = useState('menu');
  const [difficulty, setDifficulty] = useState('');
  const [result, setResult] = useState('playing');

  function setGameVars(difficulty) {
    switch (difficulty) {
      case 'Easy':
        getPlayers(5, setPlayers, setLoading);
        setGameSettings({score: 0, currentRound: 1, totalRounds: 5, bestScore: bestScore});
        break;
      case 'Medium':
        getPlayers(10, setPlayers, setLoading);
        setGameSettings({score: 0, currentRound: 1, totalRounds: 10, bestScore: bestScore});
        break;
      case 'Hard':
        getPlayers(15, setPlayers, setLoading);
        setGameSettings({score: 0, currentRound: 1, totalRounds: 15, bestScore: bestScore});
        break;
      default:
        return 0;
    }
  }

  useEffect(() => {
    console.log("Difficulty: ", difficulty);
    console.log("Game State: ", gameState);
    if (gameState == 'game') {
      setGameVars(difficulty);
    }
  }, [difficulty, gameState]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cloudy">
      {gameState == 'menu' ? <MainMenu setDifficulty={setDifficulty} setGameState={setGameState}/>:<></>}
      {gameState == 'game' ? <Game score={score} currentRound={currentRound} totalRounds={totalRounds} bestScore={bestScore} result={result} setGameSettings={setGameSettings} 
                                    players={players} setPlayers={setPlayers} loading={loading} setGameState={setGameState} setResult={setResult}/>:<></>}
      {gameState == 'gameOver' ? <GameOver result={result} bestScore={bestScore} setGameState={setGameState}/>:<></>}
    </div>
  )
}

export default App
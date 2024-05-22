import { useState, useEffect } from 'react'
import './App.css'
import MainMenu from './components/MainMenu'
import Game from './components/Game'
import Card from './components/Card'
import GameOver from './components/GameOver'
import getPlayers from './components/GetPlayers'

function App() {
  const [bestScores, setBestScores] = useState({Easy: 0, Medium: 0, Hard: 0});
  const [players, setPlayers] = useState([]);
  const [gameSettings, setGameSettings] = useState('');

  function setGameVars(difficulty) {
    switch (difficulty) {
      case 'Easy':
        getPlayers(5, players, setPlayers);
        setGameSettings({totalRounds: 5, bestScore: bestScores.Easy});
        break;
      case 'Medium':
        getPlayers(10, players, setPlayers);
        setGameSettings({totalRounds: 10, bestScore: bestScores.Medium});
        break;
      case 'Hard':
        getPlayers(15, players, setPlayers);
        setGameSettings({totalRounds: 15, bestScore: bestScores.Hard});
        break;
      default:
        return 0;
    }
  }

  const [gameState, setGameState] = useState('menu');
  const [difficulty, setDifficulty] = useState('');
  const [currentRound, setCurrentRound] = useState(1);
  const totalRounds = (gameSettings && gameSettings.totalRounds);
  const bestScore = (gameSettings && gameSettings.bestScore);

  useEffect(() => {
    // console.log(difficulty);
    // console.log(gameState);
    if (gameState === 'game') {
      setGameVars(difficulty);
    }
  }, [difficulty, gameState]);

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-center bg-[url('src/assets/background.gif')]">
    <div className="flex flex-col items-center justify-center min-h-screen bg-cloudy">
      {gameState == 'menu' ? <MainMenu setDifficulty={setDifficulty} setGameState={setGameState}/>:<></>}
      {gameState == 'game' ? <Game currentRound={currentRound} totalRounds={totalRounds} score={0} bestScore={bestScore} players={players}/>:<></>}
      {gameState == 'gameOver' ? <GameOver/>:<></>}
      {/* <Card/> */}
    </div>
  )
}

export default App
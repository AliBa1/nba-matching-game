import { useState, useEffect } from 'react'
import './App.css'
import MainMenu from './components/MainMenu'
import Game from './components/Game'
import Card from './components/Card'
import GameOver from './components/GameOver'
import GetPlayers from './components/GetPlayers'

function App() {
  const [bestScores, setBestScores] = useState({Easy: 0, Medium: 0, Hard: 0});
  const [players, setPlayers] = useState([]);

  function setSettings(difficulty) {
    switch (difficulty) {
      case 'Easy':
        // GetPlayers(5, players, setPlayers);
        return {totalRounds: 5, bestScore: bestScores.Easy};
      case 'Medium':
        // GetPlayers(10, players, setPlayers);
        return {totalRounds: 10, bestScore: bestScores.Medium};
      case 'Hard':
        // GetPlayers(15, players, setPlayers);
        return {totalRounds: 15, bestScore: bestScores.Hard};
      default:
        return 0;
    }
  }

  const [gameState, setGameState] = useState('menu');
  const [difficulty, setDifficulty] = useState('');
  const [currentRound, setCurrentRound] = useState(1);
  const getSettings = (gameState == 'game' ? (setSettings(difficulty)):0);
  const totalRounds = (getSettings && getSettings.totalRounds);
  const bestScore = (getSettings && getSettings.bestScore);


  useEffect(() => {
    // console.log(difficulty);
    // console.log(gameState);
    // console.log("Players: ", players);
    GetPlayers(5, players, setPlayers);
  }, [difficulty, gameState, players]);

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
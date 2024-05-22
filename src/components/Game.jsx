import { useState } from 'react'
import ReactLoading from 'react-loading';
import Card from "./Card"
import playerInArray from './PlayerInArray';
// import './Game.css'

function Game({ score, currentRound, totalRounds, bestScore, setGameSettings, players, setPlayers, loading, setGameState, setResult}) {
  console.log("Players: ", players);
  const [playersPicked, setPlayersPicked] = useState([]);
  const completeRounds = (currentRound == totalRounds ? true : false);

  const playerCards = players.map((player, index) => 
    <div key={player.name + index} onClick={() => playerSelected(player)}>
      <Card name={player.name} image={player.image}/>
    </div>
  )

  function updateGameSettings() {
    setGameSettings({score: score+1, currentRound: currentRound+1, totalRounds: totalRounds, bestScore: (score+1 > bestScore ? score+1:bestScore)});
  }

  function shufflePlayers(array) {
    let shuffledArray = array;
    let index = array.length;
    while (index != 0) {
      let randomIndex = Math.floor(Math.random() * index);
      index--;
      [shuffledArray[index], shuffledArray[randomIndex]] = [array[randomIndex], array[index]];
    }
    setPlayers(shuffledArray);
  }

  function playerSelected(player) {
    const pickedTwice = playerInArray(player, playersPicked);
    // win, lose, otherwise
    if (completeRounds && !pickedTwice) {
      updateGameSettings();
      setResult('won');
      setGameState('gameOver');
    } else if (pickedTwice) {
      setResult('lost');
      setGameState('gameOver');
    } else {
      setPlayersPicked([...playersPicked, player]);
      shufflePlayers(players);
      updateGameSettings();
    }
  }

  if (loading) {
    return (
      <ReactLoading type="bars" color="#ffffff" height={'5%'} width={'5%'} />
    )
  }

  return (
    <div className="text-center text-4xl font-bold text-white p-8 space-y-8">
      <h1>Round {currentRound}/{totalRounds}</h1>
      <div className="grid grid-cols-5 gap-4 place-content-center">
        {playerCards}
      </div>

      <h1>Score: {score}</h1>
      <h1>Best Score: {bestScore}</h1>
    </div>
  )
}

export default Game
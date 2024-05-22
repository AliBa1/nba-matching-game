// import { useState } from "react"
// import { useState, useEffect } from "react"
import nbaPlayers from "./NBAPlayers";
import playerInArray from "./PlayerInArray";

async function fetchPlayer(player) {
  const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${player}`, {mode: 'cors'});
  const data = await response.json();
  const playerData = data.player[0];
  // console.log("Player data: ", playerData);
  return {name: playerData.strPlayer, image: playerData.strCutout};
}

async function getRandomPlayer() {
  function GetRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const randomPlayerName = nbaPlayers[GetRandomInt(nbaPlayers.length)];
  // console.log("Player Name (before fetch): ", randomPlayerName);
  const randomPlayer = await fetchPlayer(randomPlayerName);
  // console.log("Player Data (after fetch): ", randomPlayer);
  return randomPlayer;
}

async function getPlayers(totalPlayers, setPlayers, setLoading) {
  setLoading(true);
  let updatedPlayers = [];

  while (updatedPlayers.length < totalPlayers) {
    const randomPlayer = await getRandomPlayer();
    if (!playerInArray(randomPlayer, updatedPlayers)) {
      updatedPlayers.push(randomPlayer);
    }
  }

  setPlayers(updatedPlayers);
  setLoading(false);
}

export default getPlayers
// import { useState } from "react"
// import { useState, useEffect } from "react"


const nbaPlayers = [
  "LeBron James",
  "Kevin Durant",
  "Giannis Antetokounmpo",
  "Stephen Curry",
  "Nikola Jokic",
  "Joel Embiid",
  "James Harden",
  "Kawhi Leonard",
  "Damian Lillard",
  "Luka Doncic",
  "Jayson Tatum",
  "Ja Morant",
  "Donovan Mitchell",
  "Devin Booker",
  "Zach LaVine",
  "Trae Young",
  "Michael Porter Jr.",
  "Chet Holmgren",
  "Karl-Anthony Towns",
  "Zion Williamson",
  "Julius Randle",
  "Jordan Poole",
  "Bam Adebayo",
  "Jayson Tatum",
  "Pascal Siakam",
  "Jimmy Butler",
  "Collin Sexton",
  "Jalen Williams",
  "Kyrie Irving",
  "Klay Thompson",
  "Draymond Green",
  "Russell Westbrook",
  "Chris Paul",
  "Franz Wagner",
  "Scottie Barnes",
  "Tyrese Haliburton",
  "Alperen Sengun",
  "Victor Wembanyama",
  "Cam Thomas",
  "Dejounte Murray",
  "Jaren Jackson Jr.",
  "Paolo Banchero",
  "Cade Cunningham",
  "Anthony Edwards",
  "Jaylen Brown",
  "Tyrese Maxey",
  "De'Aaron Fox",
  "Jalen Brunson",
  "Shai Gilgeous-Alexander"
];

let chosenPlayers = [];

function GetRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function FetchPlayer(player) {
  const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${player}`, {mode: 'cors'});
  const data = await response.json();
  const playerData = data.player[0];
  // console.log("Player data: ", playerData);
  // console.log("Player name: ", playerData.strPlayer);
  // console.log("Player image: ", playerData.strCutout);
  return {name: playerData.strPlayer, image: playerData.strCutout};
}

async function getRandomPlayer() {
  const randomPlayerName = nbaPlayers[GetRandomInt(nbaPlayers.length)];
  // console.log("Player Name (before fetch): ", randomPlayerName);
  const randomPlayer = await FetchPlayer(randomPlayerName);
  // console.log("Player Data (after fetch): ", randomPlayer);
  return randomPlayer;
}

async function GetPlayers(totalPlayers, players, setPlayers) {
  if (players.length < totalPlayers) {
    const randomPlayer = await getRandomPlayer();
    if (!players.includes(randomPlayer)) {
      setPlayers([...players, randomPlayer]);
    }
  }
}

export default GetPlayers
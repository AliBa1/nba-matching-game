# Matching Game
The goal is to make a game where a unique card is picked each time the user makes a selection unitl they pick all of the cards. The cards will shuffle whenever a pick is made and the user can pick the difficulty of their liking.

## Tech Stack
- React
- JavaScript
- HTML
- CSS

## Challenges
- Hiding API Key: I wanted to use an API to get images and names but I didn't want my API key to be visible to the public (for good practice) so I decided to use Firebase to set up a backend to hide my API key.
- Finding and Using an API: I have never used an API before so I was very confunsed on how I was going to find and use one. It took lots of research but once I found one that didn't need an API Key I didn't need to hide it anymore. After that I had trouble using it since I couldn;t get the data to save correctly and there were many errors. At first I was using fetch.then to get the response and data but it wass't working then I switched to async/await which ended up working.

Notes:
- Use for card tilt: https://github.com/mkosir/react-parallax-tilt
- Database: https://www.thesportsdb.com/free_sports_api
- Players JSON: https://github.com/bttmly/nba/blob/master/data/players.json
- NBA Headshots: https://cdn.nba.com/headshots/nba/latest/1040x760/{playerId}.png
- Use Firebase to hide API Key
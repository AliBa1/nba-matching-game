function playerInArray(player, array) {
  for (let i = 0; i < array.length; i++) {
    if (player.name == array[i].name) {
      return true;
    }
  }

  return false;
}

export default playerInArray
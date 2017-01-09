function countOrganisms(map) {
  // Make the map traversable
  // var map = mapStr.map(row => row.map(col => col))

  // Number of islands encountered
  var count = 0;

  // Island sinking machine (w/ location)
  function sink(y, x) {
    // Sink the given land
    map[y][x].state = "dead";

    // Search for connected land
    // if (x - 1 >= 0 && y -1 >= 0 && map[y - 1][x - 1].state === 'alive') sink(y - 1, x - 1); // Up/Left
    // if (x + 1 < map[0].length && y -1 >= 0 && map[y - 1][x + 1].state === 'alive') sink(y - 1, x + 1); // Up/Right
    // if (x - 1 < 0 && y + 1 < map.length && map[y + 1][x - 1].state === 'alive') sink(y + 1, x - 1); // Down/Left
    // if (x + 1 < map[0].length && y + 1 < map.length && map[y - 1][x - 1].state === 'alive') sink(y + 1, x + 1); // Down/Right

    if (y - 1 >= 0 && map[y - 1][x].state === 'alive') sink(y - 1, x); // Up
    if (x + 1 < map[0].length && map[y][x + 1].state === 'alive') sink(y, x + 1); // Right
    if (y + 1 < map.length && map[y + 1][x].state === 'alive') sink(y + 1, x); // Down
    if (x - 1 >= 0 && map[y][x - 1].state === 'alive') sink(y, x - 1); // Left
  }

  // Sail across the map
  for (var i = 0; i < map.length; i++) {
    for (var j = 0; j < map[0].length; j++) {
      // If land is found...
      if (map[i][j].state === 'alive') {
        // Log the island and sink it
        count++;
        sink(i, j);
      }
    }
  }

  // Report the number of islands
  return count;
}

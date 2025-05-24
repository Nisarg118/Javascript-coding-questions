/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
function sort(items, newOrder) {
  // reorder items inline

  for (let i = 0; i < items.length; i++) {
    while (newOrder[i] != i) {
      const newPosition = newOrder[i];
      [newOrder[newPosition], newOrder[i]] = [
        newOrder[i],
        newOrder[newPosition],
      ];
      [items[newPosition], items[i]] = [items[i], items[newPosition]];
    }
  }
}

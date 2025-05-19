/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */

/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */


function excludeItems(items, excludes) {
  excludes.forEach((pair) => {
    items = items.filter((item) => item[pair.k] !== pair.v);
  });

  return items;
}

class NodeStore {
   /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
   this.node=value;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
   return this.node;
  }
  
  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return this.node ? true : false;
  }
}
module.exports = function check(str, bracketsConfig) {
  function check(str, bracketsConfig) {
    const stack = [];
    for (const char of str) {
      if (bracketsConfig[0].includes(char)) {
        stack.push(char);
      } else if (bracketsConfig[1].includes(char)) {
        if (stack.length === 0 || bracketsConfig[0][stack.pop()] !== char) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
}

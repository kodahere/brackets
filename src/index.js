module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if (OPEN_BRACKETS.includes(currentSymbol)) {
        bracketsConfig.push(currentSymbol);
    } else {
        if (bracketsConfig.length === 0) {
            return false;
        }

        let topElement = bracketsConfig[bracketsConfig.length - 1];
        
        if(BRACKETS_PAIR[currentSymbol] === topElement) {
            bracketsConfig.pop();
        } else {
            return false;
        }
    }
}

return bracketsConfig.length === 0;
}

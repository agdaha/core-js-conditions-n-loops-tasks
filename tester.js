function shuffleChar(str, iterations) {
  let chars = str;
  for (let cnt = 0; cnt < iterations; cnt += 1) {
    const newChars = [];
    let idx = 0;
    for (let i = 0; i < str.length; i += 2) {
      newChars[idx] = chars[i];
      idx += 1;
    }
    for (let i = 1; i < str.length; i += 2) {
      newChars[idx] = chars[i];
      idx += 1;
    }
    chars = ''
    for (let i = 0; i < str.length; i += 1) {
      chars += newChars[i];
    }
  }
  return chars;
}

console.log(shuffleChar('012345', 1));

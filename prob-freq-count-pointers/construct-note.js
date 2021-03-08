// add whatever parameters you deem necessary
function constructNote(message, letters) {
  // can i construct message from letters?
  const lettersCounter = {}
  for (let letter of letters) {
    lettersCounter[letter] = lettersCounter[letters] + 1 || 1
  }
  for (let letter of message) {
    if (!lettersCounter[letter]) return false
  }
  return true
}

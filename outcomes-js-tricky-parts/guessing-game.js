function guessingGame() {
  let winningValue = Math.floor(Math.random() * 100);
  let numGuesses = 0
  let isOver = false
  const guess = val => {
    if (isOver) {
      console.log(`The game is over, you already won!`)
    } else {
      if (val === winningValue) {
        numGuesses++
        isOver = true
        console.log(`You win! You found ${winningValue} in ${numGuesses} guesses!`)
      } else if (val < winningValue) {
        numGuesses++
        console.log(`${val} is too low!`)
      } else {
        numGuesses++
        console.log(`${val} is too high!`)
      }
    }
  }
  return guess
}

module.exports = { guessingGame };

var SETTINGS = {
  initial_range: 2,
  range_step: 1,
}
console.log(1<='2'<=2)
var gameOver = false
var count = 0
var currentRange = SETTINGS.initial_range;
generateNumber = (range) => {
  let PNumber = Math.floor(Math.random()*range + 1)
  return PNumber
}
console.log('Welcome to the No. 1 most challenging...\nNUMBER GUESSING GAME')
var userName = prompt("Enter your username")
prompt('Hit "Enter" to start game')
do {
  count++
  let {range_step} = SETTINGS;
  let currentPNumber = generateNumber(currentRange)
  console.log(`Stage ${count} (1-${currentRange})`)
  do {var userGuess = prompt("Enter Guess from the range above")} while(
    !(userGuess && 1<=userGuess<=currentRange && Number.isInteger(parseFloat(userGuess)))
  )
  if (userGuess == currentPNumber) {
    console.log(`Correct!🎉 - (score = ${count})`)
    currentRange += range_step
    if (count == 5) {
      prompt('You are about to enter God Mode("Enter" to continue)')
    }
    if (count == 10) {
      prompt("Ohh! Damn you are good. Let's continue")
    }
  }
  else {
    if (count > 1) {
      console.log(`Wrong!😢 - (score = ${count - 1})\n${userName}, Welldone 💖`)
    }
    else {
      console.log(`Wrong!😢; ${userName}, Try your best next time`)
    }
    gameOver = true
  }
} while (!gameOver);
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./games/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // Authentication event handlers
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-pw-form').on('submit', authEvents.onChangePw)
  $('#sign-out-btn').on('click', authEvents.onSignOut)
  $('#sign-in-btn').on('click', authEvents.onSignInAccount)
  $('#create-account-btn').on('click', authEvents.onCreateAccount)
  // $('#change-pw-btn').on('click', authEvents.onChangePwBtn)

  // Game event handlers
  $('#game-display').on('click', '#start-game-btn', gameEvents.onGameStart)

  // Game Board handlers
  $('#game-board').on('click', gameEvents.onGameBoard)

})

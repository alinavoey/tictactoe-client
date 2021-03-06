const { Button } = require('bootstrap')
const store = require('../store.js')

const onSignUpSuccess = function() {
    $('#auth-display').html('<p>Sign Up Successful</p>')
    $('form').trigger('reset')
    $('#sign-up-display').hide()
}

const onSignUpFailure = function() {
    $('#auth-display').html('<p>Sign Up Failed</p>')
}

const onSignInSuccess = function(response) {
    $('#auth-display').html('<p>Sign In Successful</p>')
    $('form').trigger('reset')
    //console.log(response);
    store.user = response.user

    $('#nav-display').show()
    $('#change-pw-display').show()
    $('.home-page').hide()
    $('#sign-in-display').hide()

    // display button to start game when sign in is successful
    $('#game-display').html('<button id="start-game-btn" type="click">New Game</button>')

    $('#bg-image').html('<img src="public/monster.png">')
}

const onSignInFailure = function() {
    $('#auth-display').html('<p>Sign In Failed</p>')
}

const onChangePwSuccess = function() {
    $('.auth-modal-display').html('<p>Password Change Successful</p>')
    $('form').trigger('reset')
}

const onChangePwFailure = function() {
    $('.auth-modal-display').html('<p>Password Change Failed</p>')
    $('form').trigger('reset')
}

const onSignOutSuccess = function() {
    $('#auth-display').html('<p>Sign Out Successful</p>')
    $('#winning-message').html('')
    $('#bg-image').html('')
    $('#game-display').html('')

    $('.home-page').show()
    $('#sign-in-btn').show()
    $('#game-board').hide()
    $('#nav-display').hide()
    $('#change-pw-display').hide()

}

const onSignOutFailure = function() {
    $('#auth-display').html('<p>Sign Out Failed</p>')
}

module.exports = {
    onSignUpSuccess,
    onSignUpFailure,
    onSignInSuccess,
    onSignInFailure,
    onChangePwSuccess,
    onChangePwFailure,
    onSignOutSuccess,
    onSignOutFailure
}
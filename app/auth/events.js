const getFormFields = require('../../lib/get-form-fields.js')
const authApi = require('./api.js')
const authUi = require('./ui.js')

const onSignInAccount = function() {
    $('#sign-in-display').show()
    $('#create-account-btn').show()
    $('#sign-up-display').hide()
    $('#sign-in-btn').hide()
}
const onCreateAccount = function() {
    $('#sign-up-display').show()
    $('#sign-in-btn').show()
    $('#sign-in-display').hide()
    $('#create-account-btn').hide()
}

const onSignUp = function(event) {
    event.preventDefault()

    const form = event.target
    const data = getFormFields(form)
    console.log(data);

    authApi.signUp(data)
        .then(() => authUi.onSignUpSuccess())
        .catch(() => authUi.onSignUpFailure())
}

const onSignIn = function(event) {
    event.preventDefault()

    const form = event.target
    const data = getFormFields(form)
    console.log(data);

    authApi.signIn(data)
        .then((response) => authUi.onSignInSuccess(response))
        .catch(() => authUi.onSignInFailure())
}

const onChangePw = function(event) {
    event.preventDefault()

    const form = event.target
    const data = getFormFields(form)
    console.log(data);

    authApi.changePw(data)
        .then(() => authUi.onChangePwSuccess())
        .catch(() => authUi.onChangePwFailure())
}

const onSignOut = function() {

    authApi.signOut()
        .then(() => authUi.onSignOutSuccess())
        .catch(() => authUi.onSignOutFailure())
}

module.exports = {
    onSignUp,
    onSignIn,
    onChangePw,
    onSignOut,
    onSignInAccount,
    onCreateAccount
}
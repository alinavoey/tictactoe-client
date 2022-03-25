const store = require('../store.js')
const config = require('../config.js')

const signUp = function(data) {
    return $.ajax({
        method: 'POST',
        url: config.apiUrls + '/sign-up',
        data
    })
}

const signIn = function(data) {
    return $.ajax({
        method: 'POST',
        url: config.apiUrls + '/sign-in',
        data
    })
}

const changePw = function(data) {
    return $.ajax({
        method: 'PATCH',
        url: config.apiUrls + '/change-password',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data
    })
}

const signOut = function() {
    return $.ajax({
        method: 'DELETE',
        url: config.apiUrls + '/sign-out',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

module.exports = {
    signUp, 
    signIn,
    changePw,
    signOut
}
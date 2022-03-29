const store = require ('../store.js')

const onGameStartSuccess = function(response) {
    $('#auth-display').html('')
    //console.log('Game start success');
    //console.log(response);
    $('.box').text('')
    $('#winning-message').html('')
    $('#game-board').show()

    store.game = response.game    
}

const onGameStartFailure = function() {
    console.log('Game start failed');
}

const onGameUpdateSuccess = function(response) {
    //console.log('Game update success');
    //console.log(response);

    store.game = response.game
}

const onGameUpdateFailure = function() {
    console.log('Game update failed');
}

module.exports = {
    onGameStartSuccess,
    onGameStartFailure,
    onGameUpdateSuccess,
    onGameUpdateFailure
}
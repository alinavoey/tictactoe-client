const store = require ('../store.js')

const onGameStartSuccess = function(response) {
    console.log('Game start success');
    console.log(response);

    $('#game-board').show()
    store.game = response.game    
}

const onGameStartFailure = function() {
    console.log('Game start failed');
}

// const onGameShowSuccess = function(response) {
//     console.log('Game show success');
//     console.log(response);
    
// }

// const onGameShowFailure = function() {
//     console.log('Game show failed');
// }

module.exports = {
    onGameStartSuccess,
    onGameStartFailure
    // onGameShowSuccess,
    // onGameShowFailure
}
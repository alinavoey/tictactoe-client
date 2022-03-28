const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const store = require('../store.js')

let playerX = true
let playerO = false
const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const onGameStart = function(){
    console.log('inside of game event')
    playerX = true;
    gameApi.gameStart()
        .then((response) => gameUi.onGameStartSuccess(response))
        .catch(() => gameUi.onGameStartFailure())
}

const onGameBoard = function(event) {
    
    const box = event.target.getAttribute('id')
    const playerValue = playerX ? "X" : "O"
    // check to see if the box is empty and only add value if true
    if (store.game.over === false){
        if ($('#'+box).is(':empty')){
            // check to see which player is active and set X/O on game board
            if (playerX === true) {
                $('#'+box).text(playerValue)
                playerX = false
                playerO = true
            } else {
                $('#'+box).text(playerValue)
                playerX = true
                playerO = false
            }
        } else {
            console.log('NOPE');
        }
    } // end of if statement while game over is false   
        
    // store the value of the html
    let boxValue = $('#'+box).html()
    // get the index of the box selected
    let boxIndex = Number(box.slice(-1))
    // store the value inside of the API array
    const gameArray = store.game.cells
    gameArray[boxIndex] = boxValue
    console.log(gameArray);

    if (checkWinner(playerValue)) {
        console.log('winner');
        store.game.over = true
        $('#winning-message').html(`Player ${playerValue} wins!`)
    } else if (checkDraw()) {
        console.log('draw');
        store.game.over = true
        $('#winning-message').html(`It's a draw!`)
    }

    function checkDraw() {
        return gameArray.every(value => {
            return (value.includes("X") || value.includes("O"))
        })
    }

    function checkWinner(currentPlayer) {
        return winningPatterns.some(pattern => {
            return pattern.every(index => {
                return gameArray[index].includes(currentPlayer)
            })
        })
    }

    gameApi.updateGame(boxIndex, boxValue, store.game.over)
    .then((response) => gameUi.onGameUpdateSuccess(response))
    .catch(() => gameUi.onGameUpdateFailure())

}

module.exports = {
    onGameStart,
    onGameBoard
}
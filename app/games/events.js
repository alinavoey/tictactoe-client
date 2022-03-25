const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const store = require('../store.js')

let playerX = true;
let playerO = false;

const onGameStart = function(){
    console.log('inside of game event')
    gameApi.gameStart()
        .then((response) => gameUi.onGameStartSuccess(response))
        .catch(() => gameUi.onGameStartFailure())
}

const onGameBoard = function(event) {

    const box = event.target.getAttribute('id')

    // check to see if the box is empty and only add value if true
    if ($('#'+box).is(':empty')){
        // check to see which player is active and set X/O on game board
        if (playerX === true) {
            $('#'+box).text('X')
            playerX = false
            playerO = true
        } else {
            $('#'+box).text('O')
            playerX = true
            playerO = false
        }
    } else {
        console.log('NOPE');
    }

    // store the value of the html
    let boxValue = $('#'+box).html()

    // get the index of the box selected
    let boxIndex = Number(box.slice(-1))

    // store the value inside of the API array
    const gameArray = store.game.cells
    gameArray[boxIndex] = boxValue

    console.log(gameArray);

    // const newGameArray = []
    // while (gameArray.length) {
    //     newGameArray.push(gameArray.splice(0, 3))
    // }

    //console.log(newGameArray);

    // gameApi.gameShow()
    //     .then((response) => gameUi.onGameShowSuccess(response))
    //     .catch(() => gameUi.onGameShowFailure())
}

module.exports = {
    onGameStart,
    onGameBoard
}
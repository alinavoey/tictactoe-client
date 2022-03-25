const store = require('../store.js')
const config = require('../config.js')

const gameStart = function (){
    return $.ajax({
    method: "POST",
    url: config.apiUrls + "/games",
    headers: {
        Authorization: 'Bearer ' + store.user.token
    },
    data: '{}'
  })
  }

//   const gameShow = function() {
//     return $.ajax({
//         method: "GET",
//         url: "https://tic-tac-toe-api-development.herokuapp.com/games/" + store.game._id,
//         headers: {
//             Authorization: 'Bearer ' + store.user.token
//         }
//       })
//   }

  module.exports = {
      gameStart
    //   gameShow
  }
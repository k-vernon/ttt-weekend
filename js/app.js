/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board = [null, null, null, null, null, null, null, null, null]
console.log(board);
let turn = 1
console.log(turn);
let winner = false
console.log(winner);
let tie = false
console.log(tie);
const winningCombos = [
  // Horizonal Combos
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Vertical Combos
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonal Combos
  [0, 4, 8],
  [2, 4, 6],
]

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr")
console.log(squareEls)
const messageEl = document.getElementById("message")
console.log(messageEl);

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
function init(){
    let board = [null, null, null, null, null, null, null, null, null]
    let turn = 1
    let winner = false
    let tie = false
    render()
    console.log(init)
}
init()

function render(){
    updateBoard()
    updateMessage()
}

function updateBoard(){
    board.forEach(function(square, idx){
        if (square === 1) {
            squareEls[idx].textContent = "X"
        } else if (square === -1){
            squareEls[idx].textContent = "O"
        } else {
            squareEls[idx].textContent = ""
        }
    })
}



function updateMessage(){
    if (winner === false && tie === false){
       messageEl.textContent = `It's ${turn}'s turn!`
    } else if (winner === false && tie === true){
       messageEl.textContent = `It's a tie!`
    } else {
       messageEl.textContent = `The winner is ${turn}!`
    }
}


squareEls.forEach(function(tile){
    tile.addEventListener("click", handleClick)
})

function handleClick (evt){
    console.log("Clicked in box")
    console.log(evt.target)
    const sqIdx = Array.prototype.indexOf.call((evt.target.parentElement).children, evt.target)
    console.log(sqIdx)
}






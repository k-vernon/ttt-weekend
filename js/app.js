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






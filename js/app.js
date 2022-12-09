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
    render()
    console.log(init)
}
init()

function render(){

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
        
        console.log(square)
    })
}
updateBoard()

//
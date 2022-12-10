/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board = [null, null, null, null, null, null, null, null, null]
let turn = 1
let winner = false
let tie = false
const winningCombos = [
  // Horizonal Combos
  [0, 1, 2], //0            [1, 1, 1, 0, 0, 0, 0, 0, 0]      
  [3, 4, 5], //1            [0, 0, 0, 1, 1, 1, 0, 0, 0]
  [6, 7, 8], //2            [0, 0, 0, 0, 0, 0, 1, 1, 1]
  // Vertical Combos
  [0, 3, 6], //3            [1, 0, 0, 1, 0, 0, 1, 0, 0]
  [1, 4, 7], //4            [0, 1, 0, 0, 1, 0, 0, 1, 0]
  [2, 5, 8], //5            [0, 0, 1, 0, 0, 1, 0, 0, 1]
  // Diagonal Combos
  [0, 4, 8], //6            [1, 0, 0, 0, 1, 0, 0, 0, 1]
  [2, 4, 6], //7            [0, 0, 1, 0, 1, 0, 1, 0, 0]
]

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr")
// console.log(squareEls)
const messageEl = document.getElementById("message")
// console.log(messageEl);
const resetBtnEl = document.getElementById("resetButton")
// console.log(resetBtnEl)

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(tile){
    tile.addEventListener("click", handleClick)
})

resetBtnEl.addEventListener("click", init)


/*-------------------------------- Functions --------------------------------*/
function init(){
    let board = [null, null, null, null, null, null, null, null, null]
    let turn = 1
    let winner = false
    let tie = false
    console.log("New game initiated.")
    render()
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


function handleClick (evt){
    // const sqIdx = Array.prototype.indexOf.call((evt.target.parentElement).children, evt.target)
    const sqIdx = evt.target.id.slice(2)
    console.log(sqIdx)
    if(board[sqIdx] !== null){
        return
    } else if (winner === true){
        return
    }
    board[sqIdx] = turn
    console.log(board)
    placePiece(sqIdx)
    checkForTie()
    checkForWinner()
    switchPlayerTurn()
    render()
}

function placePiece (idx){
    board[idx] = turn
    console.log("Turn", turn)
}


function checkForTie (){
   let checkNulls = board.every(function(i){
        return i === -1 || i === 1 
    })
    console.log("Tie? There are no more moves to make:", checkNulls)  
} 
  

// board = [ null, 1, 1 , -1, null, 1, -1, -1, -1]
function checkForWinner (){
    winningCombos.forEach(function(eachArr){
        let sum = 0
        eachArr.forEach(function(sqr){
            sum = sum + board[sqr]
        })
        // if(Math.abs(sum) === 3) 
        if(sum === 3 || sum === -3){
            winner = true
        }
        console.log("Winner", winner)
    })
} 

function switchPlayerTurn(){
    if (winner === true){
        return
    }
    turn = turn * -1
}






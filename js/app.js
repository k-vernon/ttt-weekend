

/*-------------------------------- Constants --------------------------------*/
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



/*---------------------------- Variables (state) ----------------------------*/
let board = [null, null, null, null, null, null, null, null, null]
let turn = 1
let winner = false
let tie = false

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr")
// console.log(squareEls)
const messageEl = document.getElementById("message")
// console.log(messageEl);
const resetBtnEl = document.getElementById("resetButton")
// console.log(resetBtnEl)
const tryAgainEl = document.getElementById("tryAgain")
// console.log(tryAgainEl)
let speakerEl = document.getElementById("speaker")
// console.log(speakerEl)



/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(tile){
    tile.addEventListener("click", handleClick)
})

resetBtnEl.addEventListener("click", init)

speakerEl.addEventListener("click", toggleSpeaker)

/*-------------------------------- Functions --------------------------------*/
init()

function toggleSpeaker(){
    if (speakerEl.src === "http://127.0.0.1:5500/assets/Speaker.png"){
        speakerEl.src = "http://127.0.0.1:5500/assets/Speaker1.png"
        console.log("Mute")
    } else if (speakerEl.src === "http://127.0.0.1:5500/assets/Speaker1.png"){
        speakerEl.src = "http://127.0.0.1:5500/assets/Speaker.png"
        console.log("Unmute")
    }
}

function playPieceSound(){
    let audio1 = new Audio("./assets/Pop1.mp3")
    let audio2 = new Audio("./assets/Pop2.mp3")
    if (turn === 1){
        audio1.play()
    } else {
        audio2.play()
    }
}

function playWinSound(){
    let winSound = new Audio("./assets/Win.mp3")
    if(winner === true){
        winSound.volume= 0.7
        winSound.play()
    }
}

function playTieSound(){
    let tieSound = new Audio("./assets/Tie.mp3")
    if(tie === true){
        tieSound.volume= 0.6
        tieSound.play()
    }
}


function init(){
    board = [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = false
    tie = false
    console.log("New game initiated.")
    render()
    removeTryAgain()
}

function render(){
    updateBoard()
    updateMessage()
    playWinSound()
    playTieSound()
 
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
    if (winner === false && tie === false && turn === 1){
       messageEl.textContent = `Player 1's turn!`
    } else if (winner === false && tie === false && turn === -1){
        messageEl.textContent = `Player 2's turn!`
    } else if (winner === false && tie === true){
   messageEl.textContent = `It's a tie!`
    } else if (winner === true && tie === false && turn === 1) {
   messageEl.textContent = `Player 1 wins!`
    } else if (winner === true && tie === false && turn === -1) {
        messageEl.textContent = `Player 2 wins!`
    }
}

function handleClick(evt){
    const sqIdx = evt.target.id.slice(2)
    console.log("Square Index Clicked:", sqIdx)
    if(board[sqIdx] !== null){
        return
    } else if (winner === true){
        return
    }
    board[sqIdx] = turn
    console.log("Updated Board:", board)
    placePiece(sqIdx)
    playPieceSound()
    checkForWinner()
    switchPlayerTurn()
    checkForTie()
    tryAgain()
    render()
    
}

function placePiece(idx){
    board[idx] = turn
    console.log("Turn:", turn)
}

function checkForTie(){
   let checkNulls = board.every(function(sqr){
        return sqr === -1 || sqr === 1 && winner === false
    }) 
    tie = checkNulls
    console.log("Tie? There are no more moves to make:", checkNulls)  
}

  
function checkForWinner(){
    winningCombos.forEach(function(eachArr){
        let sum = 0
        eachArr.forEach(function(sqr){
            sum = sum + board[sqr]
        })
        // if(sum === 3 || sum === -3){
        if(Math.abs(sum) === 3) {
            winner = true
            tie = false
        }
        console.log("Winner:", winner)
    })
} 

function switchPlayerTurn(){
    if (winner === true){
        return
    }
    turn = turn * -1
}

function tryAgain(){
    let h4 = document.createElement("h4")
    h4.textContent = "Try again?"
    if (winner === true || tie === true){
        tryAgainEl.appendChild(h4)
    } return
}

function removeTryAgain(){
    let tryA = document.getElementById("tryAgain")
    let h4 = document.querySelector("h4")
    tryA.removeChild(h4)
}










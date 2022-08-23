const player = (name, symbol) =>{


    const getSymbol = () =>{

        return symbol
    };


    return{name, symbol, getSymbol}

}

const gameBoard = (gameBoard) => {

    gameBoard = ["", "", "", "", "", "", "", "", ""];

    const setPiece = (index, symbol) => {


    }

    return {gameBoard}

}

const displayController = (() =>{


    
    const displayMessage = document.getElementById("displayMessage")
    





})


const gameController = (() =>{

    let count = 1
    const Player1 = new player('Player 1','X')
    const Player2 = new player('Player 2', 'O')










})


const fieldElements = document.querySelectorAll(".piece");

    fieldElements.forEach((piece)=> 

        piece.addEventListener("click", (e)=>{
            
            console.log(e.target.dataset.index)
           


        })
    );



const restartButton = document.getElementById("restartButton");






const player = (symbol) =>{


    const getSymbol = () =>{

        return symbol
    };


    return{symbol, getSymbol}

}

const gameBoard = (() => {

    board = ["", "", "", "", "", "", "", "", ""];

    const setPiece = (index, symbol) => {

        board[index] = symbol;

    }

    const getPiece = (index) => {

        return board[index]
    }

    const reset = () => {

        for(let i = 0; i < board.length; i++ ){

            board[i] = ""

        }
    }

    return {setPiece, getPiece, reset}

})();

const displayController = (() =>{


    
    const displayMessage = document.getElementById("displayMessage");
    const fieldElements = document.querySelectorAll(".piece");
    const restartButton = document.getElementById("restartButton");



    const updateBoard = () => {


        for(let i = 0; i <board.length; i++){

            fieldElements[i].textContent = gameBoard.getPiece(i)

        }

    }

    restartButton.addEventListener("click", ()=>{

        console.log("Larussy")
        gameBoard.reset();
        displayController.updateBoard();
    
    });

    fieldElements.forEach((piece)=> 

        piece.addEventListener("click", (e)=>{
            
            holder = parseInt(e.target.dataset.index)
            gameBoard.setPiece(holder, "X");
            displayController.updateBoard();
          

        })
    );






    return{updateBoard}



})();


const gameController = (() =>{

    let count = 1
    const Player1 = new player('X')
    const Player2 = new player('O')



})



    
    /* This is how you link grid text and array */
    /* fieldElements[1].textContent = "X" */










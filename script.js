const player = (symbol) =>{


    const getSymbol = () => symbol;

    return{getSymbol}

};

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

        gameBoard.reset();
        displayController.updateBoard();
    
    });

    fieldElements.forEach((piece)=> 

        piece.addEventListener("click", (e)=>{
            
            let holder = parseInt(e.target.dataset.index)

            gameController.playRound(holder);
            displayController.updateBoard();
            
          
        })
    );

    return{updateBoard}

})();


const gameController = (() =>{

    const restartButton = document.getElementById("restartButton");

    var count = 1;
    const Player1 = player('X');
    const Player2 = player('O');
    var gameOver = false;


    const playRound = (index) => {

        if(count < 10 || gameOver == true){

            if(gameBoard.getPiece(index) == ""){

                gameBoard.setPiece(index, gameController.getCurrentPlayer());
               
            }

            count++
            console.log(count)

        }


    }

    const chickenDinner = () => {

       




    }

    const getCurrentPlayer = () => {

        if(count % 2 == 1){

            return Player1.getSymbol();

        }

        else{

            return Player2.getSymbol();
        }

    }


    restartButton.addEventListener("click", ()=>{

      count = 1
    
    });


    return{playRound, chickenDinner, getCurrentPlayer}

})();



    
    /* This is how you link grid text and array */
    /* fieldElements[1].textContent = "X" */










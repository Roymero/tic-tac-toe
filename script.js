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


    
    const displayMessage = document.getElementById("display");
    const fieldElements = document.querySelectorAll(".piece");
    const restartButton = document.getElementById("restartButton");



    const updateBoard = () => {


        for(let i = 0; i <board.length; i++){

            fieldElements[i].textContent = gameBoard.getPiece(i)
            displayMessage.textContent = "Player " + gameController.getCurrentPlayer() + "'s Turn";
        }

    }

    const setWinner = (symbol) => {

        displayMessage.textContent = "Player " + symbol + " is the winner!";


    }

    restartButton.addEventListener("click", ()=>{

        gameBoard.reset();
        displayController.updateBoard();
        displayMessage.textContent = "Player X's Turn";
    
    });

    fieldElements.forEach((piece)=> 

        piece.addEventListener("click", (e)=>{
            
            let holder = parseInt(e.target.dataset.index)
            console.log(holder)

            gameController.playRound(holder);
            displayController.updateBoard();
            gameController.chickenDinner();
            
            
          
        })
    );

    return{updateBoard, setWinner}

})();


const gameController = (() =>{

    const restartButton = document.getElementById("restartButton");

    var count = 1;
    const Player1 = player('X');
    const Player2 = player('O');
    var gameOver = false;


    const playRound = (index) => {

        if(count < 10 && gameOver == false){

            if(gameBoard.getPiece(index) == ""){

                gameBoard.setPiece(index, gameController.getCurrentPlayer());
                count++
               
            }
        }

    };

    const chickenDinner = () => {

        if(gameBoard.getPiece(0) === Player1.getSymbol() && gameBoard.getPiece(1) === Player1.getSymbol() 
           && gameBoard.getPiece(2) === Player1.getSymbol()){

            gameOver = true
            displayController.setWinner(Player1.getSymbol())  
        }
        else if (gameBoard.getPiece(0) === Player1.getSymbol() && gameBoard.getPiece(3) === Player1.getSymbol() 
                 && gameBoard.getPiece(6) === Player1.getSymbol()){
                    
                gameOver = true
                displayController.setWinner(Player1.getSymbol())  
        }
        else if (gameBoard.getPiece(0) === Player1.getSymbol() && gameBoard.getPiece(4) === Player1.getSymbol() 
                 && gameBoard.getPiece(8) === Player1.getSymbol()){
           
                gameOver = true
                displayController.setWinner(Player1.getSymbol())  
        }
        else if (gameBoard.getPiece(3) === Player1.getSymbol() && gameBoard.getPiece(4) === Player1.getSymbol() 
                 && gameBoard.getPiece(5) === Player1.getSymbol()){
           
                gameOver = true
                displayController.setWinner(Player1.getSymbol())  
        }
        else if (gameBoard.getPiece(6) === Player1.getSymbol() && gameBoard.getPiece(7) === Player1.getSymbol() 
                 && gameBoard.getPiece(8) === Player1.getSymbol()){
           
                gameOver = true
                displayController.setWinner(Player1.getSymbol())  
        }
        else if (gameBoard.getPiece(1) === Player1.getSymbol() && gameBoard.getPiece(4) === Player1.getSymbol() 
                 && gameBoard.getPiece(7) === Player1.getSymbol()){
           
                gameOver = true
                displayController.setWinner(Player1.getSymbol())  
        }
        else if (gameBoard.getPiece(2) === Player1.getSymbol() && gameBoard.getPiece(5) === Player1.getSymbol() 
                 && gameBoard.getPiece(8) === Player1.getSymbol()){
           
                gameOver = true
                displayController.setWinner(Player1.getSymbol())  
        }
        else if (gameBoard.getPiece(2) === Player1.getSymbol() && gameBoard.getPiece(4) === Player1.getSymbol() 
                 && gameBoard.getPiece(6) === Player1.getSymbol()){
           
                gameOver = true
                displayController.setWinner(Player1.getSymbol())  
        }
        
        if(gameBoard.getPiece(0) === Player2.getSymbol() && gameBoard.getPiece(1) === Player2.getSymbol() 
           && gameBoard.getPiece(2) === Player2.getSymbol()){

            gameOver = true
            displayController.setWinner(Player2.getSymbol())  
        }
        else if (gameBoard.getPiece(0) === Player2.getSymbol() && gameBoard.getPiece(3) === Player2.getSymbol() 
                 && gameBoard.getPiece(6) === Player2.getSymbol()){
                    
                gameOver = true
                displayController.setWinner(Player2.getSymbol())  
        }
        else if (gameBoard.getPiece(0) === Player2.getSymbol() && gameBoard.getPiece(4) === Player2.getSymbol() 
                 && gameBoard.getPiece(8) === Player2.getSymbol()){
           
                gameOver = true
                displayController.setWinner(Player2.getSymbol())  
        }
        else if (gameBoard.getPiece(3) === Player2.getSymbol() && gameBoard.getPiece(4) === Player2.getSymbol() 
                 && gameBoard.getPiece(5) === Player2.getSymbol()){
           
                gameOver = true
                displayController.setWinner(Player2.getSymbol())  
        }
        else if (gameBoard.getPiece(6) === Player2.getSymbol() && gameBoard.getPiece(7) === Player2.getSymbol() 
                 && gameBoard.getPiece(8) === Player2.getSymbol()){
           
                gameOver = true
                displayController.setWinner(Player2.getSymbol())  
        }
        else if (gameBoard.getPiece(1) === Player2.getSymbol() && gameBoard.getPiece(4) === Player2.getSymbol() 
                 && gameBoard.getPiece(7) === Player2.getSymbol()){
           
                gameOver = true
                displayController.setWinner(Player2.getSymbol())  
        }
        else if (gameBoard.getPiece(2) === Player2.getSymbol() && gameBoard.getPiece(5) === Player2.getSymbol() 
                 && gameBoard.getPiece(8) === Player2.getSymbol()){
           
                gameOver = true
                displayController.setWinner(Player2.getSymbol())  
        }
        else if (gameBoard.getPiece(2) === Player2.getSymbol() && gameBoard.getPiece(4) === Player2.getSymbol() 
                 && gameBoard.getPiece(6) === Player2.getSymbol()){
           
                gameOver = true
                displayController.setWinner(Player2.getSymbol())  
        }


    };

    const getCurrentPlayer = () => {

        if(count % 2 == 1){

            return Player1.getSymbol();

        }

        else{

            return Player2.getSymbol();
        }

    };

    restartButton.addEventListener("click", ()=>{

      count = 1
      gameOver = false
    
    });


    return{playRound, chickenDinner, getCurrentPlayer}

})();



    
    /* This is how you link grid text and array */
    /* fieldElements[1].textContent = "X" */










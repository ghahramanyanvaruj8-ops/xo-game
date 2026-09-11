import checkGame from './FinishCode/finish.js'



const StartGame = document.querySelector('.StartGame');
const message = document.querySelector(".message");
let User = 'X';
let board = [];

for(let i = 0; i < 3; ++i){
    board.push([])
    for(let k = 0; k < 3; ++k){
     board[i].push('_')
    }
}
const htmlBoard = document.createElement("div");
htmlBoard.classList.add("board");
document.body.appendChild(htmlBoard);
htmlBoard.style.gridTemplateColumns = `repeat(${board.length}, 100px)`;


for(let i = 0; i < board.length; ++i){

    const row = document.createElement("div");

    for(let j = 0; j < board[i].length; ++j){

        const cell = document.createElement("button");

        cell.textContent = board[i][j];

        cell.addEventListener("click", function(){

            if(board[i][j] === '_'){
board[i][j] = User;
cell.textContent = User;

const result = checkGame(board);

           if(result !== false){
             console.log(result);
            return;
}

                if(User === 'X'){
                    User = 'O';
                }else{
                    User = 'X';
                }

            } 

        });

        row.appendChild(cell);
    }

    htmlBoard.appendChild(row);
} 

const cells = document.querySelectorAll(".board button");

StartGame.addEventListener('click', function(event){
 StartGame.style.display = 'none';
htmlBoard.style.display = 'grid';
})




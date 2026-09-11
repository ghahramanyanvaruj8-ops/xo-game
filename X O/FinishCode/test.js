let X = 0
let O = 0

function reset1(){
X = 0
O = 0
}

function checkDiagonal(i,k,matrix){
 if(i == k){
	if(matrix[i][k] == "X"){
   ++X
	 if(X == 3){
          return "haxtec X";
	 }
 }else if(matrix[i][k] == "O"){
	 ++O
     if(O == 3){
	 return "haxtex O";
  }
 }
}
return false
}

export  {checkDiagonal,reset1};

let X = 0;
let O = 0;

function reset(){
X = 0
O = 0
}


function checkRowWin(i,k,matrix){
if(matrix[i][k] == "X"){
	X++
           if(X == 3){
		return "haxtec X"
			 }
		
}else if(matrix[i][k] == "O"){
	O++
	if(O == 3){
	return "haxtec O"
}
}
return false
}

export {checkRowWin,reset}

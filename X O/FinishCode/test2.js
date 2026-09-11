
let X = 0 
let O = 0

function reset2(){ 
	X = 0 
	O = 0 
} 
function toxeristugum(i,k,matrix){ 
		if(matrix[k][i] == "X"){
			++X 
			if(X == 3){ 
				return "haxtec X";
			} 
		}else if(matrix[k][i] == "O"){
			++O 
			if(O == 3){ 
	return "haxtex O"; 
			}
		}
	
	return false 
}
export {toxeristugum,reset2}

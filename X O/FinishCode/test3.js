
function test3(matrix){
for(let i = 0; i < matrix.length; ++i){
	for(let k = matrix[i].length - 1; k >= 0; --k){
      if(i + k == matrix.length - 1) {

	if(matrix[i][k] == "X"){
		return "haxtec X"
	}else if(matrix[i][k] == "O"){
                return "haxtec O"
	}
	}
}
}
return false
}
export default test3
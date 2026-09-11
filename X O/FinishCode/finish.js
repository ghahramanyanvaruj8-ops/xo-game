import {checkDiagonal,reset1} from './test.js'
import {checkRowWin,reset} from './test1.js'
import {toxeristugum,reset2} from './test2.js'

function checkGame(matrix) {
    for (let i = 0; i < matrix.length; ++i) {
        reset()
        reset1()
        reset2()

        for (let k = 0; k < matrix[i].length; ++k) {
            let result = checkRowWin(i, k, matrix)
            let result1 = checkDiagonal(i, k, matrix)
            let result3 = toxeristugum(i, k, matrix)

            if (result !== false) return result
            if (result1 !== false) return result1
            if (result3 !== false) return result3
        }
    }

    return false
}

export default checkGame




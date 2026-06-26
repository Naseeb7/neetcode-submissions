class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        for(let i = 0; i < 9; i++){
        const rowSet = new Set();
        const columnSet = new Set();
            for(let j = 0; j < 9; j++){
                let rowPoint = board[i][j];
                let colPoint = board[j][i];
                if(rowPoint !== "."){
                    if(rowSet.has(rowPoint)){
                        return false;
                    }else{
                        rowSet.add(rowPoint)
                    }
                }
                if(colPoint !== "."){
                    if(columnSet.has(colPoint)){
                        return false;
                    }else{
                        columnSet.add(colPoint)
                    }
                }
            }
        }

        for(let i = 0; i < 9; i = i + 3){
            for(let j = 0; j < 9; j = j + 3){
            const boxSet = new Set();
              for(let k = 0; k < 3; k++){
                for(let l = 0; l < 3; l++){
                    const point = board[i+k][j+l];
                    if(point !== "."){
                    if(boxSet.has(point)){
                        return false;
                    }else{
                        boxSet.add(point)
                    }
                }
                }
              }
            }
        }

        return true;
    }
}

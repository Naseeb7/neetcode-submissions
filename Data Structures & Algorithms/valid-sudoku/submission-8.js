class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({length: 9}, () => new Set());
        const cols = Array.from({length: 9}, () => new Set());
        const squares = Array.from({length: 9}, () => new Set());

        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                const cell = board[i][j]
                if(cell === ".") continue;
                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
                if(rows[i].has(cell) || cols[j].has(cell) || squares[boxIndex].has(cell)){
                    return false;
                };

                rows[i].add(cell);
                cols[j].add(cell);
                squares[boxIndex].add(cell);
            }
        }
        return true
    }
}

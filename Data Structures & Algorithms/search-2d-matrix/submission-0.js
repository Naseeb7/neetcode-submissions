class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0;
        const cols = matrix[0].length;
        let r = matrix.length * cols - 1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            const row = Math.floor(mid / cols);
            const col = mid % cols;

            if (matrix[row][col] === target) return true;

            if (matrix[row][col] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return false;
    }
}

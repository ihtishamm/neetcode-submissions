class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = board.length;
        const columns = board[0].length;

        // 1. Check every row
        for (let r = 0; r < rows; r++) {
            const rowSet = new Set();

            for (const value of board[r]) {
                if (value === ".") continue;

                if (rowSet.has(value)) {
                    return false;
                }

                rowSet.add(value);
            }
        }

        // 2. Check every column
        for (let c = 0; c < columns; c++) {
            const columnSet = new Set();

            for (let r = 0; r < rows; r++) {
                const value = board[r][c];

                if (value === ".") continue;

                if (columnSet.has(value)) {
                    return false;
                }

                columnSet.add(value);
            }
        }

        // 3. Check every 3x3 box
        for (let boxRow = 0; boxRow < 3; boxRow++) {
            for (let boxCol = 0; boxCol < 3; boxCol++) {

                const boxSet = new Set();

                const startRow = boxRow * 3;
                const startCol = boxCol * 3;

                for (let r = startRow; r < startRow + 3; r++) {
                    for (let c = startCol; c < startCol + 3; c++) {

                        const value = board[r][c];

                        if (value === ".") continue;

                        if (boxSet.has(value)) {
                            return false;
                        }

                        boxSet.add(value);
                    }
                }
            }
        }

        return true;
    }
    }

class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
       const row = Array.from({length:9}, ()=> new Set())
       const column = Array.from({length:9}, ()=> new Set())
       const box = Array.from({length:9}, ()=> new Set())

       for(let r = 0; r < 9; r++){
        for (let c = 0; c <9; c++){
            const value = board[r][c]

            if(value === ".") continue; 
           const Index = Math.floor(r/3) * 3 + Math.floor(c/3)
          if(row[r].has(value)  || column[c].has(value) || box[Index].has(value)){
            return false;
          }
          row[r].add(value);
          column[c].add(value);
          box[Index].add(value)
        }
       }
       return true;
    }
    }

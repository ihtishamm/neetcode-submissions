class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length
        let columns = matrix[0].length
        let Left = 0;
        let Right = rows * columns -1
         
         while(Left <=Right){
            const mid = Math.floor((Left + Right)/2);
             const row = Math.floor(mid / columns)
             const column = mid % columns
             const value = matrix[row][column]
    
              if(value < target){
                Left = mid + 1
              } else if (value > target){
                Right = mid -1
              } else if (value === target){
                return true
              }
         }
         return false
    }
}

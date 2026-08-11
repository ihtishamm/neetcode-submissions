class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
          let L = 0;
          let R = numbers.length - 1

          while (L < R){
            if(target >  numbers[L] + numbers[R]){
                L++
            }
           else  if(target < numbers[L] + numbers[R]){
                R--
            }
            else{
               return  [L + 1, R + 1]
            }
            
          }
         
    }
}

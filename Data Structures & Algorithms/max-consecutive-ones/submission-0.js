class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let MaxCount= 0;
        let currentCounter =0
        for (let i =0; i< nums.length; i++){
            if(nums[i] == 0){
               currentCounter =0
            } else if (nums[i] == 1){
                currentCounter++
                MaxCount = Math.max(currentCounter, MaxCount)
            }
            
        }
        return MaxCount
    }
}

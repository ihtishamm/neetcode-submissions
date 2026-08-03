class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let count = 0
        for(const num of nums){
            if (num !==val){
             nums[count] = num
              count++
            } 
            
        }
    return count;
    }
}

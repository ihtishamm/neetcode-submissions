class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

       nums.sort((a,b) => a - b )
       let current = 1;
       let longest = 1;

       if(nums.length === 0){
        return 0;
       }
       for (let i =0; i< nums.length; i++){
        if(nums[i] === nums[i-1] + 1){
            current++
        } else if (nums[i] === nums[i-1]){
            continue
        } else {
            current = 1;
        }
        longest = Math.max(longest, current)
       }
        return longest;

    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = new Array(nums.length)
        let suffix = new Array(nums.length);
        let result = []

        prefix[0] = 1;
        suffix[nums.length - 1] = 1

        for (let i = 1; i< nums.length; i++){
            prefix[i] = prefix[i -1] * nums[i -1]
        }
         
        for (let i = nums.length - 2; i>= 0; i-- ){
            suffix[i] = suffix[i + 1] * nums[i + 1]
        }
       
        for ( const num in nums){
          result[num] = prefix[num] * suffix[num]
        }
         return result;
    }
}

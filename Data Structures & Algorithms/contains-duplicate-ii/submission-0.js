class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
      let dublicateSet = new Set();
      let L = 0;

      for(let R =0; R < nums.length; R++){
        if(R - L  > k){
            dublicateSet.delete(nums[L]);
            L++
        }
           if(dublicateSet.has(nums[R])){
            return true
           }
           dublicateSet.add(nums[R])
      }
      return false
    }
}

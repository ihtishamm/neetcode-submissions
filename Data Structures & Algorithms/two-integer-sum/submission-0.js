class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      let PrevMap = new Map();
      for(let i=0; i< nums.length; i++){
        let diff = target - nums[i];
        if(PrevMap.has(diff)){
           return    [PrevMap.get(diff), i]
        }
        PrevMap.set(nums[i], i);
      }
    }
    
}

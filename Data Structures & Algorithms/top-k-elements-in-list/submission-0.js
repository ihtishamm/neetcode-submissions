class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      
         let freq = new Map()

         for (let num of nums){
           freq.set(num, (freq.get(num) ?? 0) + 1)
         }

         const result = [...freq.entries()].sort((a,b) => b[1] -                  a[1]).slice(0,k).map(([num])=> num)

            return result
    }
}

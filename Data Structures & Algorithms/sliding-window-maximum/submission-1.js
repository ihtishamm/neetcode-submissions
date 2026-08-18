class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {

        let L =0;
       let  res = []
       let deque = []
        for(let R = 0; R < nums.length; R++){

            // remove values smaller than new value from queue
            while(deque.length && nums[deque[deque.length -1]] <= nums[R]){
                deque.pop()
            }
            // add current index
            deque.push(R)

            // remove the indexes outside of window
            if(deque[0] < L){
                deque.shift()
            }
             if(R -L +1 === k){
                res.push(nums[deque[0]])
                L++
             }
        }
        return res
    }
}

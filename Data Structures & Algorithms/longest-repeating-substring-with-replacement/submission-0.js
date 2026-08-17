class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
     let freq = new Map();
     let L = 0;
     let max = 0
     let LongRC = 0
     for(let R =0; R < s.length; R++){
        freq.set(s[R], (freq.get(s[R]) || 0) + 1)
        max = Math.max(max,freq.get(s[R]))
        while ((R - L + 1) - max > k){
            freq.set(s[L], freq.get(s[L]) -1)
            L++
        }
        LongRC = Math.max(LongRC, R - L + 1)
     }
        return LongRC
      
    }
}

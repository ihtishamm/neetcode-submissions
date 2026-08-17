class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let window = new Set();
        let L = 0;
        let LSub = 0;
        for(let R = 0; R < s.length; R++){
            while(window.has(s[R])){
                window.delete(s[L])
                L++
            }
            window.add(s[R])
            LSub = Math.max(LSub, R - L + 1)
        }
        return LSub
    }
}

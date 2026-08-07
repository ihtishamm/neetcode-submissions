class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

    let groupMap = new Map();
    
          for (const str of strs){
            let freq = new Array(26).fill(0)
          for (let i = 0; i < str.length; i++) {
             freq[str.charCodeAt(i) - 97]++  
            }

            let key= freq.join(',');
             if(!groupMap.has(key)){
                groupMap.set(key,[])
             }
             groupMap.get(key).push(str);
           
          }
            return [...groupMap.values()]
    }
}

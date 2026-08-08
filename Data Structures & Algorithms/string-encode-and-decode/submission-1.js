class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
     let result = "";
     for(const str of strs){
        result += str.length + "#" + str;
     }
     return result;
      
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
       let result = [];
       let i = 0;
       while (i < str.length){
         let detlimiter = str.indexOf("#",i);
         let length =  Number(str.substring(i, detlimiter))

         let start =detlimiter + 1

         let decodedString = str.substring(start, start + length);
             result.push(decodedString)
          i = start + length
       }

       return result
}
}
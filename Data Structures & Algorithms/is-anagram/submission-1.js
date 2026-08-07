class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      // first check if these two strings are equal or not.
       if(s.length !== t.length){
        return false;
       }

    // now create an array of 26 length becaue we have only english letters in lower case. 

    let fraq = new Array(26).fill(0);

    for(let i =0; i < s.length; i++){
       
        fraq[s.charCodeAt(i) - 97]++
         fraq[t.charCodeAt(i) - 97]--
      
    }

// count of there is any non zero present. 
   for(const count of fraq){
    if (count !== 0){
        return false
    }
   
   }
    return true;
    }

}
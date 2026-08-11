class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

     let isAlphaNum = s =>  /^[a-zA-Z0-9]$/.test(s);
     let L=0;
     let R= s.length -1;
     while(L < R){
      
       while(L < R && !isAlphaNum(s[L])){
        L++
       }
       while(L < R && !isAlphaNum(s[R])){
        R--
       }
       if(s[L].toLowerCase() !== s[R].toLowerCase()){
        return false
       }
       L++;
       R--;
     }
     return true
}
}
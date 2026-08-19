class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
       let stack = []

       const CloseOpen = {
        ')': '(',
        '}':'{',
        ']': '['
       }

      for(const c of s){
        if(CloseOpen[c]){
          if(stack.length >0 && stack[stack.length -1] === CloseOpen[c]){
          stack.pop()
        } else {
          return false
        }
        
      } else {
        stack.push(c)
      }

        }
        
      return stack.length === 0 ? true : false
    }
}

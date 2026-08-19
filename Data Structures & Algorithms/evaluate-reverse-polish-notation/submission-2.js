class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        // we have the piority of / than * than + than - 
        // we can get the values from stack using that pop() method

        let stack = [];
        // we push only the numbers to the stack we if see operater than we will perform action based on that operator. 
const isNumeric = (str) => typeof str === 'string' && !isNaN(str) && !isNaN(parseFloat(str));
        for (const token of tokens){
            if(isNumeric(token)){
              stack.push(Number(token))
            } else if(token === '+'){
               let top1 = stack.pop();
              let  top2 = stack.pop()
              let  result = top1 + top2
                stack.push(result)
            }else if(token === '-'){
               let top1 = stack.pop();
               let top2 = stack.pop()
               let result = top2 - top1
                stack.push(result)
            } else if(token === '*'){
               let   top1 = stack.pop();
               let top2 = stack.pop()
               let result = top1 * top2
                stack.push(result)
            } else if(token === '/') {
            let  top1 = stack.pop();
               let top2 = stack.pop()
               let  result =Math.trunc(top2 /top1)
                stack.push(result)
            }
        }

        return stack[0]
     
    }
}

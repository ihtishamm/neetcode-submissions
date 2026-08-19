class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        const isNumeric = (str) =>
            typeof str === "string" && !isNaN(str) && !isNaN(parseFloat(str));

        let Operations = {
            "+": (a, b) => a + b,
            "-": (a, b) => b - a,
            "*": (a, b) => a * b,
            "/": (a, b) => Math.trunc(b / a),
        };
        for (const token of tokens) {
            if (isNumeric(token)) {
                stack.push(Number(token));
            } else {
                let a = stack.pop();
                let b = stack.pop();
                let result = Operations[token](a, b);
                stack.push(result);
            }
        }

        return stack[0];
    }
}

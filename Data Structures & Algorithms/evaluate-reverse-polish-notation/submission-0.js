class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operations = new Set(["+", "-", "*", "/"]);

        for (let token of tokens) {
            if (operations.has(token)) {
                const rightOperand = stack.pop();
                const leftOperand = stack.pop();

                let result;
                switch (token) {
                    case "+":
                        result = leftOperand + rightOperand;
                        break;
                    case "-":
                        result = leftOperand - rightOperand;
                        break;
                    case "*":
                        result = leftOperand * rightOperand;
                        break;
                    case "/":
                        result = leftOperand / rightOperand;
                        break;
                    default:
                        break;
                }

                stack.push(Math.trunc(result));
            } else {
                stack.push(+token);
            }
        }

        return stack.length === 1 ? stack[0] : 0;
    }
}

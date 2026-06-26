class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for (let ch of s) {
            if (ch === "(") {
                stack.push(")");
            } else if (ch === "[") {
                stack.push("]");
            } else if (ch === "{") {
                stack.push("}");
            } else {
                if (stack.length > 0 && ch === stack[stack.length - 1]) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}

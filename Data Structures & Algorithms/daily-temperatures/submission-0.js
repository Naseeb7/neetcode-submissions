class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const stack = [];

        for(let i = 0; i < temperatures.length; i++){
            const currTemp = temperatures[i];
            while(stack.length > 0 && currTemp > temperatures[stack[stack.length - 1]]){
                const topEle = stack.pop();
                result[topEle] = i - topEle;
            };
            stack.push(i);
        }
        return result;
    }
}

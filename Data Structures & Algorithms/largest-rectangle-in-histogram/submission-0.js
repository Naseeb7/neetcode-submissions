class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        let maxArea = 0;
        heights.push(0);

        for (let i = 0; i < heights.length; i++) {
            while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
                const heightIndex = stack.pop();
                const leftBoundary = stack.length > 0 ? stack[stack.length - 1] : -1;
                const width = i - leftBoundary - 1;
                const area = heights[heightIndex] * width;
                maxArea = Math.max(maxArea, area);
            }

            stack.push(i);
        }

        return maxArea;
    }
}

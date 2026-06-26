class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = 0;
        let rightMax = 0;

        let i = 0;
        let j = height.length - 1;

        let result = 0;

        while(i < j){
            if(height[i] > leftMax) leftMax = height[i];
            if(height[j] > rightMax) rightMax = height[j];

            if(leftMax < rightMax){
                result += Math.max(0, leftMax - height[i]);
                i++;
            }else{
                result += Math.max(0, rightMax - height[j]);
                j--;

            }
        }
        return result;
    }
}

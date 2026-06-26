class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxVolume = 0;

        let i = 0;
        let j = heights.length -1;

        while(i < j){
            const vol = (j - i) * Math.min(heights[i], heights[j]);
            maxVolume = Math.max(vol, maxVolume);

            if(heights[j] < heights[i]){
                j--
            }else{
                i++
            }
        }
        return maxVolume;
    }
}

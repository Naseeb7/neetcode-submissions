class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       const len = nums.length;
       const res = new Array(len);
       const prefix = new Array(len);
       const suffix = new Array(len);

       prefix[0] = 1;
       suffix[len-1] = 1;

       for(let i = 1; i < len; i++){
        prefix[i] = nums[i - 1] * prefix[i - 1]
       };

       for(let i = len - 2; i >= 0; i--){
        suffix[i] = nums[i + 1] * suffix[i + 1];
       };

        for(let i = 0; i < len; i++){
            res[i] = prefix[i] * suffix[i]
        }
       return res;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let deq = [];
        const result = [];
        for (let r = 0; r < nums.length; r++) {
            const windowStart = r - k + 1;
            while (deq.length && deq[0] < windowStart) {
                deq.shift();
            }

            while (deq.length && nums[deq[deq.length - 1]] < nums[r]) {
                deq.pop();
            }

            deq.push(r);

            if (r >= k - 1) {
                result.push(nums[deq[0]]);
            }
        }
        return result;
    }
}

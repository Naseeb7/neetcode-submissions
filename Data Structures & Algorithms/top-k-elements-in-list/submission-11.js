class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};
        for(let num of nums){
            obj[num] = (obj[num] || 0) + 1;
        }

        const buckets = Array.from({length: nums.length + 1}, () => []);
        for(let num in obj){
            const freq = obj[num];
            buckets[freq].push(Number(num));
        }

const result = [];
        for(let i = buckets.length - 1; i >= 0; i-- ){
            for(let num of buckets[i]){
                result.push(num)
            }

            if(result.length === k){
                return result
            }
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};
        for(let num of nums){
            if(!obj[num]){
                obj[num] = 0
            }
            obj[num] += 1;
        }
        const result = Object.entries(obj).sort((a, b) => { return b[1] - a[1]}).map(val => val[0])
        return result.slice(0, k)
    }
}

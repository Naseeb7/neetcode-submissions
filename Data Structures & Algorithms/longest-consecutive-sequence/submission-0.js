class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums);
        let longestArr = 0;
        numsSet.forEach((num)=> {
            let currentStreak = 0;
            if(!numsSet.has(num - 1)){
                let j = num
                while(numsSet.has(j)){
                    currentStreak += 1;
                    j++;
                }
                if(currentStreak > longestArr) longestArr = currentStreak
            }
        })
        return longestArr;
    }
}

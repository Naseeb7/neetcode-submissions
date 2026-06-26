class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let i = 0;
        let j = 0;
        let maxFreq = 0;
        const freq = {};
        let longest = 0;

        while(j < s.length){
            freq[s[j]] = (freq[s[j]] || 0) + 1;
            maxFreq = Math.max(maxFreq, freq[s[j]]);
            while(((j - i) + 1) - maxFreq > k){
                freq[s[i]]--;
                i++;
            }
            longest = Math.max(longest, (j - i) + 1)
            j++;
        }

        return longest;
    }
}

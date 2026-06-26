class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r = 0;
        let strSet = new Set();
        let longest = 0;

        while (r < s.length) {
            while (strSet.has(s[r])) {
                strSet.delete(s[l]);
                l++;
            }
            strSet.add(s[r]);
            r++;
            longest = Math.max(longest, r - l)
        }

        return longest;
    }
}

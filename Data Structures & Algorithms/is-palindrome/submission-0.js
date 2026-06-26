class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const regex = /[a-z0-9]/i;
        let i = 0;
        let j = s.length - 1;
        const sLower = s.toLowerCase();

        while (i < j) {
            if (!regex.test(sLower[i])) {
                i++;
                continue;
            }
            if (!regex.test(sLower[j])) {
                j--;
                continue;
            }
            if (sLower[i] != sLower[j]) return false;
            i++;
            j--;
        }
        return true;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const regex = /[a-z0-9]/i;
        let i = 0;
        let j = s.length - 1;

        while (i < j) {
            if (!regex.test(s[i])) {
                i++;
                continue;
            }
            if (!regex.test(s[j])) {
                j--;
                continue;
            }
            if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
            i++;
            j--;
        }
        return true;
    }
}

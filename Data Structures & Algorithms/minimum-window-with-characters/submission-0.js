class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const needFreq = {};
        for (let i of t) {
            needFreq[i] = (needFreq[i] || 0) + 1;
        }

        const required = Object.keys(needFreq).length;
        let formed = 0;
        const windowFreq = {};
        let minLen = Infinity;
        let start = 0;
        let r = 0;
        let l = 0;

        while (r < s.length) {
            const ch = s[r];
            windowFreq[ch] = (windowFreq[ch] || 0) + 1;
            if (needFreq[ch] && windowFreq[ch] === needFreq[ch]) {
                formed++;
            }
            while (formed === required) {
                const winLen = r - l + 1;
                if (winLen < minLen) {
                    minLen = winLen;
                    start = l;
                }
                if (needFreq[s[l]] && windowFreq[s[l]] === needFreq[s[l]]) {
                    formed--;
                }
                windowFreq[s[l]]--;
                l++;
            }
            r++;
        }

        if (minLen === Infinity) {
            return "";
        } else {
            return s.slice(start, minLen + start);
        }
    }
}

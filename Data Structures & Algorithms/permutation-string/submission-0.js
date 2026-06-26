class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        let l = 0;
        let r = 0;
        const s1Freq = new Array(26).fill(0);
        for(let i = 0; i < s1.length; i++){
            const idx = s1[i].charCodeAt(0) - 'a'.charCodeAt(0);
            s1Freq[idx]++;
        };
        const freqWindow = new Array(26).fill(0);

        while(r < s2.length){
            const rIdx = s2[r].charCodeAt(0) - 'a'.charCodeAt(0);
            freqWindow[rIdx]++;
            if(r - l + 1 > s1.length){
            const lIdx = s2[l].charCodeAt(0) - 'a'.charCodeAt(0);
                freqWindow[lIdx]--;
                l++;
            }
            if(s1Freq.every((val, index)=> val === freqWindow[index])){
                return true;
            }

            r++;
        }
        return false;
    }
}

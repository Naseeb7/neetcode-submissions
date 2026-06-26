class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const arr = []
        for(let str of strs){
            const length = str.length;
            arr.push(`${length}#${str}`)
        }
        return arr.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const arr = []
        let i=0;

        while(i < str.length){
            let j = i;

            while(str[j] !== "#"){
                j++;
            };

            const length = Number(str.slice(i, j));

            const word = str.slice(j + 1, j + 1 + length);

            arr.push(word);

            i = j + 1 + length;
        }
        return arr;
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj = {};
        for(let i =0; i < strs.length; i++){
            const str = strs[i];
            const sortedStr = str.split('').sort().join('');
            if(!obj[sortedStr]){
                obj[sortedStr] = [i]
            }else{
                obj[sortedStr].push(i)
            }
        }
        return Object.values(obj).map(val => {
            return val.map(v => strs[v])
        })
    }
}

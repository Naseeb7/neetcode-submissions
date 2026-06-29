class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const arr = this.keyStore.get(key) || [];
        arr.push([timestamp, value]);
        this.keyStore.set(key, arr);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)) return "";
        const currValue = this.keyStore.get(key);
        let l = 0;
        let r = currValue.length - 1;
        let ans = "";
        while(l <= r){
            const mid = Math.floor((l + r) / 2);

            if(currValue[mid][0] <= timestamp){
                ans = currValue[mid][1];
                l = mid + 1;
            }else{
                r = mid - 1;
            }
        }

        return ans;
    }
}

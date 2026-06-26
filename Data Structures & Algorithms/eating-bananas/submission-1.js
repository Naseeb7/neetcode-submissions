class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let minSpeed = 0;
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);

            let hours = 0;
            for (const pile of piles) {
                hours += Math.ceil(pile / mid);
            }

            if (hours <= h) {
                minSpeed = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return minSpeed;
    }
}

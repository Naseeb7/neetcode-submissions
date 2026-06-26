class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let fleets = 0;
        let lastFleetTime = 0;
        const pairs = [];

        for (let i = 0; i < position.length; i++) {
            pairs.push([position[i], speed[i]]);
        }

        pairs.sort((a, b) => a[0] - b[0]);

        for (let i = pairs.length - 1; i >= 0; i--) {
            const [position, speed] = pairs[i];
            const arrivalTime = (target - position) / speed;
            if(arrivalTime > lastFleetTime){
                fleets += 1;
                lastFleetTime = arrivalTime
            }
        }

        return fleets;
    }
}

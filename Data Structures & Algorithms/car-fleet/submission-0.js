class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const fleets = [];
        const pairs = [];

        for (let i = 0; i < position.length; i++) {
            pairs.push([position[i], speed[i]]);
        }

        pairs.sort((a, b) => a[0] - b[0]);

        for (let i = pairs.length - 1; i >= 0; i--) {
            const [position, speed] = pairs[i];
            const arrivalTime = (target - position) / speed;

            if (fleets.length > 0 && arrivalTime <= fleets[fleets.length - 1]) continue;
            fleets.push(arrivalTime);
        }

        return fleets.length;
    }
}

class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const smallerArray = nums1.length <= nums2.length ? nums1 : nums2;
        const largerArray = nums1.length <= nums2.length ? nums2 : nums1;
        const m = smallerArray.length;
        const n = largerArray.length;

        const leftSize = Math.ceil((m + n) / 2);

        let l = 0;
        let r = smallerArray.length;

        while (l <= r) {
            const i = Math.floor((l + r) / 2);
            const j = leftSize - i;

            const Aleft = i > 0 ? smallerArray[i - 1] : -Infinity;
            const Aright = i < m ? smallerArray[i] : Infinity;

            const Bleft = j > 0 ? largerArray[j - 1] : -Infinity;
            const Bright = j < n ? largerArray[j] : Infinity;

            if (Aleft <= Bright && Bleft <= Aright) {
                if ((m + n) % 2 === 0) {
                    return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
                } else {
                    return Math.max(Aleft, Bleft);
                }
            } else if (Aleft > Bright) {
                r = i - 1;
            } else {
                l = i + 1;
            }
        }

        return -1;
    }
}

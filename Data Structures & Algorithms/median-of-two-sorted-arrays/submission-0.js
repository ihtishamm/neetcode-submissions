class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const merged = nums1.concat(nums2).sort((a, b) => a - b);
        const mid = Math.floor(merged.length / 2);
        if (merged.length % 2 !== 0) {
            return merged[mid];
        } else {
            return (merged[mid - 1] + merged[mid]) / 2;
        }
    }
}

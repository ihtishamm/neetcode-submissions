class NumArray {
    /**
     * @param {number[]} nums
     */
    private prefix:number[];
    constructor(nums: number[]) {
        const n = nums.length;
        this.prefix = new Array(n + 1);
        this.prefix[0] = 0;

       for (let i = 0; i < n; i++){
         this.prefix[i + 1] = this.prefix[i] + nums[i];
       }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left: number, right: number): number {
        return this.prefix[right + 1] - this.prefix[left];
    }
}

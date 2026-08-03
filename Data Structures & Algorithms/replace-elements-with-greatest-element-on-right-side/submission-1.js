class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
    let maxSoFar = -1
    for(let i=arr.length -1; i >= 0; i--){
        let temporary = arr[i];
        arr[i] = maxSoFar;
    maxSoFar = Math.max(maxSoFar, temporary)
    }
      return arr
}
}
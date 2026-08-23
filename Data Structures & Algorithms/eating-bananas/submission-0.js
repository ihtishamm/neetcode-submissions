class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

    function can(speed){
        let hours = 0;
        for(const pile of piles){
            hours +=Math.ceil(pile/speed);
        }
        return hours<=h
   }
        // find the first ture... 
        let left = 1;
        let right = Math.max(...piles);

        while(left <= right){
            const mid = Math.floor((left + right)/2);

            if(can(mid)){
              right = mid -1
            } else {
                left = mid + 1
            }
        }
        return left
    }
}

  

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        if(s1.length > s2.length){
            return false;
        }
         let L = 0;
         let freq = new Map()
         let MapCheck = new Map()

         for (const n of s1){
            freq.set(n, (freq.get(n) ||0) + 1)
         }
         for (let R = 0; R < s2.length; R++){
           MapCheck.set(s2[R], (MapCheck.get(s2[R])|| 0)+ 1)
           if(R - L + 1 === s1.length){
           let same = true;
           for(const [char,count] of freq){
            if(MapCheck.get(char) !== count){
                same = false
                break;
            }

        
           }
           if(same){
            return true
           }
             
           
             MapCheck.set(s2[L], (MapCheck.get(s2[L])|| 0) -1)
            L++;
           }
         }
        return false
    }
}

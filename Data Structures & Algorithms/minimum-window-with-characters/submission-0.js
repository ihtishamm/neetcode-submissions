class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === "") return "";
        
    let Tfreq = new Map();
    for(const n of t){
        Tfreq.set(n, (Tfreq.get(n)|| 0) + 1)
    }
    let window = new Map();
    let res = [-1,-1];
    let reslength = Infinity; 
    let need = Tfreq.size;
    let have = 0;
    let L = 0;

    for(let R = 0; R < s.length; R++){
        window.set(s[R], (window.get(s[R])||0)+ 1)
     
     if(Tfreq.has(s[R]) && window.get(s[R]) === Tfreq.get(s[R])){
        have++
     }
        while(have === need){
          if(R - L + 1 < reslength){
          
           reslength = R - L + 1
             res =[L,R];
          }

      window.set(s[L], (window.get(s[L])|| 0)- 1)
       if(Tfreq.has(s[L]) && window.get(s[L]) < Tfreq.get(s[L])){
        have--
     }
      L++
        }
    }
     return reslength === Infinity ? "": s.slice(res[0], res[1] + 1)
    }
}

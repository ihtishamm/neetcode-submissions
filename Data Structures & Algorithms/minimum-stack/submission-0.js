class MinStack {
   
    constructor(size) {
   this.stack = new Array(size);
   this.topIndex = -1;
   this.capacity = size
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.topIndex === this.capacity -1){
             console.log('stack overflow')
            return
        }
        this.stack[++this.topIndex] = val
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.topIndex === -1){
             console.log('stack underflow')
            return -1
        }
        this.stack[this.topIndex--]
    }

    /**
     * @return {number}
     */
    top() {
         if(this.topIndex === -1){
            console.log('stack is empty')
            return -1
         }
        return this.stack[this.topIndex]
    }

    /**
     * @return {number}
     */
    getMin() {
          let min = Infinity;

    for (let i = 0; i <= this.topIndex; i++) {
        min = Math.min(min, this.stack[i]);
    }

    return min;
    }
}

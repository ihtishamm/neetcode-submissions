class MinStack {
   
    constructor(size) {
   this.stack = new Array(size);
   this.topIndex = -1;
   this.minStack = new Array(size)
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
       
       if(this.topIndex === 0){
           this.minStack[this.topIndex] = val
       } else {
         this.minStack[this.topIndex] = Math.min(val,this.minStack[this.topIndex -1])
       }

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
         if(this.topIndex === -1){
            console.log('stack is empty')
            return -1
         }
         return this.minStack[this.topIndex]
    }
}

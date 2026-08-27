class ListNode{
    constructor(value, nextNode=null){
this.value = value;
this.next = nextNode;
}
}

class LinkedList {
    constructor() {
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let i =0;
        let curr = this.head.next;
        while(curr){
            if(i === index){
                return curr.value
            }
            i++
            curr = curr.next;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newNode = new ListNode(val);
        newNode.next = this.head.next;
        this.head.next = newNode;
        if(newNode.next === null){
            this.tail = newNode;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newNode = new ListNode(val);
        this.tail.next = newNode;
        this.tail = newNode;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let curr = this.head;
        let i = 0;
        while(i < index && curr){
            i++;
            curr = curr.next;
        }
        if(curr && curr.next){
            if(curr.next === this.tail){
              this.tail = curr;
            }
            curr.next = curr.next.next;
            return true;
        }
        return false;
    }

    /*
     * @return {number[]}
     */
    getValues() {
       let curr = this.head.next;
       const res = [];
       while(curr){
        res.push(curr.value);
        curr = curr.next
       }
       return res
    }
}
function ListNode(x){
    this.val = x;
    this.next = null;
}
function ReverseList(pHead)
{
    if(pHead == null){
        return pHead;
    }
    
    let queue = [];
    let pThis = pHead;
    for(;;){
        queue.push(pThis.val);
        if(pThis.next!==null){
            pThis = pThis.next;
        }else{
            break;
        }
    }
    //queue.reverse();
    
    let pHead2 = new ListNode(-1);
    pThis = pHead2;
    for(let i=0;i<queue.length;i++){
        let pNode = new ListNode(queue.pop());
        pThis.next = pNode;
        pThis = pThis.next;
    }

    return pHead2.next;
}
module.exports = {
    ReverseList : ReverseList
};

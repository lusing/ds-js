function removeElement(nums,val){
    let len = nums.length;

    for(;;){
        let pos = nums.indexOf(val);
        if(pos===-1){
            break;
        }else{
            nums.splice(pos,1);
            len--;
        }
    }

    return len;
}
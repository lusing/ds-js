function isValid(s) {
    let stack = [];
    let result = false;
    for(c of s){
        if(c==='(' ||c==='[' || c==='{'){
            stack.push(c);
        }else if(c===')'){
            if(stack[stack.length-1]==='('){
                stack.pop();
            }else{
                return false;
            }
        }else if(c===']'){
            if(stack[stack.length-1]==='['){
                stack.pop();
            }else{
                return false;
            }
        }else if(c==='}'){
            if(stack[stack.length-1]==='{'){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    if(stack.length===0){
        return true;
    }
    return false;
};
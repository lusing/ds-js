function preTran(root,queue){
    if(root==null || root==undefined){
        return;
    }
    if(root.val!==undefined){
        queue.push(root.val);
    }
    if(root.left!=null){
        preTran(root.left,queue);
    }
    if(root.right!=null){
        preTran(root.right,queue);
    }
}

function preorderTraversal( root ) {
    let queue = [];

    preTran(root,queue);
    
    return queue;
}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class BinTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (this.root === null) {
            this.root = new TreeNode(value);
        } else {
            this.insertNode(this.root, value);
        }

    }

    insertNode(root, value) {
        if (value > root.value) {
            if (root.right === null) {
                let node = new TreeNode(value);
                root.right = node;
                node.parent = root;
            } else {
                this.insertNode(root.right, value);
            }
        } else {
            if (root.left === null) {
                let node = new TreeNode(value);
                root.left = node;
                node.parent = root;
            } else {
                this.insertNode(root.left, value);
            }
        }
    }

    walk() {
        this.walkTree(this.root);
    }

    walkTree(root) {
        if (root === null) {
            console.log(`root is null`);
            return;
        } else {
            if (root.left !== null) {
                this.walkTree(root.left);
            }
            console.log(root.value);
            //console.log(root);
            if (root.right !== null) {
                this.walkTree(root.right);
            }
        }
    }

    find(value){
        return this.findNode(this.root,value);
    }

    findNode(root,value){
        if(root===null){
            return -1;
        }else{
            if(root.value===value){
                return root;
            }else if(value>root.value){
                return this.findNode(root.right,value);
            }else{
                return this.findNode(root.left,value);
            }
        }
    }

    deleteNode(root,value){
        if(root===null){
            return -1;
        }else{
            if(root.value===value){
                return root;
            }else if(value>root.value){
                return this.findNode(root.right,value);
            }else{
                return this.findNode(root.left,value);
            }
        }
    }

    delete(value){
        this.deleteNode(this.root,value);
    }
}

let tree1 = new BinTree();
tree1.insert(5);
tree1.insert(3);
tree1.insert(1);
tree1.insert(7);
tree1.insert(10);
tree1.insert(2);
tree1.insert(4);

tree1.walk();

console.log(tree1.find(10));
console.log(tree1.find(15));

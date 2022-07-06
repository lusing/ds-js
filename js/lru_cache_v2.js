class LRUCache{
    constructor(capacity){
        this.capacity = capacity;
        this.map = new Map();
        this.lruList = [];
    }

    updateLRU(key){
        //key如果存在，就先删除之
        if(this.map.has(key)){
            let pos = this.lruList.indexOf(key);
            this.lruList.splice(pos,1);
        }
        this.lruList.unshift(key);
        //如果超了，则删除最后一个
        if(this.lruList.length>this.capacity){
            let last = this.lruList.pop();
            //console.log(`last=${last}`);
            this.map.delete(last);    
        }
        //console.log(`list=${this.lruList}`);
    }

    get(key){
        if(this.map.has(key)){
            this.updateLRU(key);
            return this.map.get(key);
        }else{
            //console.log(`key ${key} not found in ${this.lruList}`);
            return -1;
        }
    }

    put(key,value){
        this.updateLRU(key);
        this.map.set(key,value);
        //console.log(this.map);
    }
}

let lRUCache = new LRUCache(2);
console.log(lRUCache.put(1, 1)); // 缓存是 {1=1}
console.log(lRUCache.put(2, 2)); // 缓存是 {1=1, 2=2}
console.log(lRUCache.get(1));    // 返回 1
console.log(lRUCache.put(3, 3)); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lRUCache.get(2));    // 返回 -1 (未找到)
console.log(lRUCache.put(4, 4)); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(lRUCache.get(1));    // 返回 -1 (未找到)
console.log(lRUCache.get(3));    // 返回 3
console.log(lRUCache.get(4));    // 返回 4

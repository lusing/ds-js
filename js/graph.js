class Graph{
    constructor(){
        this.vertices = [];
        this.adjList = new Map();
    }

    addVertex(v){
        this.vertices.push(v);
        this.adjList.set(v,[]);
    }

    addEdge(v,w){
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }

    initializeColor(){
        let color = [];
        for(let i=0;i<this.vertices.length;i++){
            // 白色表示节点没有被该问过
            color[this.vertices[i]] = 'white';
        }
        return color;
    }

    bfs(v,callback){
        let color = this.initializeColor();
        let queue = [];
        queue.push(v);

        while(queue.length>0){
            let u = queue.shift();
            let neighbors = this.adjList.get(u);
            color[u] = 'grey';
            for(let w of neighbors){
                if(color[w]==='white'){
                    color[w] = 'grey';
                    queue.push(w);
                }
            }
            color[u]='black';
            if(callback){
                callback(u);
            }
        }
    }

    dfs(callback){
        let color = this.initializeColor();
        for(let v of this.vertices){
            if(color[v]==='white'){
                this.dfsVisit(v,color,callback);
            }
        }
    }

    dfsVisit(u, color, callback){
        color[u] = 'grey';
        if(callback){
            callback(u);
        }
        let neighbors = this.adjList.get(u);
        for(let w of neighbors){
            if(color[w]==='white'){
                this.dfsVisit(w,color,callback);
            }
        }
        color[u] = 'black';
    }
}

let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addVertex('G');
graph.addVertex('H');
graph.addVertex('I');

graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('A','D');
graph.addEdge('C','D');
graph.addEdge('C','G');
graph.addEdge('D','G');
graph.addEdge('D','H');
graph.addEdge('B','E');
graph.addEdge('B','F');
graph.addEdge('E','I');

console.log(graph);
graph.bfs('A',console.log);
graph.dfs(console.log);

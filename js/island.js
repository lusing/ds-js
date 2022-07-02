grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ];
  
function numIsland(grid){
    let queue = [];

    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]==='1'){
                queue.push([i,j]);
            }
        }
    }

    console.log(queue);
}

numIsland(grid);

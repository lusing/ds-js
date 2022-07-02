grid_01 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ];

grid_02 = [["1","1","1"],["0","1","0"],["1","1","1"]];


function numIsland(grid){
    let num = 0;
    function visit(grid2,i2,j2){
        console.log(`enter ${i2},${j2}`);
        //如果越界了直接返回
        if(i2<0 || i2>grid2.length || j2<0 || j2>grid[i2].length){
            return;
        }
        if(grid2[i2][j2]==='1'){
            grid2[i2][j2] = '0';
            console.log(`cleared ${i2},${j2}`);
        }else{
            return;
        }

        if(i2-1>=0){
            visit(grid2,i2-1,j2);
        }
        if(i2+1<grid2.length){
            visit(grid2,i2+1,j2);
        }
        if(j2-1>=0){
            visit(grid2,i2,j2-1);
        }
        if(j2+1<grid2[i2].length){
            visit(grid2,i2,j2+1);
        }
    }

    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]==='1'){
                visit(grid,i,j);
                num ++;
                console.log(`num=${i},${j}`);
            }
        }
    }

    //console.log(num);
    return num;
}

//console.log(numIsland(grid_01));
console.table(grid_02);
console.log(numIsland(grid_02));

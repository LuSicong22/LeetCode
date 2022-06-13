### BackTrack
Java
```java
class Solution {
    private static final int[][] DIRECTIONS = {{0,1},{1,0},{0,-1},{-1,0}};
    private int rows;
    private int cols;
    private int length;
    private boolean[][] visited;
    private char[] charArr;
    private char[][] board;

    public boolean exist(char[][] board, String word) {
        rows=board.length;
        cols=board[0].length;
        visited=new boolean[rows][cols];
        length=word.length();
        charArr=word.toCharArray();
        this.board=board;
        for (int i=0;i<rows;i++){
            for (int j=0;j<cols;j++){
                if (dfs(i,j,0)){
                    return true;
                }
            }
        }
        return false;
    }

    public boolean dfs(int i,int j, int index){
        if (index==length-1){
            return board[i][j]==charArr[index];
        }
        if (board[i][j]==charArr[index]){
            visited[i][j]=true;
            for (int[] dir:DIRECTIONS){
                int newI=i+dir[0],newJ=j+dir[1];
                if (newI>=0&&newI<rows&&newJ>=0&&newJ<cols){
                    if(!visited[newI][newJ]){
                        if (dfs(newI,newJ,index+1)){
                        return true;
                        }
                    }
                    
                }
            }
            visited[i][j]=false;
        }
        return false;
    }
}
```

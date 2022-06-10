### Search from Top Right corner
Java
```java
class Solution {
    public boolean findNumberIn2DArray(int[][] matrix, int target) {
        if (matrix.length==0){
            return false;
        }
        int rows=matrix.length;
        int cols=matrix[0].length;
        int i=0;
        int j=cols-1;
        while(i<rows&&j>=0){
            if (target==matrix[i][j]){
                return true;
            }
            if (target<matrix[i][j]){
                j--;
            }else{
                i++;
            }
        }
        return false;
    }
}
```

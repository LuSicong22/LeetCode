### DP
Java
```java
class Solution {
    public int cuttingRope(int n) {
        int[] dp=new int[n+1];
        for (int i=2;i<=n;i++){
            int currMax=0;
            for (int j=0;j<i;j++){
                currMax=Math.max(currMax,Math.max(j*dp[i-j],j*(i-j)));
            }
            dp[i]=currMax;
        }
        return dp[n];
    }
}
```

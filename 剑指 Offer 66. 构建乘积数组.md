Java
```java
class Solution {
    public int[] constructArr(int[] a) {
        int n=a.length;
        int[] ans=new int[n];
        if(n==0){
            return ans;
        }
        ans[0]=1;
        for (int i=1;i<n;i++){
            ans[i]=ans[i-1]*a[i-1];
        }
        int R=1;
        for (int i=n-1;i>=0;i--){
            ans[i]=ans[i]*R;
            R*=a[i];
        }
        return ans;
    }
}
```

Java
```java
class Solution {
    public boolean validateStackSequences(int[] pushed, int[] popped) {
        int n=pushed.length;
        int j=0;
        Deque<Integer> stack=new ArrayDeque<>();
        for(int x:pushed){
            stack.push(x);
            while(!stack.isEmpty() && stack.peek()==popped[j]){
                stack.pop();
                j++;
            }
        }
        return j==n;
    }
}
```

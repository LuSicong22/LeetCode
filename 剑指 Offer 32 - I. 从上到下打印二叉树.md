### BFS
Java
```java
class Solution {
    public int[] levelOrder(TreeNode root) {
        if(root==null){
            return new int[0];
        }
        Deque<TreeNode> q=new ArrayDeque<TreeNode>();
        q.offer(root);
        List<Integer> res=new ArrayList<Integer>();
        while(!q.isEmpty()){
            int size=q.size();
            TreeNode node=q.poll();
            res.add(node.val);
            if (node.left!=null){
                q.offer(node.left);
            }
            if (node.right!=null){
                q.offer(node.right);
            }
        }
        int[] arr=new int[res.size()];
        for (int i=0;i<res.size();i++){
            arr[i]=res.get(i);
        }
        return arr;
    }
}
```

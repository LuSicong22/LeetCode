### BFS
Java
```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> res = new ArrayList<>();
        if (root==null){
            return res;
        }
        Deque<TreeNode> queue  = new ArrayDeque<TreeNode>();
        boolean isOddLevel = true;
        queue.offer(root);
        while(!queue.isEmpty()){
            int levelSize = queue.size();
            Deque<Integer> level = new LinkedList<Integer>();
            for (int i=0;i<levelSize;i++){
                TreeNode node = queue.poll();
                if(isOddLevel){
                    level.offerLast(node.val);
                }else{
                    level.offerFirst(node.val);
                }
                if(node.left!=null){
                    queue.offer(node.left);
                }
                if (node.right!=null){
                    queue.offer(node.right);
                }
            }
            res.add(new LinkedList<>(level));
            isOddLevel=!isOddLevel;
        }
        return res;
    }
}
```

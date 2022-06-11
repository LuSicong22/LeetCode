### BackTrack
Java
```java
class Solution {
    private List<Integer> path;
    private List<List<Integer>> res;
    
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        path=new ArrayList<Integer>();
        res= new ArrayList<List<Integer>>();
        dfs(root, targetSum);
        return res;
    }
    
    public void dfs(TreeNode root, int targetSum){
        if (root==null){
            return;
        }
        
        path.add(root.val);
        if (root.left==null&&root.right==null){
            if (root.val==targetSum){
                res.add(new ArrayList<Integer>(path));
            }
        }
        dfs(root.left,targetSum-root.val);
        dfs(root.right,targetSum-root.val);
        path.remove(path.size()-1);
    }
}
```

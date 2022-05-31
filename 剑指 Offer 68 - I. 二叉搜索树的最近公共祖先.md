Java
```java
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if ((p.val-root.val)*(q.val-root.val)<=0) {
            return root;
        }
        if (p.val<root.val){
            return lowestCommonAncestor(root.left,p,q);
        }else{
            return lowestCommonAncestor(root.right,p,q);
        }
    }
}
```

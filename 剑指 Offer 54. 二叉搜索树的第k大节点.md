Java
```java
class Solution {
    int res, count;

    public int kthLargest(TreeNode root, int k) {
        count=k;
        inorder(root);
        return res;
    }

    public void inorder(TreeNode root) {
        if (root == null ) return;
        inorder(root.right);
        count--;
        if (count == 0) {
            res=root.val;
            return;
        }
        inorder(root.left);
    }
}
```

### Two pointers
Java
```java
class Solution {
    public ListNode deleteNode(ListNode head, int val) {
        if (head.val==val) return head.next;
        ListNode prev=head,curr=head.next;
        while(curr!=null && curr.val!=val){
            prev=curr;
            curr=curr.next;
        }
        if (curr!=null) prev.next=curr.next;
        return head;
    }
}
```

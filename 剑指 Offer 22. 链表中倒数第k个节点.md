## Method 1： Iterate

```java
class Solution {
    public ListNode getKthFromEnd(ListNode head, int k) {
        int n = 0;
        ListNode node = null;

        for (node = head; node != null; node = node.next) {
            n++;
        }
        for (node = head; n > k; n--) {
            node = node.next;
        }

        return node;
    }
}
```

## Method 2: Tow pointers

```java
class Solution {
    public ListNode getKthFromEnd(ListNode head, int k) {
        ListNode fast=head;
        ListNode slow=head;
        while(fast!=null && k>0){
            fast=fast.next;
            k--;
        }
        while(fast!=null){
            fast=fast.next;
            slow=slow.next;
        }

        return slow;
    }
}
```

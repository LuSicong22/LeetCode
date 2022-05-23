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
Go
```go
func getKthFromEnd(head *ListNode, k int) *ListNode {
    count := 0
    for tmp:=head;tmp != nil;tmp=tmp.Next {
        count++
    }
    for i:=0;i<count-k;i++ {
        head=head.Next
    }
    return head
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
Go
```go
func getKthFromEnd(head *ListNode, k int) *ListNode {
    slow, fast := head, head
    for fast != nil && k>0 {
        fast = fast.Next
        k--
    }
    for fast !=nil {
        slow = slow.Next
        fast = fast.Next
    }
    return slow
}
```

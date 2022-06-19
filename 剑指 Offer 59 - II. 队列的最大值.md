### Mono Deque
Java
```java
class MaxQueue {
    Queue<Integer> q;
    Deque<Integer> d;

    public MaxQueue() {
        q=new LinkedList<>();
        d=new ArrayDeque<>();
    }
    
    public int max_value() {
        if (d.isEmpty()){
            return -1;
        }
        return d.peekFirst();
    }
    
    public void push_back(int value) {
        while(!d.isEmpty()&&value>d.peekLast()){
            d.pollLast();
        }
        d.offerLast(value);
        q.offer(value);
    }
    
    public int pop_front() {
        if (q.isEmpty()){
            return -1;
        }
        int res=q.poll();
        if (res==d.peekFirst()){
            d.pollFirst();
        }
        return res;
    }
}
```

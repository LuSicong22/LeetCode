Go
```go
func lastRemaining(n int, m int) int {
    pos:=0
    for i:=2;i<n+1;i++ {
        pos=(pos+m)%i
    }
    return pos
}
```

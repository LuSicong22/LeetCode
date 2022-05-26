Go
```go
func findContinuousSequence(target int) [][]int {
    res := [][]int{}
    for l,r:=1,2;l<r; {
        sum:=(l+r)*(r-l+1)/2
        if sum==target {
            a:=make([]int,r-l+1)
            for i:=l;i<=r;i++ {
                a[i-l]=i
            }
            res=append(res,a)
            l++
        } else if sum<target {
            r++
        } else {
            l++
        }
    }
    return res
}
```

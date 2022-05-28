### 1. O(n)
Go
```go
func missingNumber(nums []int) int {
    n:=len(nums)
    sum:=n*(n+1)/2
    a:=0
    for _,v:=range nums {
        a+=v
    }    
    return sum-a
}
```

### 2. O(logn)
Go
```go
func missingNumber(nums []int) int {
    i,j :=0, len(nums)-1
    for i<=j {
        m:=(j+i)/2
        if nums[m]==m {
            i=m+1
        }else {
            j=m-1
        }
    }
    return i
}
```

## 1. Slow Fast Pointers
Go
```go
func exchange(nums []int) []int {
    for i,j:=0,0;i<len(nums);i++ {
        if nums[i]&1==1 {
            nums[i],nums[j]=nums[j],nums[i]
            j++
        }
    }
    return nums
}
```

## 2. Left Right Pointers
Go
```go
func exchange(nums []int) []int {
    left, right := 0, len(nums)-1
    for left<right {
        if nums[left]&1 !=0 {
            left++
            continue
        }
        if nums[right]&1!=1 {
            right--
            continue
        }
        nums[left],nums[right]=nums[right],nums[left]
    }
    return nums
}
```

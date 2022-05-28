Go
```go
func isStraight(nums []int) bool {
    min, max := 14, 0
    repeat:=make(map[int]bool)
    for i:=0;i<len(nums);i++ {
        if nums[i]==0 {
            continue
        }
        if nums[i]<min {
            min=nums[i]
        }
        if nums[i]>max {
            max=nums[i]
        }
        if repeat[nums[i]] {
            return false
        } else {
            repeat[nums[i]]=true
        }
    }
    return max-min<5
}
```

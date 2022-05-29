### Hashmap
Go
```go
func twoSum(nums []int, target int) []int {
    m := make(map[int]bool) 
    for _,num:=range nums {
        diff:=target-num
        if _,has:=m[diff];has{
            return []int{diff, num}
        }
        m[num]=true
    }
    return nil
}
```

### Two pointers
Go
```
func twoSum(nums []int, target int) []int {
    i,j:=0,len(nums)-1
    for i<j {
        sum:=nums[i]+nums[j]
        if sum<target {
            i++
        }else if sum>target{
            j--
        }else {
            return []int{nums[i],nums[j]}
        }
    }
    return []int{}
}
```

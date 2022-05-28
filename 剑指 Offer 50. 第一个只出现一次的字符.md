Go
```go
func firstUniqChar(s string) byte {
    count := [26]int{}
    for _,v :=range s {
        count[v-'a']++
    }
    for i,v :=range s {
        if count[v-'a']==1 {
            return s[i]
        }
    }
    return ' '
}
```

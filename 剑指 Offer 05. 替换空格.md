Go
```go
func replaceSpace(s string) string {
    res := ""
    for _,v:=range s {
        if v==' ' {
            res+="%20"
        } else {
            res+=string(v)
        }
    }
    return res
}
```
string.Replace()
```go
func replaceSpace(s string) string {
    return strings.Replace(s," ","%20",-1)
}
```

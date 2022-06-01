### Two pointers
Java
```java
class Solution {
    public String reverseWords(String s) {
        s=s.trim();
        int j=s.length()-1, i=j;
        StringBuilder sb=new StringBuilder();
        while (i>=0) {
            while (i>=0 && s.charAt(i)!=' ') i--;
            sb.append(s.substring(i+1,j+1)+" ");
            while (i>=0 && s.charAt(i)==' ') i--;
            j=i;
        }
        return sb.toString().trim();
    }
}
```

### In build methods
Java
```java
class Solution {
    public String reverseWords(String s) {
        // 除去开头和末尾的空白字符
        s = s.trim();
        // 正则匹配连续的空白字符作为分隔符分割
        List<String> wordList = Arrays.asList(s.split("\\s+"));
        Collections.reverse(wordList);
        return String.join(" ", wordList);
    }
}
```

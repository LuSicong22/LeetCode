### Sort
Java
```java
class Solution {
    public String minNumber(int[] nums) {
        String[] s=new String[nums.length];
        for (int i=0;i<nums.length;i++){
            s[i]=String.valueOf(nums[i]);
        }
        Arrays.sort(s,(x,y)->(x+y).compareTo(y+x));
        StringBuilder sb=new StringBuilder();
        for (int i=0;i<nums.length;i++){
            sb.append(s[i]);
        }
        return sb.toString();
    }
}
```

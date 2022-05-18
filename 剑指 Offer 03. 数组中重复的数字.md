## Method 1： HashSet

```java
class Solution {
    public int findRepeatNumber(int[] nums) {
        Set<Integer> set = new HashSet<Integer>();
        for(int num:nums){
            if(set.contains(num)) return num;
            set.add(num);
        }
        return -1;
    }
}
```

## Method 2: Sort

```java
class Solution {
    public int findRepeatNumber(int[] nums) {
        int i=0;
        while(i<nums.length){
            if(nums[i]==i){
                i++;
                continue;
            }
            if(nums[nums[i]]==nums[i]) return nums[i];
            int tmp=nums[i];
            nums[i]=nums[tmp];
            nums[tmp]=tmp;
        }
        return -1;
    }
}
```

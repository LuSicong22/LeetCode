### BS
java
```java
class Solution {
    public int search(int[] nums, int target) {
        int low=0,high=nums.length-1;
        while (low<=high) {
            int mid = low+(high-low)/2;
            if (nums[mid]<target){
                low=mid+1;
            } else if(nums[mid]>target){
                high=mid-1;
            } else {
                int res=1;
                int i=mid+1,j=mid-1;
                while(i<nums.length&&nums[i]==target){
                    res++;
                    i++;
                }
                while(j>=0&&nums[j]==target){
                    res++;
                    j--;
                }
                return res;
            }
        }
        return 0;
    }
}
```

Optimized:
```java
class Solution {
    public int search(int[] nums, int target) {
        return helper(nums,target)-helper(nums,target-1);
    }

    int helper(int[] nums, int target){
        int low=0,high=nums.length-1;
        while(low<=high){
            int mid=low+(high-low)/2;
            if(nums[mid]<=target){
                low=mid+1;
            }else {
                high=mid-1;
            }
        }
        return low;
    }
}
```

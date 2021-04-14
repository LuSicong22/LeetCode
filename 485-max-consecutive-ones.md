## 485. Max Consecutive Ones (Easy)

https://leetcode.com/problems/max-consecutive-ones/

### Problem Description

Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:
```
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

```
### Solutions

Javascript:

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max=0;
    let current_number_of_ones=0;
    
    for(let item of nums){
        if(item==1){
            current_number_of_ones+=1;
            max=Math.max(max,current_number_of_ones);
        }
        else{
            current_number_of_ones=0;            
        }
    }
    return max;
};
```
```javascript
let findMaxConsecutiveOnes = (nums, ans = 0) => {
    for (let i = 0, cur = 0; i < nums.length; ++i)
        ans = Math.max(ans, cur = nums[i] == 0 ? 0 : cur + 1);
    return ans;
};
```

Java:

```java
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int max=0;
        int current_number_of_ones=0;
        
        for(int item:nums){
            if(item==1){
                current_number_of_ones++;
                max=Math.max(max,current_number_of_ones);
            }else{
                current_number_of_ones=0;
            }
            
        }
        return max;
    }
}
```
```java
public int findMaxConsecutiveOnes(int[] nums) {
        int maxHere = 0, max = 0;
        for (int n : nums)
            max = Math.max(max, maxHere = n == 0 ? 0 : maxHere + 1);
        return max; 
    } 
```

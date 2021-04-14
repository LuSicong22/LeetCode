## Problem Link（485. Max Consecutive Ones）

https://leetcode.com/problems/max-consecutive-ones/

## Problem Description

```
Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:
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

### Next Permutuation
Java
```java
class Solution {
    public String[] permutation(String s) {
        char[] charArr = s.toCharArray();
        Arrays.sort(charArr);
        List<String> res=new ArrayList<String>();
        res.add(new String(charArr));
        while(nextPermutation(charArr)){
            res.add(new String(charArr));
        }
        String[] resArr = new String[res.size()];
        resArr=res.toArray(resArr);
        return resArr;
    }

    public boolean nextPermutation(char[] arr) {
        int i = arr.length-2;
        while (i>=0 && arr[i]>=arr[i+1]) {
            i--;
        }
        if (i<0){
            return false;
        }
       
        int j=arr.length-1;
        while (j>=0&& arr[j]<=arr[i]) {
            j--;
        }
        swap(arr,i,j);
        reverse(arr,i+1);
        return true;
    }

    public void swap(char[] arr, int i, int j) {
        char tmp = arr[i];
        arr[i]=arr[j];
        arr[j]=tmp;
    }

    public void reverse (char[] arr, int left){
        int right=arr.length-1;
        while (left < right) {
            swap (arr, left, right);
            left++;
            right--;
        }
    }
}
```

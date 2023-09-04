/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const n = nums.length;
    let index = -1;
    
    for (let i = n - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            index = i - 1;
            break;
        }
    }
    
    if (index === -1) {
        reverse(nums, 0, n - 1);
        return nums;
    }
    let j = n - 1;
    
    for (let i = n - 1; i >= index + 1; i--) {
        if (nums[i] > nums[index]) {
            j = i;
            break;
        }
    }
    
    swap(nums, index, j);
    reverse(nums, index + 1, n - 1);
    return nums;
    
};

const reverse = (nums, i, j) => {
    while (i < j) {
        swap(nums, i, j);
        i++;
        j--;
    }
};

const swap = (nums, i, index) => {
    const temp = nums[index];
    nums[index] = nums[i];
    nums[i] = temp;
};
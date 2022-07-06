var findKthLargest = function(nums, k) {
    nums.sort((a,b) => (b-a));
    return nums[k-1];
};

const nums1 = [3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6];

console.log(findKthLargest(nums1,2));

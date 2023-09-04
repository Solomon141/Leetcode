/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
    let med = 0;
    let bothN = [...nums1, ...nums2];
    let nArr = bothN.sort((a,b)=> a-b);
    let arrlen = parseInt(nArr.length/2);
    
    if(nArr.length % 2 == 0){
        med = (nArr[arrlen] + nArr[arrlen-1])/2;
    }else{
        med = nArr[arrlen];
    }
    return med;
};
var search = function(nums, target) {
    let start = 0
    let end = nums.length -1
    let mid = Math.floor((start + end ) / 2)

    while (start <= end){
        if (nums[mid] === target){
            return mid
        } else if (nums[mid] > target){
            end = mid - 1
        } else {
            start = mid + 1
        }
        mid = Math.floor((start + end) / 2)
    }
    return "-1"
    
};
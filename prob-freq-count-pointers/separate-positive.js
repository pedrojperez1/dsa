// add whatever parameters you deem necessary
function separatePositive(nums) {
  let negStartIdx = 0
  let currIdx = 0
  while (currIdx < nums.length) {
    if (nums[currIdx] > 0) {
      // if currIdx is positive, swap with negSTartidx
      let temp = nums[currIdx]
      nums[currIdx] = nums[negStartIdx]
      nums[negStartIdx] = temp
      currIdx++
      negStartIdx++
    } else {
      // if currIdx is negative, set negStartIdx to currIdx
      currIdx++
    }
  }
  return nums
}

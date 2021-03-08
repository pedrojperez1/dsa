// add whatever parameters you deem necessary
function averagePair(nums, targetAvg) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    const currentAvg = (nums[left] + nums[right]) / 2
    if (currentAvg === targetAvg) return true
    if (currentAvg < targetAvg) {
      left++
    } else {
      right --
    }
  }
  return false
}

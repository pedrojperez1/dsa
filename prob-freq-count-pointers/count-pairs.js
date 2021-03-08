// add whatever parameters you deem necessary
function countPairs(nums, target) {
  nums.sort((a, b) => Number(a) - Number(b))
  console.log("sorted nums:", nums)
  let left = 0
  let right = nums.length - 1
  let total = 0
  while (left < right) {
    if (nums[left] + nums[right] === target) {
      total++
      left++
      right--
    } else if (nums[left] + nums[right] > target) {
      right--
    } else {
      left++
    }
  }
  return total

}

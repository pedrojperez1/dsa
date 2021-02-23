function merge(array1, array2) {
  const merged = []
  let pointer1 = 0
  let pointer2 = 0
  while (pointer1 < array1.length && pointer2 < array2.length) {
    if (array1[pointer1] < array2[pointer2]) {
      merged.push(array1[pointer1])
      pointer1++
    } else {
      merged.push(array2[pointer2])
      pointer2++
    }
  }
  while (pointer1 < array1.length) {
    merged.push(array1[pointer1])
    pointer1++
  }
  while (pointer2 < array2.length) {
    merged.push(array2[pointer2])
    pointer2++
  }
  return merged
}

function mergeSort(arr) {
  if (arr.length === 1) return arr
  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

module.exports = { merge, mergeSort};
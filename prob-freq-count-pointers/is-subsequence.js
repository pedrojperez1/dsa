// add whatever parameters you deem necessary
function isSubsequence(target, source) {
  // [a, b, c]
  let targetIdx = 0
  let sourceIdx = 0
  while (sourceIdx < source.length) {
    
    if (target[targetIdx] === source[sourceIdx]) {
      targetIdx++
    }
    sourceIdx++
    console.log("target idx:", targetIdx, "source idx:", sourceIdx)
  }
  return !(targetIdx < target.length)
}

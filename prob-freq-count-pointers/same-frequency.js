// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  const num1String = num1.toString()
  const num2String = num2.toString()
  if (num1String.length !== num2String.length) return false
  const obj = {}
  for (let letter1 of num1String) {
    obj[letter1] = obj[letter1] + 1 || 1
  }
  for (let letter2 of num2String) {
    if (!obj[letter2]) return false
  }
  return true
}

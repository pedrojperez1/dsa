// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
  const obj = {}
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i] ? values[i] : null
  }
  return obj
}

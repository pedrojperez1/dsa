function curriedAdd() {
  let total = 0
  function addToTotal(num=undefined) {
    if (num) {
      total += num
      return addToTotal
    } else {
      return total
    }
  }
  return addToTotal
}

module.exports = { curriedAdd };

function createAccount(pin, amount) {
  let balance = amount

  const checkBalance = pinProvided => {
    if (pin === pinProvided) return `Your balance is ${balance}`
    return "Invalid PIN"
  }

  const deposit = (pinProvided, depositAmount) => {
    if (pin === pinProvided) {
      balance = balance + depositAmount
      return `Your new balance is ${balance}`
    } else {
      return "Invalid PIN"
    }
  }

  const withdraw = (pinProvided, withdrawAmt) => {
    if (pin === pinProvided) {
      if (balance - withdrawAmt >= 0) {
        balance -= withdrawAmt
        return `Successfully withdrew $${withdrawAmt}. Current balance: $${balance}`
      } else {
        return `Not enough funds. Transaction cancelled.`
      }
    }
    else {
      return "Invalid PIN"
    }
  }

  const changePin = (pinProvided, newPin) => {
    if (pin === pinProvided) {
      pin = newPin
      return "PIN successfully changed."
    } else {
      return "Invalid PIN"
    }
  }

  return {
    checkBalance,
    deposit,
    withdraw,
    changePin
  }
}

module.exports = { createAccount };

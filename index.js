const returnTrue = () => {
  return true
}

const returnFalse = () => {
  return false
}

if (typeof module !== 'undefined' &&
  module.exports != null) {
  module.exports = {
    returnTrue,
    returnFalse
  }
}

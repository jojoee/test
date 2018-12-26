const res = require('./index')

describe('returnTrue', () => {
  test('true', () => {
    expect(res.returnTrue()).toBeTruthy()
  })
})

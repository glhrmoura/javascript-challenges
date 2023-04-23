const test = require('tape')

const numberFrequency = require('./number-frequency')

test('It finds the highest recurring number of a sorted list', assert => {
  const list = [1, 2, 3, 4, 3]
  const actual = numberFrequency(list)
  const expected = 3

  assert.equal(actual, expected, 'should return 3')

  assert.end()
})

test('It breaks a tie by returning the first found number', assert => {
  const list = [1, 2, 3, 4, 3, 1]
  const actual = numberFrequency(list)
  const expected = 1

  assert.equal(actual, expected, 'should return 1 since 1 appears before 3')

  assert.end()
})

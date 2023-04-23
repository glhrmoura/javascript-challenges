const test = require('tape')

const babylonian = require('./babylonian')

test('It calculates an integer square root', assert => {
  const radicand = 16
  const actual = babylonian(radicand)
  const expected = 4
  
  assert.equal(actual, expected, 'should get 4 as the square root of 16')

  assert.end()
})

test('It calculates a decimal square root', assert => {
  const radicand = 423432.34
  const actual = babylonian(radicand)
  const expected = 650.7167893945875

  assert.equal(actual, expected, 'should ')

  assert.end()
})

test('It calculates infinite fraction square roots', assert => {
  const radicand = 10
  const actual = babylonian(radicand)
  const expected = 3.1622776601683795

  assert.equal(actual, expected, 'should properly end infinite decimal square roots')

  assert.end()
})

test('It returns NaN if a negative value is passed as the radicand', assert => {
  const negativeRadicand = -10
  const actual = babylonian(negativeRadicand)

  assert.ok(isNaN(actual), 'should return NaN for negative radicand')

  assert.end()
})

test('It returns NaN if a non-number is passed as the radicand', assert => {
  const stringRadicand = 'some string'
  const actual = babylonian(stringRadicand)

  assert.ok(isNaN(actual), 'should return NaN for non-number radicand')

  assert.end()
})

test('It returns NaN if NaN is passed as the radicand', assert => {
  const nanRadicand = NaN
  const actual = babylonian(nanRadicand)

  assert.ok(isNaN(actual), 'should return NaN for NaN radicand')

  assert.end()
})

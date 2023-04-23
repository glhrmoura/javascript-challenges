const test = require('tape')

const balancedParens = require('./balanced-parens')

test('It matches braces when only one pair of one type exists', assert => {
  assert.equal(balancedParens('()'), true)
  assert.equal(balancedParens('[]'), true)
  assert.equal(balancedParens('('), false)
  assert.equal(balancedParens(']'), false)

  assert.end()
})

test('It matches braces when multiple pairs of one type exist', assert => {
  assert.equal(balancedParens('((()))'), true)
  assert.equal(balancedParens('((())'), false)

  assert.end()
})

test('It matches braces when multiple pairs of multiple types exist', assert => {
  assert.equal(balancedParens('{([])}'), true)
  assert.equal(balancedParens('{([]}'), false)

  assert.end()
})

test('It works correctly when no braces exist', assert => {
  assert.equal(balancedParens(''), true)
  assert.equal(balancedParens('hello world'), true)

  assert.end()
})

test('It matches braces when braces and other characters exist', assert => {
  assert.equal(balancedParens('function () { console.log(["cat", "dog"]) }'), true)
  assert.equal(balancedParens('function ( { console.log(["cat", "dog"]) }'), false)

  assert.end()
})

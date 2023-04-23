const test = require('tape')

const stackMachineCalculator = require('./stack-machine-calculator')

test('Pushing values', assert => {
  assert.equal(stackMachineCalculator('13'), 13)
  assert.equal(stackMachineCalculator('13 10 9 7'), 7)

  assert.end()
})

test.skip('Duplicating values', assert => {
  assert.equal(stackMachineCalculator('9 11 DUP'), 11)

  assert.end()
})

test.skip('Popping values', assert => {
  assert.equal(stackMachineCalculator('1 3 POP'), 1)

  assert.end()
})

test.skip('Adding two values', assert => {
  assert.equal(stackMachineCalculator('5 12 +'), 17)

  assert.end()
})

test.skip('Subtracting two values', assert => {
  assert.equal(stackMachineCalculator('4 10 -'), 6)

  assert.end()
})

test.skip('Complex example', assert => {
  assert.equal(stackMachineCalculator('13 DUP 4 POP 5 DUP + DUP + -'), 7)

  assert.end()
})

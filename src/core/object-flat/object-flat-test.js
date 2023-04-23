const test = require('tape')

const flat = require('./object-flat')

test('Take a nested object and leave all properties with only one level', assert => {
  const person = {
    phones: {
      job: '1111-1111',
      personal: '2222-2222',
    }
  }

  const expect = {
    'phones.job': '1111-1111',
    'phones.personal': '2222-2222',
  }

  assert.deepEqual(flat(person), expect);
  assert.end()
})

test('Take a nested object with multiple levels and leave all properties at one level', assert => {
  const person = {
    phones: {
      job: '1111-1111',
      personal: '2222-2222',
    },
    friends: {
      john: {
        phones: {
          job: '5555-5555',
          personal: '6666-6666',
        },
      },
      kelly: {
        phones: {
          job: '3333-3333',
          personal: '9999-9999',
        },
      }
    }
  }

  const expect = {
    'phones.job': '1111-1111',
    'phones.personal': '2222-2222',
    'friends.john.phones.job': '5555-5555',
    'friends.john.phones.personal': '6666-6666',
    'friends.kelly.phones.job': '3333-3333',
    'friends.kelly.phones.personal': '9999-9999',
  };

  assert.deepEqual(flat(person), expect);
  assert.end()
})
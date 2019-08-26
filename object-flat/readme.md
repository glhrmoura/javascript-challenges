# Object Flat

### Background

I was given a task where I had to create a tool that would transform an object with other nested objects, at various levels, into an object with only one nesting level.

Here is a simplified version of the code I created, but it solves the proposed problem.

### Flat an Object

Given JavaScript objects like this

```javascript
person = {
  phones: {
    job: '1111-1111',
    personal: '2222-2222',
  }
}
```

Create a function that returns an object with only one nesting level.

```javascript
flat(person)

// returns:
// {
//   'phones.job': '1111-1111',
//   'phones.personal': '2222-2222',
// }
// 
```

### Getting Started

The file you will be editing is `object-flat.js`.

The `object-flat-test.js` file includes a test suite to run your code against.

Run `node object-flat-test.js` to run the test suite in full. As you write code
to pass tests, make sure you unskip succeeding tests by changing `test.skip` to
just `test`.

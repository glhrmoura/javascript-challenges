const isObject = (target) => {
  return target.__proto__.constructor === Object;
};

const flat = (input, output = {}, nextKey = '') => {
  for (let key in input) {
    let crrKey = nextKey ? `${nextKey}.${key}`: key;
    
    if (isObject(input[key])) {
      flat(input[key], output, crrKey);
    } else {
      output[crrKey] = input[key];
    }
  }

  return output;
};

module.exports = flat;
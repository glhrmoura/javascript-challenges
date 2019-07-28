const all = iterable => {
  return new Promise((resolve, reject) => {
    if (!iterable[Symbol.iterator]) {
      reject(new TypeError('object is not iterable (cannot read property Symbol(Symbol.iterator))'));
    }

    let count = 0;
    const promises = [];
    const toArr = [...iterable];

    if (!toArr.length) resolve([]);

    for (let key in toArr) {
      let promise = Promise.resolve(toArr[key]);

      promise.then(data => {
        count++;
        promises[key] = data;
        
        if (toArr.length === count) resolve(promises);
      })
      .catch(err => reject(err));
    }
  });
};

module.exports = all;
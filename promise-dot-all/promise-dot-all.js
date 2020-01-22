const all = (iterable) => {
  return new Promise((resolve, reject) => {
    if (!iterable[Symbol.iterator]) {
      reject(new TypeError('object is not iterable (cannot read property Symbol(Symbol.iterator))'));
    }

    let count = 0;
    const promises = [];
    const entries = Object.entries(iterable)

    if (!entries.length) resolve([]);

    for (let [ key, value ] of entries) {
      Promise.resolve(value)
        .then((data) => {
          count++;
          promises[key] = data;
          
          if (entries.length === count) {
            resolve(promises);
          }
        })
        .catch((err) => {
          reject(err)
        });
    }
  });
};

module.exports = all;
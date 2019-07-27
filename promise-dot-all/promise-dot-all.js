function all (promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    const arrPromises = [];

    if (!Object.keys(promises).length) {
      resolve([]);
    }

    for (let key in promises) {
      Promise.resolve(promises[key])
        .then(data => {
          count++;
          arrPromises[key] = data;

          if (promises.length === count) {
            resolve(arrPromises);
          }
        }).catch(err => {
          reject(err);
        });
    }
  });
};

module.exports = all;
const isObject = obj => {
  return obj.__proto__ === Object.prototype;
};

const flatten = (obj, path = '', objF = {}) => {
  for (let key in obj) {
    if (isObject(obj[key])) {
      const result = flatten(obj[key], path ? `${path}.${key}` : key, objF);
      objF = { ...objF, ...result };
    } else {
      objF[path ? `${path}.${key}` : key] = obj[key];
    }
  }

  return objF;
};

const diff = (oldCode, newCode) => {
  const diffRemove = [];
  const diffAdd = [];
  const oldCodeFlat = flatten(oldCode);
  const newCodeFlat = flatten(newCode);

  Object.keys(oldCodeFlat).map(oldKey => {
    if (!newCodeFlat[oldKey]) {
      diffRemove.push(['-', oldKey, oldCodeFlat[oldKey]]);
    }
  });

  Object.keys(newCodeFlat).map(newKey => {
    if (!oldCodeFlat[newKey]) {
      diffAdd.push(['+', newKey, newCodeFlat[newKey]]);
    }
  });

  return [...diffRemove, ...diffAdd];
};

module.exports = diff;

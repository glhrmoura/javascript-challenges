const flat = (obj, path = '', f = {}) => {
	let flatten = {...f};

	for (let key in obj) {
		if (typeof obj[key] === 'object') {
        const result = flat(obj[key], path ? `${path}.${key}` : key, flatten);
        flatten = {...flatten, ...result}
      } else {
        flatten[path ? `${path}.${key}` : key] = obj[key];
      }
    }

	return flatten;
};

const diff = (oldCode, newCode) => {
  const diffRemove = [];
  const diffAdd = [];
  const oldCodeFlat = flat(oldCode);
  const newCodeFlat = flat(newCode);

  Object.keys(oldCodeFlat).map(oldKey => {
    if (!newCodeFlat[oldKey]) {
      diffRemove.push(['-', oldKey, oldCodeFlat[oldKey]]);
    }
  });

  Object.keys(newCodeFlat).map(newKey => {
    if (!oldCodeFlat[newKey]) {
      diffAdd.push(['+', newKey, newCodeFlat[newKey]]);
    };
  });

  return [ ...diffRemove, ...diffAdd, ];
}

module.exports = diff;
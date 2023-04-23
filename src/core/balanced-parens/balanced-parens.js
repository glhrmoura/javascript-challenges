const balancedParens = input => {
  const opens = [];
  const chars = [...input];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < chars.length; i++) {
    if (/\)\]\}]/.test(chars[i]) && !opens.length) {
      return false;
    }

    if (!/[\(\)\[\]\{\}]/.test(chars[i])) {
      continue;
    }

    if (/[\(\[\{]/.test(chars[i])) {
      opens.unshift(chars[i]);
    } else if (chars[i] === map[opens[0]]) {
      opens.shift();
    } else {
      return false;
    }
  }

  return !opens.length;
}

module.exports = balancedParens;

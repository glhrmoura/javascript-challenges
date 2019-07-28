const parensAreBalanced = input => {
  let open = '';
  const opens = [];
  const map = { '(': ')', '[': ']', '{': '}', };
  const parens = [...input].filter(char => /[\(\)\[\]\{\}]/.test(char));

  for (let i = 0; i < parens.length; i++) {
    if (/\)\]\}]/.test(parens[i]) && !opens.length) {
      return false;
    }

    if (/[\(\[\{]/.test(parens[i])) {
      open = parens[i];
      opens.unshift(parens[i]);
    } else if (parens[i] === map[opens[0]]) {
      open = opens.shift();
    } else {
      return false;
    }
  }

  return !opens.length;
}

module.exports = parensAreBalanced;

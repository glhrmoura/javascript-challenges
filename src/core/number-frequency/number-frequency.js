const numberFrequency = (set) => {
  return set.sort((a, b) =>
    set.filter(v => v === a).length
    - set.filter(v => v === b).length
  ).pop();
}

module.exports = numberFrequency

const addEventing = target => {
  const events = {};

  return {
    ...target,
    on(name, callback) {
      if (events[name]) {
        events[name].push(callback);
      } else {
        events[name] = [callback];
      }
    },
    trigger(name, ...args) {
      if (events[name]) {
        events[name].map(cb => cb(...args));
      };
    },
  };
};

module.exports = addEventing;

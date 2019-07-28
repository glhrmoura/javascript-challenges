const addEventing = target => {
  const listeners = {};

  return {
    ...target,
    on(name, callback) {
      if (typeof callback === 'function') {
        if (!listeners[name]) {
          listeners[name] = [];
        }
        listeners[name].push(callback);
      }
    },
    trigger(name, ...args) {
      if (listeners[name]) {
        listeners[name].forEach(cb => cb(...args));
      };
    },
  };
};

module.exports = addEventing;

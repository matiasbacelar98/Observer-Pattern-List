const createObserver = () => {
  return {
    observers: [],
    addObserver(fn) {
      this.observers.push(fn);
    },
    removeObserver(fn) {
      this.observers = this.observers.filter(obs => obs !== fn);
    },
    notify(data) {
      if (this.observers.length > 0) {
        this.observers.forEach(obs => obs.update(data));
      }
    },
  };
};

export default createObserver;

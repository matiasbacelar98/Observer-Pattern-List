import createObserver from './Observer';

const createState = () => {
  return {
    ...createObserver(),
    state: [],
    update(data) {
      // Update state
      this.state = data;

      // Update observers
      this.notify(this.state);
    },
    get() {
      return this.state;
    },
  };
};

export default createState;

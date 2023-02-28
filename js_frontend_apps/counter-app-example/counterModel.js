class CounterModel {
  constructor() {
    this.counter = 0;
    console.log('Hello World');
  }

  getCounter() {
    return this.counter;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}

module.exports = CounterModel;

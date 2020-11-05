class Sorter {
  constructor(public collection: number[]) {}

  sort() {
    const { length } = this.collection;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const a = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = a;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 0, -3, 5]);
console.log("sorter.collection", sorter.collection);
sorter.sort();
console.log("sorter.collection", sorter.collection);

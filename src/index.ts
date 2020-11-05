class Sorter {
  constructor(public collection: number[] | string) {}

  sort() {
    const { length } = this.collection;

    // All this things works only if collection is number[]
    // (if collection is an array of numbers)
    if (this.collection instanceof Array) {
      // <-- This is type guard
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

    // Only going to work if collection is a string
    // If collection is a string do this logic instead:
    // ~~~~ logic to compare and swap characters in a string
    // Issues: 1. 'X' < 'a'
    //         2. collection[i] is readonly operation
    if (typeof this.collection === "string") {
      //
    }
  }
}

const sorter = new Sorter([10, 0, -3, 5]);
console.log("sorter.collection", sorter.collection);
sorter.sort();
console.log("sorter.collection", sorter.collection);

import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 20, -3, 5]);
const sorter = new Sorter(numbersCollection);
console.log("sorter.collection", sorter.collection);
sorter.sort();
console.log("numbersCollection.data", numbersCollection.data);

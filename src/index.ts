import { charactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 20, -3, 5]);
const sorter = new Sorter(numbersCollection);
console.log("numbersCollection.data", numbersCollection.data);
sorter.sort();
console.log("numbersCollection.data", numbersCollection.data);

const charCollection = new charactersCollection("CharactersCollection");
const sorter2 = new Sorter(charCollection);
console.log("charCollection", charCollection.data);
sorter2.sort();
console.log("charCollection", charCollection.data);

// import { CharactersCollection } from "./models/CharactersCollection";
import { LinkedList } from "./models/LinkedList";
// import { NumbersCollection } from "./models/NumbersCollection";
import { Sorter } from "./Sorter";

// const numbersCollection = new NumbersCollection([10, 20, -3, 5]);
// const sorter = new Sorter(numbersCollection);
// console.log("numbersCollection.data", numbersCollection.data);
// sorter.sort();
// console.log("numbersCollection.data", numbersCollection.data);

// const charCollection = new CharactersCollection("CharactersCollection");
// const sorter2 = new Sorter(charCollection);
// console.log("charCollection", charCollection.data);
// sorter2.sort();
// console.log("charCollection", charCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-4);
linkedList.add(12);

linkedList.print();

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();

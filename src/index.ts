import { CharactersCollection } from "./models/CharactersCollection";
import { LinkedList } from "./models/LinkedList";
import { NumbersCollection } from "./models/NumbersCollection";

const numbersCollection = new NumbersCollection([10, 20, -3, 5]);
console.log(`numbersCollection before sort: ${numbersCollection.data}`);
numbersCollection.sort();
console.log(`numbersCollection after sort: ${numbersCollection.data}`);

const charCollection = new CharactersCollection("Xaayb");
console.log(`charCollection before sort: "${charCollection.data}"`);
charCollection.sort();
console.log(`charCollection after sort: "${charCollection.data}"`);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-4);
linkedList.add(12);

console.log("linkedList before sort:");
linkedList.print();
console.log("linkedList after sort:");
linkedList.sort();
linkedList.print();

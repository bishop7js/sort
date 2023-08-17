import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([0, -2, 54, 100, 7]);
const charactersCollection = new CharactersCollection('Xssaay');
const sorter = new Sorter(charactersCollection);

sorter.sort();

console.log(charactersCollection.data);
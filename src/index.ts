import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([0, -2, 54, 100, 7]);
const sorter = new Sorter(numbersCollection);

sorter.sort();

console.log(numbersCollection);
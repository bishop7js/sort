import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {

    constructor(public data : string) {
        super();
    }

    get length() : number {
        return this.data.length;
    }
    
    compare(leftIndex: number, rightIndex: number) : boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number) : void {
        const characters = this.data.split('');

        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
    }
}
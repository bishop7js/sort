interface sortable {
  length: number;
  compare(rightIndex: number, leftIndex: number): boolean;
  swap(rightIndex: number, leftIndex: number): void;
}

export class Sorter {
  constructor(public collection: sortable) {}

  sort() : void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < j - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}

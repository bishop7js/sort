interface sortable {
  length: number;
  compare(rightIndex: number, leftIndex: number): boolean;
  swap(rightIndex: number, leftIndex: number): void;
}

export abstract class Sorter {

   abstract length: number;
   abstract compare(rightIndex: number, leftIndex: number): boolean;
   abstract swap(rightIndex: number, leftIndex: number): void;

  sort() : void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < j - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

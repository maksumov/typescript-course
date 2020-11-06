import { Sortable } from "../Sorter";

export class CharactersCollection implements Sortable {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const result =
      this.data.slice(0, leftIndex) +
      this.data[rightIndex] +
      this.data[leftIndex] +
      this.data.slice(rightIndex + 1);
    this.data = result;
  }
}

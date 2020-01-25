/**
 * An iterator for the Vector class.
 */
export class VectorIterator implements IterableIterator<number> {
  private index = 0;
  constructor(public vector: { get: (x: number) => any; length: number }) {}
  [Symbol.iterator](): IterableIterator<number> {
    return this;
  }
  next(): IteratorResult<number> {
    return {
      value: this.vector.get(this.index++),
      done: this.index > this.vector.length
    };
  }
}

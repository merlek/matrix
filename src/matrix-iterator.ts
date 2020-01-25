/**
 * An iterator for the Matrix class.
 */
export class MatrixIterator implements IterableIterator<number> {
  private count = 0;
  private total: number;
  constructor(
    public matrix: {
      get: (row: number, col: number) => number;
      rows: number;
      cols: number;
    }
  ) {
    this.total = this.matrix.rows * this.matrix.cols;
  }
  [Symbol.iterator](): IterableIterator<number> {
    return this;
  }
  next(): IteratorResult<any> {
    const indices = this.index(this.count++);
    const done = this.count > this.total;
    return {
      value: done ? undefined : this.matrix.get(indices.row, indices.col),
      done
    };
  }
  private index(count: number) {
    return {
      col: count % this.matrix.cols,
      row: Math.floor(count / this.matrix.cols)
    };
  }
}

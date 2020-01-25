import { dropFirst, repeat } from 'utility-functions';
import { MatrixIterator } from './matrix-iterator';
import { Vector } from './vector';

function dimensionsError(a: Matrix, b: Matrix) {
  throw Error(
    'Matrices are not the right dimensions: a:' +
      a.rows +
      'x' +
      a.cols +
      ' b:' +
      b.rows +
      'x' +
      b.cols
  );
}
function identity2dArray(dimension: number): number[][] {
  const values: number[][] = [];

  for (let i = 0; i < dimension; i++) {
    values[i] = repeat(0)(dimension);
    values[i][i] = 1;
  }

  return values;
}

export class Matrix implements Iterable<number> {
  static create(values: number[][], transpose = false): Matrix {
    const m = new Matrix(values.map(v => [...v]));
    return transpose ? m.transpose() : m;
  }
  static identity(dimension: number): Matrix {
    return Matrix.create(identity2dArray(dimension));
  }
  static rotation(
    dimension: number = 2,
    i: number = 0,
    j: number = 1
  ): (angle: number) => Matrix {
    return (angle: number) => {
      const m: number[][] = identity2dArray(dimension);

      m[i][i] = m[j][j] = Math.cos(angle);

      m[i][j] = (i + (j % 2) === 0 ? -1 : 1) * Math.sin(angle);
      m[j][i] = (i + (j % 2) === 0 ? 1 : -1) * Math.sin(angle);

      return Matrix.create(m);
    };
  }
  static rotationX(dimension: number): (angle: number) => Matrix {
    return Matrix.rotation(dimension, 1, 2);
  }
  static rotationY(dimension: number): (angle: number) => Matrix {
    return Matrix.rotation(dimension, 0, 2);
  }
  static rotationZ(dimension: number): (angle: number) => Matrix {
    return Matrix.rotation(dimension, 0, 1);
  }
  private constructor(
    private readonly values: ReadonlyArray<ReadonlyArray<number>>
  ) {}
  [Symbol.iterator](): IterableIterator<number> {
    return this.getIterator();
  }
  /**
   * @returns A iterator for the values in this Vector
   */
  public getIterator(): IterableIterator<number> {
    return new MatrixIterator(this);
  }
  get rows(): number {
    return this.values.length;
  }
  get cols(): number {
    return this.values[0].length;
  }
  public get(row: number): ReadonlyArray<number>;
  public get(row: number, col: number): number;
  public get(row: number, col?: number): ReadonlyArray<number> | number {
    if (col == null) {
      return this.values[row];
    } else {
      return this.values[row][col];
    }
  }
  public add(...ms: Matrix[]): Matrix {
    if (ms.length < 1) {
      return this;
    }

    const b: Matrix = ms[0];

    if (this.rows !== b.rows || this.cols !== b.cols) {
      throw dimensionsError(this, b);
    }

    const sum = new Matrix(this.values.map((v, i) => Vector.add(v, b.get(i))));

    return sum.add(...dropFirst(ms));
  }
  public subtract(...ms: Matrix[]): Matrix {
    if (ms.length < 1) {
      return this;
    }

    const diff = this.add(ms[0].scalarMult(-1));

    return diff.subtract(...dropFirst(ms));
  }
  public scalarMult(c: number): Matrix {
    return new Matrix(this.values.map(v => Vector.mult(v, c)));
  }
  public transpose(): Matrix {
    const values: number[][] = [];

    for (let i = 0; i < this.cols; i++) {
      values[i] = [];
      for (let j = 0; j < this.rows; j++) {
        values[i][j] = this.get(j, i);
      }
    }

    return Matrix.create(values);
  }
  public mult(...ms: Matrix[]): Matrix {
    if (ms.length < 1) {
      return this;
    }

    const b: Matrix = ms[0];

    if (this.cols !== b.rows) {
      throw dimensionsError(this, b);
    }

    const bt = b.transpose();
    const c: number[][] = [];

    for (let i = 0; i < this.rows; i++) {
      c[i] = [];
      for (let j = 0; j < b.cols; j++) {
        c[i][j] = Vector.dotProduct(this.values[i], bt.get(i));
      }
    }

    return Matrix.create(c).mult(...dropFirst(ms));
  }

  public copy(): Matrix {
    return new Matrix(this.values.map(v => [...v]));
  }
}

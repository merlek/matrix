import { dropFirst, repeat } from 'utility-functions';
import { Vector } from './vector';

function dimensionsError(a: Matrix, b: Matrix) {
  throw Error(
    'Matrices are not the right dimensions: a:' +
      a.m +
      'x' +
      a.n +
      ' b:' +
      b.m +
      'x' +
      b.n
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

export class Matrix {
  static create(values: number[][]): Matrix {
    return new Matrix(values.map(v => [...v]));
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
  get m(): number {
    return this.values.length;
  }
  get n(): number {
    return this.values[0].length;
  }
  public get(i: number): ReadonlyArray<number>;
  public get(i: number, j: number): number;
  public get(i: number, j?: number): ReadonlyArray<number> | number {
    if (j == null) {
      return this.values[i];
    } else {
      return this.values[i][j];
    }
  }
  public add(...ms: Matrix[]): Matrix {
    if (ms.length < 1) {
      return this;
    }

    const b: Matrix = ms[0];

    if (this.m !== b.m || this.n !== b.n) {
      throw dimensionsError(this, b);
    }

    const sum = new Matrix(
      this.values.map((v, i) => Vector.add(v, b.get(i)))
    );

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

    for (let i = 0; i < this.n; i++) {
      values[i] = [];
      for (let j = 0; j < this.m; j++) {
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

    if (this.n !== b.m) {
      throw dimensionsError(this, b);
    }

    const bt = b.transpose();
    const c: number[][] = [];

    for (let i = 0; i < this.m; i++) {
      c[i] = [];
      for (let j = 0; j < b.n; j++) {
        c[i][j] = Vector.dotProduct(this.values[i], bt.get(i));
      }
    }

    return Matrix.create(c).mult(...dropFirst(ms));
  }

  public copy(): Matrix {
    return new Matrix(this.values.map(v => [...v]));
  }
}

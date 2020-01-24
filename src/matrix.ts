import { dropFirst, repeat } from 'utility-functions';
import { Vector } from './vector';

const radians = (degrees: number) => (degrees * Math.PI) / 180;

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
  [key: number]: Vector;
  private readonly values: ReadonlyArray<Vector>;
  static create(values: number[][]): Matrix {
    return new Matrix(values.map(v => Vector.create(...v)));
  }
  static identity(dimension: number): Matrix {
    return Matrix.create(identity2dArray(dimension));
  }
  static rotation(
    degrees: number,
    dimension: number,
    i: number,
    j: number
  ): Matrix {
    const m: number[][] = identity2dArray(dimension);

    const angle = radians(degrees);

    m[i][i] = m[j][j] = Math.cos(angle);
    m[i][j] = -1 * (m[j][i] = Math.sin(angle));

    return Matrix.create(m);
  }
  static rotationX(angle: number, dimension: number = 3): Matrix {
    return Matrix.rotation(angle, dimension, 1, 2);
  }
  static rotationY(angle: number, dimension: number = 3): Matrix {
    return Matrix.rotation(angle, dimension, 0, 2);
  }
  static rotationZ(angle: number, dimension: number = 3): Matrix {
    return Matrix.rotation(angle, dimension, 0, 1);
  }
  private constructor(values: Vector[]) {
    this.values = values.map(v => v.copy());
  }
  get m(): number {
    return this.values.length;
  }
  get n(): number {
    return this.values[0].length;
  }

  public add(...ms: Matrix[]): Matrix {
    if (ms.length < 1) {
      return this;
    }

    const b: Matrix = ms[0];

    if (this.m !== b.m || this.n !== b.n) {
      throw dimensionsError(this, b);
    }

    const sum = new Matrix(this.values.map((v, i) => v.add(b[i])));

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
    return new Matrix(this.values.map(v => v.mult(c)));
  }
  public transpose(): Matrix {
    const values: number[][] = [];

    for (let i = 0; i < this.n; i++) {
      values[i] = [];
      for (let j = 0; j < this.m; j++) {
        values[i][j] = this[j][i];
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
        c[i][j] = this[i].dotProduct(bt[j]);
      }
    }

    return Matrix.create(c).mult(...dropFirst(ms));
  }

  public copy(): Matrix {
    return new Matrix(this.values.map(v => v.copy()));
  }
  //   static fromVector(v: Vector): Matrix {
  //     return MatrixMath.transpose([v]);
  //   }
  //   static sumVector(m: Matrix, ...vs: Vector[]): Matrix {
  //     const c: Matrix = [];

  //     const mt = MatrixMath.transpose(m);

  //     for (let i = 0; i < mt.length; i++) {
  //       c[i] = VectorMath.sum(mt[i], ...vs);
  //     }

  //     return MatrixMath.transpose(c);
  //   }
  //   static subtractVector(m: Matrix, ...vs: Vector[]): Matrix {
  //    const c: Matrix = [];

  //    const mt = MatrixMath.transpose(m);

  //    for (let i = 0; i < mt.length; i++) {
  //      c[i] = VectorMath.subtract(mt[i], ...vs);
  //    }

  //    return MatrixMath.transpose(c);
  //  }
}

import { repeat, random, dropFirst } from 'common';

export class Vector {
  [key: number]: number;
  private readonly values: ReadonlyArray<number>;
  static create(x: number = 0, y: number = 0, ...others: number[]): Vector {
    return new Vector(x, y, ...others);
  }
  static fill(c: number, length: number): Vector {
    return new Vector(...repeat(c)(length));
  }
  static random2D(maxforce?: number): Vector {
    return new Vector(1, 0).rotate(random(0)(Math.PI * 2)).setMag(maxforce);
  }
  private constructor(...values: number[]) {
    this.values = [...values];
  }
  get length() {
    return this.values.length;
  }
  get x() {
    return this.values[0];
  }
  get y() {
    return this.values[1];
  }
  get z() {
    return this.values[2];
  }
  public normalize(): Vector {
    return this.setMag(1);
  }
  public rotate(angle: number): Vector {
    return new Vector(
      this.x * Math.cos(angle) - this.y * Math.sin(angle),
      this.x * Math.sin(angle) + this.y * Math.cos(angle)
    );
  }
  public setMag(magnitude?: number): Vector {
    if (magnitude != null) {
      const mag = this.getMag();
      const values: number[] = [];
      for (let i = 0; i < this.values.length; i++) {
        values[i] = (this.values[i] / mag) * magnitude;
      }
      return new Vector(...values);
    } else {
      return this;
    }
  }
  public getMag(): number {
    return Math.sqrt(
      this.values.reduce((acc, value) => acc + Math.pow(value, 2), 0)
    );
  }
  public limit(max: number): Vector {
    if (this.getMag() > max) {
      return this.setMag(max);
    }
    return this;
  }
  public dist(other: Vector): number {
    return Math.sqrt(
      this.values.reduce(
        (acc, value, index) => acc + Math.pow(other.values[index] - value, 2),
        0
      )
    );
  }
  public add(...vs: Vector[]): Vector {
    if (vs.length < 1) {
      return this;
    }

    const sum = new Vector(...this.values.map((v, i) => v + vs[0].values[i]));

    return sum.add(...dropFirst(vs));
  }
  public subtract(...vs: Vector[]): Vector {
    if (vs.length < 1) {
      return this;
    }

    const diff = this.add(vs[0].mult(-1));

    return diff.subtract(...dropFirst(vs));
  }
  public mult(n: number): Vector {
    return new Vector(...this.values.map(v => v * n));
  }
  public heading(): number {
    return Math.atan2(this.y, this.x);
  }
  public copy(): Vector {
    return new Vector(...this.values);
  }
  public dotProduct(b: Vector): number {
    let c = 0;

    for (let i = 0; i < this.values.length; i++) {
      c += this.values[i] * b.values[i];
    }

    return c;
  }
  //   set x(n: number) {
  //     this.values[0] = n;
  //   }
  //   set y(n: number) {
  //     this.values[1] = n;
  //   }
  //   set z(n: number) {
  //     this.values[2] = n;
  //   }
}

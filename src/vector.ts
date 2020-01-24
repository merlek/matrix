import { dropFirst, random, repeat } from 'utility-functions';

export function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

export class Vector {
  [key: number]: number;
  private readonly values: ReadonlyArray<number>;
  private _magnitude?: number;
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
  get magnitude(): number {
    return this._magnitude != null
      ? this._magnitude
      : (this._magnitude = Math.sqrt(
          this.values.reduce((acc, value) => acc + Math.pow(value, 2), 0)
        ));
  }
  get heading(): number {
   return Math.atan2(this.y, this.x);
 }
  get length(): number {
    return this.values.length;
  }
  get x(): number {
    return this.values[0];
  }
  get y(): number {
    return this.values[1];
  }
  get z(): number {
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
      const curMag = this.magnitude;
      return new Vector(...this.values.map(v => (v / curMag) * magnitude));
    } else {
      return this;
    }
  }
  public limit(max: number): Vector {
    if (this.magnitude > max) {
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
  public mult(n: number, ...ns: number[]): Vector {
    n *= ns.length > 0 ? ns.reduce((acc, c) => acc * c, 1) : 1;
    return new Vector(...this.values.map(v => v * n));
  }
  /**
   * @returns a value θ: −π < θ ≤ π
   */

  public copy(): Vector {
    return new Vector(...this.values);
  }
  public dotProduct(b: Vector): number {
    return this.values.reduce((acc, value, i) => acc + value * b.values[i], 0);
  }
}

import { dropFirst, random, repeat } from 'utility-functions';
import { VectorIterator } from './vector-iterator';

/**
 * Converts from degrees to radians
 * @param degrees - angle in degrees to be converted
 * @returns The angle in radians
 */
export function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}
/**
 * An immutable mathmatical vector.
 */
export class Vector implements Iterable<number> {
  private readonly values: ReadonlyArray<number>;
  private _magnitude?: number;
  /**
   * Creates a Vector from the given values.
   * @param x - x value
   * @param others - other values e.g. y, z
   * @returns A new Vector
   */
  static create(x: number = 0, ...others: number[]): Vector {
    return new Vector(x, ...others);
  }
  /**
   * Fills a Vector with a given value `c`.
   * @param c - value to fill with
   * @param length - number of times to repeat `c` in Vector
   * @returns A new Vector
   */
  static fill(c: number, length: number): Vector {
    return new Vector(...repeat(c)(length));
  }
  /**
   * Creates a random 2D Vector.
   * @param magnitude - optional value for the Vector's magnitude
   * @returns A new Vector
   */
  static random2D(magnitude?: number): Vector {
    return new Vector(1, 0).rotate(random(0)(Math.PI * 2)).setMag(magnitude);
  }
  private constructor(...values: number[]) {
    this.values = [...values];
  }
  [Symbol.iterator](): IterableIterator<number> {
    return this.getIterator();
  }
  /**
   * @returns A iterator for the values in this Vector
   */
  public getIterator(): IterableIterator<number> {
    return new VectorIterator(this);
  }
  /**
   * Returns a value in this Vector.
   * @param index - the index of the value to return
   * @returns the value at `index`
   */
  public get(index: number) {
    return this.values[index];
  }
  /**
   * The magnitude of this Vector, i.e. size.
   */
  get magnitude(): number {
    return this._magnitude != null
      ? this._magnitude
      : (this._magnitude = Math.sqrt(
          this.values.reduce((acc, value) => acc + Math.pow(value, 2), 0)
        ));
  }
  /**
   * The angle θ between this Vector and the x-axis such that −π < θ ≤ π.
   */
  get heading(): number {
    return Math.atan2(this.y, this.x);
  }
  /**
   * The number of values in this Vector, e.g. 2D => length === 2.
   */
  get length(): number {
    return this.values.length;
  }
  /**
   * The x value for this Vector, i.e. this[0]
   */
  get x(): number {
    return this.values[0];
  }
  /**
   * The y value for this Vector, i.e. this[1]
   */
  get y(): number {
    return this.values[1];
  }
  /**
   * The z value for this Vector, i.e. this[2]
   */
  get z(): number {
    return this.values[2];
  }
  /**
   * A normalized version of this Vector.
   * @returns A copy of this Vector with magnitude === 1
   */
  public normalize(): Vector {
    return this.setMag(1);
  }
  /**
   * Rotates this Vector by `angle` radians.
   * @param angle - the angle with which to rotate in radians
   * @returns A copy of this Vector rotated by `angle`
   */
  public rotate(angle: number): Vector {
    return new Vector(
      this.x * Math.cos(angle) - this.y * Math.sin(angle),
      this.x * Math.sin(angle) + this.y * Math.cos(angle)
    );
  }
  /**
   * Sets the magnitude of this Vector to a given value.
   * @param magnitude - the value with which to set the magnitude
   * @returns A copy of this Vector with the given magnitude
   */
  public setMag(magnitude?: number): Vector {
    return magnitude != null
      ? new Vector(...this.values.map(v => (v / this.magnitude) * magnitude))
      : this;
  }
  /**
   * Limits a this Vectors magnitude by the given amount.
   * @param maxMagnitude - the maximum magnitude allowed
   * @returns A Vector with a magnitude less than or equal to `max`
   */
  public limit(maxMagnitude: number): Vector {
    return this.magnitude > maxMagnitude ? this.setMag(maxMagnitude) : this;
  }
  /**
   * Calculates the distance between two Vectors.
   * @param other - the other Vector
   * @returns The distance between this Vector and `other`
   */
  public dist(other: Vector): number {
    return Math.sqrt(
      this.values.reduce(
        (acc, value, index) => acc + Math.pow(other.values[index] - value, 2),
        0
      )
    );
  }
  /**
   * Calculates the sum of this Vector and another.
   * @param vs - the Vector(s) with which to add (addends)
   * @returns The summation of this Vector and `vs`
   */
  public add(...vs: Vector[]): Vector {
    if (vs.length < 1) {
      return this;
    }

    const sum = new Vector(...this.values.map((v, i) => v + vs[0].values[i]));

    return sum.add(...dropFirst(vs));
  }
  /**
   * Calculates the difference between this Vector and another.
   * @param vs - the Vector(s) with which to subtract (subtrahends)
   * @returns The difference between this Vector and `vs`
   */
  public subtract(...vs: Vector[]): Vector {
    if (vs.length < 1) {
      return this;
    }

    const diff = this.add(vs[0].mult(-1));

    return diff.subtract(...dropFirst(vs));
  }
  /**
   * Multiplies this Vector by a scalar (scalar multiplication).
   * @param n - the first value with which to multiply
   * @param ns - the remaining values with which to multiply
   * @returns A copy of this Vector scaled by `n` and `ns`
   */
  public mult(n: number, ...ns: number[]): Vector {
    n *= ns.length > 0 ? ns.reduce((acc, c) => acc * c, 1) : 1;
    return new Vector(...this.values.map(v => v * n));
  }
  /**
   * @returns A copy of this Vector.
   */
  public copy(): Vector {
    return new Vector(...this.values);
  }
  /**
   * Calculates the dot product of this Vector and another (scalar product).
   * @param other - the other Vector with which to calculate the dot product
   * @returns The dot product
   */
  public dotProduct(other: Vector): number {
    return this.values.reduce(
      (acc, value, i) => acc + value * other.values[i],
      0
    );
  }
}

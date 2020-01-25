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
  private _magnitude?: number;
  /**
   * Creates a Vector from the given values.
   * @param values - vector values e.g. x, y, z
   * @returns A new Vector
   */
  static create(...values: number[]): Vector {
    return new Vector(values);
  }
  /**
   * Fills a Vector with a given value `c`.
   * @param c - value to fill with
   * @param length - number of times to repeat `c` in Vector
   * @returns A new Vector
   */
  static fill(c: number, length: number): Vector {
    return new Vector(repeat(c)(length));
  }
  /**
   * Creates a random 2D Vector.
   * @param magnitude - optional value for the Vector's magnitude
   * @returns A new Vector
   */
  static random2D(magnitude?: number): Vector {
    const v = new Vector([1, 0]).rotate(random(0)(Math.PI * 2));
    return magnitude != null ? v.setMag(magnitude) : v;
  }
  /**
   * The angle θ between a vector and the x-axis such that −π < θ ≤ π.
   */
  static heading(vector: ReadonlyArray<number>): number {
    return Math.atan2(vector[1], vector[0]);
  }
  /**
   * A normalized version of this vector.
   * @returns A copy of this vector with magnitude === 1
   */
  static normalize(vector: ReadonlyArray<number>): number[] {
    return Vector.setMag(vector, 1);
  }
  /**
   * Rotates this vector by `angle` radians.
   * @param angle - the angle with which to rotate in radians
   * @returns A copy of this vector rotated by `angle`
   */
  static rotate(vector: ReadonlyArray<number>, angle: number): number[] {
    return [
      vector[0] * Math.cos(angle) - vector[1] * Math.sin(angle),
      vector[0] * Math.sin(angle) + vector[1] * Math.cos(angle)
    ];
  }
  /**
   * The magnitude of a vector, i.e. size.
   */
  static getMag(vector: ReadonlyArray<number>): number {
    return Math.sqrt(vector.reduce((acc, value) => acc + value * value, 0));
  }
  /**
   * Sets the magnitude of this vector to a given value.
   * @param magnitude - the value with which to set the magnitude
   * @returns A copy of this vector with the given magnitude
   */
  static setMag(vector: ReadonlyArray<number>, magnitude: number): number[] {
    const mag = Vector.getMag(vector);
    return vector.map(v => (v / mag) * magnitude);
  }
  /**
   * Limits a this vectors magnitude by the given amount.
   * @param maxMagnitude - the maximum magnitude allowed
   * @returns A vector with a magnitude less than or equal to `max`
   */
  static limit(
    vector: ReadonlyArray<number>,
    maxMagnitude: number
  ): ReadonlyArray<number> | number[] {
    return Vector.getMag(vector) > maxMagnitude
      ? Vector.setMag(vector, maxMagnitude)
      : vector;
  }
  /**
   * Calculates the distance between two vectors.
   * @param other - the other vector
   * @returns The distance between this vector and `other`
   */
  static dist(
    vector: ReadonlyArray<number>,
    other: ReadonlyArray<number>
  ): number {
    return Math.sqrt(
      vector.reduce(
        (acc, value, index) => acc + Math.pow(other[index] - value, 2),
        0
      )
    );
  }
  /**
   * Calculates the sum of this vector and another.
   * @param vs - the vector(s) with which to add (addends)
   * @returns The summation of this vector and `vs`
   */
  static add(...vs: Array<ReadonlyArray<number>>): ReadonlyArray<number> {
    if (vs.length <= 1) {
      return vs.length === 1 ? vs[0] : [];
    }

    const a = vs[0];
    const b = Vector.add(...dropFirst(vs));

    return a.map((v, i) => v + b[i]);
  }
  /**
   * Calculates the difference between this vector and another.
   * @param vs - the vector(s) with which to subtract (subtrahends)
   * @returns The difference between this vector and `vs`
   */
  static subtract(
    ...vs: Array<ReadonlyArray<number>>
  ): ReadonlyArray<number> | number[] {
    if (vs.length <= 1) {
      return vs.length === 1 ? vs[0] : [];
    }

    const a = vs[0];
    const b = Vector.add(...dropFirst(vs));

    return a.map((v, i) => v - b[i]);
  }
  /**
   * Multiplies this vector by a scalar (scalar multiplication).
   * @param ns - the values with which to multiply
   * @returns A copy of this vector scaled by `n` and `ns`
   */
  static mult(
    vector: ReadonlyArray<number>,
    ...ns: ReadonlyArray<number>
  ): number[] {
    const n = ns.length === 1 ? ns[0] : ns.reduce((acc, c) => acc * c, 1);
    return vector.map(v => v * n);
  }
  /**
   * Calculates the dot product of this vector and another (scalar product).
   * @param other - the other vector with which to calculate the dot product
   * @returns The dot product
   */
  static dotProduct(
    vector: ReadonlyArray<number>,
    other: ReadonlyArray<number>
  ): number {
    return vector.reduce((acc, value, i) => acc + value * other[i], 0);
  }
  private constructor(private readonly values: ReadonlyArray<number>) {
    this.values = values;
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
  public toArray(): number[] {
    return [...this.values];
  }
  /**
   * The magnitude of this Vector, i.e. size.
   */
  get magnitude(): number {
    return this._magnitude != null
      ? this._magnitude
      : (this._magnitude = Vector.getMag(this.values));
  }
  /**
   * The angle θ between this Vector and the x-axis such that −π < θ ≤ π.
   */
  get heading(): number {
    return Vector.heading(this.values);
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
    return new Vector(Vector.rotate(this.values, angle));
  }
  /**
   * Sets the magnitude of this Vector to a given value.
   * @param magnitude - the value with which to set the magnitude
   * @returns A copy of this Vector with the given magnitude
   */
  public setMag(magnitude: number): Vector {
    return new Vector(Vector.mult(this.values, magnitude / this.magnitude));
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
    return Vector.dist(this.values, other.values);
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
    return new Vector(Vector.add(this.values, ...vs.map(v => v.values)));
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
    return new Vector(Vector.subtract(this.values, ...vs.map(v => v.values)));
  }
  /**
   * Multiplies this Vector by a scalar (scalar multiplication).
   * @param ns - the values with which to multiply
   * @returns A copy of this Vector scaled by `n` and `ns`
   */
  public mult(...ns: number[]): Vector {
    return new Vector(Vector.mult(this.values, ...ns));
  }
  /**
   * @returns A copy of this Vector.
   */
  public copy(): Vector {
    return new Vector(this.values);
  }
  /**
   * Calculates the dot product of this Vector and another (scalar product).
   * @param other - the other Vector with which to calculate the dot product
   * @returns The dot product
   */
  public dotProduct(other: Vector): number {
    return Vector.dotProduct(this.values, other.values);
  }
}

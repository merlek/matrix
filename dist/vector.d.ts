/**
 * Converts from degrees to radians
 * @param degrees - angle in degrees to be converted
 * @returns The angle in radians
 */
export declare function toRadians(degrees: number): number;
/**
 * An immutable mathmatical vector.
 */
export declare class Vector implements Iterable<number> {
    private readonly values;
    private _magnitude?;
    /**
     * Creates a Vector from the given values.
     * @param values - vector values e.g. x, y, z
     * @returns A new Vector
     */
    static create(...values: number[]): Vector;
    /**
     * Fills a Vector with a given value `c`.
     * @param c - value to fill with
     * @param length - number of times to repeat `c` in Vector
     * @returns A new Vector
     */
    static fill(c: number, length: number): Vector;
    /**
     * Creates a random 2D Vector.
     * @param magnitude - optional value for the Vector's magnitude
     * @returns A new Vector
     */
    static random2D(magnitude?: number): Vector;
    /**
     * The angle θ between a vector and the x-axis such that −π < θ ≤ π.
     */
    static heading(vector: ReadonlyArray<number>): number;
    /**
     * A normalized version of this vector.
     * @returns A copy of this vector with magnitude === 1
     */
    static normalize(vector: ReadonlyArray<number>): number[];
    /**
     * Rotates this vector by `angle` radians.
     * @param angle - the angle with which to rotate in radians
     * @returns A copy of this vector rotated by `angle`
     */
    static rotate(vector: ReadonlyArray<number>, angle: number): number[];
    /**
     * The magnitude of a vector, i.e. size.
     */
    static getMag(vector: ReadonlyArray<number>): number;
    /**
     * Sets the magnitude of this vector to a given value.
     * @param magnitude - the value with which to set the magnitude
     * @returns A copy of this vector with the given magnitude
     */
    static setMag(vector: ReadonlyArray<number>, magnitude: number): number[];
    /**
     * Limits a this vectors magnitude by the given amount.
     * @param maxMagnitude - the maximum magnitude allowed
     * @returns A vector with a magnitude less than or equal to `max`
     */
    static limit(vector: ReadonlyArray<number>, maxMagnitude: number): ReadonlyArray<number> | number[];
    /**
     * Calculates the distance between two vectors.
     * @param other - the other vector
     * @returns The distance between this vector and `other`
     */
    static dist(vector: ReadonlyArray<number>, other: ReadonlyArray<number>): number;
    /**
     * Calculates the sum of this vector and another.
     * @param vs - the vector(s) with which to add (addends)
     * @returns The summation of this vector and `vs`
     */
    static add(...vs: Array<ReadonlyArray<number>>): ReadonlyArray<number>;
    /**
     * Calculates the difference between this vector and another.
     * @param vs - the vector(s) with which to subtract (subtrahends)
     * @returns The difference between this vector and `vs`
     */
    static subtract(...vs: Array<ReadonlyArray<number>>): ReadonlyArray<number> | number[];
    /**
     * Multiplies this vector by a scalar (scalar multiplication).
     * @param ns - the values with which to multiply
     * @returns A copy of this vector scaled by `n` and `ns`
     */
    static mult(vector: ReadonlyArray<number>, ...ns: ReadonlyArray<number>): number[];
    /**
     * Calculates the dot product of this vector and another (scalar product).
     * @param other - the other vector with which to calculate the dot product
     * @returns The dot product
     */
    static dotProduct(vector: ReadonlyArray<number>, other: ReadonlyArray<number>): number;
    private constructor();
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * @returns A iterator for the values in this Vector
     */
    getIterator(): IterableIterator<number>;
    /**
     * Returns a value in this Vector.
     * @param index - the index of the value to return
     * @returns the value at `index`
     */
    get(index: number): number;
    toArray(): number[];
    /**
     * The magnitude of this Vector, i.e. size.
     */
    get magnitude(): number;
    /**
     * The angle θ between this Vector and the x-axis such that −π < θ ≤ π.
     */
    get heading(): number;
    /**
     * The number of values in this Vector, e.g. 2D => length === 2.
     */
    get length(): number;
    /**
     * The x value for this Vector, i.e. this[0]
     */
    get x(): number;
    /**
     * The y value for this Vector, i.e. this[1]
     */
    get y(): number;
    /**
     * The z value for this Vector, i.e. this[2]
     */
    get z(): number;
    /**
     * A normalized version of this Vector.
     * @returns A copy of this Vector with magnitude === 1
     */
    normalize(): Vector;
    /**
     * Rotates this Vector by `angle` radians.
     * @param angle - the angle with which to rotate in radians
     * @returns A copy of this Vector rotated by `angle`
     */
    rotate(angle: number): Vector;
    /**
     * Sets the magnitude of this Vector to a given value.
     * @param magnitude - the value with which to set the magnitude
     * @returns A copy of this Vector with the given magnitude
     */
    setMag(magnitude: number): Vector;
    /**
     * Limits a this Vectors magnitude by the given amount.
     * @param maxMagnitude - the maximum magnitude allowed
     * @returns A Vector with a magnitude less than or equal to `max`
     */
    limit(maxMagnitude: number): Vector;
    /**
     * Calculates the distance between two Vectors.
     * @param other - the other Vector
     * @returns The distance between this Vector and `other`
     */
    dist(other: Vector): number;
    /**
     * Calculates the sum of this Vector and another.
     * @param vs - the Vector(s) with which to add (addends)
     * @returns The summation of this Vector and `vs`
     */
    add(...vs: Vector[]): Vector;
    /**
     * Calculates the difference between this Vector and another.
     * @param vs - the Vector(s) with which to subtract (subtrahends)
     * @returns The difference between this Vector and `vs`
     */
    subtract(...vs: Vector[]): Vector;
    /**
     * Multiplies this Vector by a scalar (scalar multiplication).
     * @param ns - the values with which to multiply
     * @returns A copy of this Vector scaled by `n` and `ns`
     */
    mult(...ns: number[]): Vector;
    /**
     * @returns A copy of this Vector.
     */
    copy(): Vector;
    /**
     * Calculates the dot product of this Vector and another (scalar product).
     * @param other - the other Vector with which to calculate the dot product
     * @returns The dot product
     */
    dotProduct(other: Vector): number;
}
//# sourceMappingURL=vector.d.ts.map
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
     * @param x - x value
     * @param others - other values e.g. y, z
     * @returns A new Vector
     */
    static create(x?: number, ...others: number[]): Vector;
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
    setMag(magnitude?: number): Vector;
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
     * @param n - the first value with which to multiply
     * @param ns - the remaining values with which to multiply
     * @returns A copy of this Vector scaled by `n` and `ns`
     */
    mult(n: number, ...ns: number[]): Vector;
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
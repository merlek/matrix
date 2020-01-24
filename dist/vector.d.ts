export declare function toRadians(degrees: number): number;
export declare class Vector {
    [key: number]: number;
    private readonly values;
    private _magnitude?;
    static create(x?: number, y?: number, ...others: number[]): Vector;
    static fill(c: number, length: number): Vector;
    static random2D(maxforce?: number): Vector;
    private constructor();
    get magnitude(): number;
    get length(): number;
    get x(): number;
    get y(): number;
    get z(): number;
    normalize(): Vector;
    rotate(angle: number): Vector;
    setMag(magnitude?: number): Vector;
    limit(max: number): Vector;
    dist(other: Vector): number;
    add(...vs: Vector[]): Vector;
    subtract(...vs: Vector[]): Vector;
    mult(n: number, ...ns: number[]): Vector;
    /**
     * @returns a value θ: −π < θ ≤ π
     */
    heading(): number;
    copy(): Vector;
    dotProduct(b: Vector): number;
}
//# sourceMappingURL=vector.d.ts.map
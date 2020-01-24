export declare class Vector {
    [key: number]: number;
    private readonly values;
    static create(x?: number, y?: number, ...others: number[]): Vector;
    static fill(c: number, length: number): Vector;
    static random2D(maxforce?: number): Vector;
    private constructor();
    get length(): number;
    get x(): number;
    get y(): number;
    get z(): number;
    normalize(): Vector;
    rotate(angle: number): Vector;
    setMag(magnitude?: number): Vector;
    getMag(): number;
    limit(max: number): Vector;
    dist(other: Vector): number;
    add(...vs: Vector[]): Vector;
    subtract(...vs: Vector[]): Vector;
    mult(n: number): Vector;
    heading(): number;
    copy(): Vector;
    dotProduct(b: Vector): number;
}
//# sourceMappingURL=vector.d.ts.map
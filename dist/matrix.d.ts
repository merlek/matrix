export declare class Matrix {
    private readonly values;
    static create(values: number[][]): Matrix;
    static identity(dimension: number): Matrix;
    static rotation(dimension?: number, i?: number, j?: number): (angle: number) => Matrix;
    static rotationX(dimension: number): (angle: number) => Matrix;
    static rotationY(dimension: number): (angle: number) => Matrix;
    static rotationZ(dimension: number): (angle: number) => Matrix;
    private constructor();
    get m(): number;
    get n(): number;
    get(i: number): ReadonlyArray<number>;
    get(i: number, j: number): number;
    add(...ms: Matrix[]): Matrix;
    subtract(...ms: Matrix[]): Matrix;
    scalarMult(c: number): Matrix;
    transpose(): Matrix;
    mult(...ms: Matrix[]): Matrix;
    copy(): Matrix;
}
//# sourceMappingURL=matrix.d.ts.map
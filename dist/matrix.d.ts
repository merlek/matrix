export declare class Matrix implements Iterable<number> {
    private readonly values;
    static create(values: number[][], transpose?: boolean): Matrix;
    static identity(dimension: number): Matrix;
    static rotation(dimension?: number, i?: number, j?: number): (angle: number) => Matrix;
    static rotationX(dimension: number): (angle: number) => Matrix;
    static rotationY(dimension: number): (angle: number) => Matrix;
    static rotationZ(dimension: number): (angle: number) => Matrix;
    private constructor();
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * @returns A iterator for the values in this Vector
     */
    getIterator(): IterableIterator<number>;
    get rows(): number;
    get cols(): number;
    get(row: number): ReadonlyArray<number>;
    get(row: number, col: number): number;
    add(...ms: Matrix[]): Matrix;
    subtract(...ms: Matrix[]): Matrix;
    scalarMult(c: number): Matrix;
    transpose(): Matrix;
    mult(...ms: Matrix[]): Matrix;
    copy(): Matrix;
}
//# sourceMappingURL=matrix.d.ts.map
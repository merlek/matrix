import { Vector } from './vector';
export declare class Matrix {
    [key: number]: Vector;
    private readonly values;
    static create(values: number[][]): Matrix;
    static identity(dimension: number): Matrix;
    static rotation(degrees: number, dimension: number, i: number, j: number): Matrix;
    static rotationX(angle: number, dimension?: number): Matrix;
    static rotationY(angle: number, dimension?: number): Matrix;
    static rotationZ(angle: number, dimension?: number): Matrix;
    private constructor();
    get m(): number;
    get n(): number;
    add(...ms: Matrix[]): Matrix;
    subtract(...ms: Matrix[]): Matrix;
    scalarMult(c: number): Matrix;
    transpose(): Matrix;
    mult(...ms: Matrix[]): Matrix;
    copy(): Matrix;
}
//# sourceMappingURL=matrix.d.ts.map
/**
 * An iterator for the Matrix class.
 */
export declare class MatrixIterator implements IterableIterator<number> {
    matrix: {
        get: (row: number, col: number) => number;
        rows: number;
        cols: number;
    };
    private count;
    private total;
    constructor(matrix: {
        get: (row: number, col: number) => number;
        rows: number;
        cols: number;
    });
    [Symbol.iterator](): IterableIterator<number>;
    next(): IteratorResult<any>;
    private index;
}
//# sourceMappingURL=matrix-iterator.d.ts.map
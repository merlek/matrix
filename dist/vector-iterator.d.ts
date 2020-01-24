/**
 * An iterator for the Vector class.
 */
export declare class VectorIterator implements IterableIterator<number> {
    vector: {
        get: (x: number) => any;
        length: number;
    };
    private index;
    constructor(vector: {
        get: (x: number) => any;
        length: number;
    });
    [Symbol.iterator](): IterableIterator<number>;
    next(): IteratorResult<number>;
}
//# sourceMappingURL=vector-iterator.d.ts.map
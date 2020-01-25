import { Matrix } from '../src/matrix';
import { toRadians } from '../src/vector';

const precision = 9;

const degrees90 = toRadians(90);
const degrees180 = toRadians(180);
const degrees270 = toRadians(270);
const degrees360 = toRadians(360);

describe('Matrix', () => {
  const dim = 3;
  const max = 100;
  const min = -100;

  const m = Matrix.create([
    [0, 1, 2],
    [3, 4, 5]
  ]);

  const ident = Matrix.identity(3);
  const m2 = m.copy();

  afterAll(function() {
    expect(m).toEqual(m2);
  });

  describe('static', () => {
    it('identity creates a new identity Matrix', () => {
      for (let i = 0; i < ident.rows; i++) {
        for (let j = 0; j < ident.cols; j++) {
          if (i === j) {
            expect(ident.get(i, j)).toBe(1);
          } else {
            expect(ident.get(i, j)).toBe(0);
          }
        }
      }
    });
    describe('rotations', () => {
      describe('2D', () => {
        const r = Matrix.rotation();
        it('90 degree rotation', () => {
          const rm = r(degrees90);
          expect(rm.get(0, 0)).toBeCloseTo(0, precision);
          expect(rm.get(0, 1)).toBeCloseTo(-1, precision);
          expect(rm.get(1, 0)).toBeCloseTo(1, precision);
          expect(rm.get(1, 1)).toBeCloseTo(0, precision);
        });
        it('180 degree rotation', () => {
          const rm = r(degrees180);
          expect(rm.get(0, 0)).toBeCloseTo(-1, precision);
          expect(rm.get(0, 1)).toBeCloseTo(0, precision);
          expect(rm.get(1, 0)).toBeCloseTo(0, precision);
          expect(rm.get(1, 1)).toBeCloseTo(-1, precision);
        });
        it('270 degree rotation', () => {
          const rm = r(degrees270);
          expect(rm.get(0, 0)).toBeCloseTo(0, precision);
          expect(rm.get(0, 1)).toBeCloseTo(1, precision);
          expect(rm.get(1, 0)).toBeCloseTo(-1, precision);
          expect(rm.get(1, 1)).toBeCloseTo(0, precision);
        });
        it('360 degree rotation', () => {
          const rm = r(degrees360);
          expect(rm.get(0, 0)).toBeCloseTo(1, precision);
          expect(rm.get(0, 1)).toBeCloseTo(0, precision);
          expect(rm.get(1, 0)).toBeCloseTo(0, precision);
          expect(rm.get(1, 1)).toBeCloseTo(1, precision);
        });
      });
      describe('3D', () => {
        describe('rotationX', () => {
          const r = Matrix.rotationX(3);
          it('90 degree rotation', () => {
            const rm = r(degrees90);
            const expected = [1, 0, 0, 0, 0, -1, 0, 1, 0];
            let index = 0;
            for (const value of rm) {
              expect(value).toBeCloseTo(expected[index++], precision);
            }
          });
          it('180 degree rotation', () => {
            const rm = r(degrees180);
            const expected = [1, 0, 0, 0, -1, 0, 0, 0, -1];
            let index = 0;
            for (const value of rm) {
              expect(value).toBeCloseTo(expected[index++], precision);
            }
          });
          it('270 degree rotation', () => {
            const rm = r(degrees270);
            const expected = [1, 0, 0, 0, 0, 1, 0, -1, 0];
            let index = 0;
            for (const value of rm) {
              expect(value).toBeCloseTo(expected[index++], precision);
            }
          });
          it('360 degree rotation', () => {
            const rm = r(degrees360);
            const expected = [1, 0, 0, 0, 1, 0, 0, 0, 1];
            let index = 0;
            for (const value of rm) {
              expect(value).toBeCloseTo(expected[index++], precision);
            }
          });
        });
        describe('rotationY', () => {
          const r = Matrix.rotationY(3);
          it('90 degree rotation', () => {
            const rm = r(degrees90);
            const expected = [0, 0, 1, 0, 1, 0, -1, 0, 0];
            let index = 0;
            for (const value of rm) {
              expect(value).toBeCloseTo(expected[index++], precision);
            }
          });
          it('180 degree rotation', () => {
            const rm = r(degrees180);
            const expected = [-1, 0, 0, 0, 1, 0, 0, 0, -1];
            let index = 0;
            for (const value of rm) {
              expect(value).toBeCloseTo(expected[index++], precision);
            }
          });
          it('270 degree rotation', () => {
            const rm = r(degrees270);
            const expected = [0, 0, -1, 0, 1, 0, 1, 0, 0];
            let index = 0;
            for (const value of rm) {
              expect(value).toBeCloseTo(expected[index++], precision);
            }
          });
          it('360 degree rotation', () => {
            const rm = r(degrees360);
            const expected = [1, 0, 0, 0, 1, 0, 0, 0, 1];
            let index = 0;
            for (const value of rm) {
              expect(value).toBeCloseTo(expected[index++], precision);
            }
          });
        });
        describe('rotationZ', () => {
          const r = Matrix.rotationZ(3);
          it('90 degree rotation', () => {
            const rm = r(degrees90);
            const expected = [0, -1, 0, 1, 0, 0, 0, 0, 1];
            let index = 0;
            for (const value of rm) {
              expect(value).toBeCloseTo(expected[index++], precision);
            }
          });
          it('180 degree rotation', () => {
            const rm = r(degrees180);
            const expected = [-1, 0, 0, 0, -1, 0, 0, 0, 1];
            let index = 0;
            for (const value of rm) {
              expect(value).toBeCloseTo(expected[index++], precision);
            }
          });
          it('270 degree rotation', () => {
            const rm = r(degrees270);
            const expected = [0, 1, 0, -1, 0, 0, 0, 0, 1];
            let index = 0;
            for (const value of rm) {
              expect(value).toBeCloseTo(expected[index++], precision);
            }
          });
          it('360 degree rotation', () => {
            const rm = r(degrees360);
            const expected = [1, 0, 0, 0, 1, 0, 0, 0, 1];
            let index = 0;
            for (const value of rm) {
              expect(value).toBeCloseTo(expected[index++], precision);
            }
          });
        });
      });
    });
  });

  it('a 2x3 matrix has 2 rows', () => {
    expect(m.rows).toBe(2);
  });

  it('a 2x3 matrix has 3 cols', () => {
    expect(m.cols).toBe(3);
  });

  it('get(i,j) returns matrix[i,j]', () => {
    expect(m.get(0, 0)).toBe(0);
    expect(m.get(0, 1)).toBe(1);
    expect(m.get(0, 2)).toBe(2);
    expect(m.get(1, 0)).toBe(3);
    expect(m.get(1, 1)).toBe(4);
    expect(m.get(1, 2)).toBe(5);
  });

  it('matrix has an iterator', () => {
    const expectedValues = [];
    for (let i = 0; i < m.rows; i++) {
      for (let j = 0; j < m.cols; j++) {
        expectedValues.push(m.get(i, j));
      }
    }
    let count = 0;
    for (const value of m) {
      expect(value).toBe(expectedValues[count]);
      count++;
    }
    expect(count).toBe(m.rows * m.cols);
  });

  //    static rotation(
  //    static rotationX(angle: number, dimension: number = 3): Matrix {
  //    static rotationY(angle: number, dimension: number = 3): Matrix {
  //    static rotationZ(angle: number, dimension: number = 3): Matrix {
  //    public add(...ms: Matrix[]): Matrix {
  //    public subtract(...ms: Matrix[]): Matrix {
  //    public scalarMult(c: number): Matrix {
  //    public transpose(): Matrix {
  //    public mult(...ms: Matrix[]): Matrix {
  //    public copy(): Matrix {
});

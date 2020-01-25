import { Matrix } from '../src/matrix';
import { toRadians } from '../src/vector';

const precision = 9;

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
          const rm = r(toRadians(90));
          expect(rm.get(0, 0)).toBeCloseTo(0);
          expect(rm.get(1, 0)).toBeCloseTo(-1);
          expect(rm.get(0, 1)).toBeCloseTo(1);
          expect(rm.get(1, 1)).toBeCloseTo(0);
        });
        it('180 degree rotation', () => {
          const rm = r(toRadians(180));
          expect(rm.get(0, 0)).toBeCloseTo(-1);
          expect(rm.get(1, 0)).toBeCloseTo(0);
          expect(rm.get(0, 1)).toBeCloseTo(0);
          expect(rm.get(1, 1)).toBeCloseTo(-1);
        });
        it('270 degree rotation', () => {
          const rm = r(toRadians(270));
          expect(rm.get(0, 0)).toBeCloseTo(0);
          expect(rm.get(1, 0)).toBeCloseTo(1);
          expect(rm.get(0, 1)).toBeCloseTo(-1);
          expect(rm.get(1, 1)).toBeCloseTo(0);
        });
        it('360 degree rotation', () => {
          const rm = r(toRadians(360));
          expect(rm.get(0, 0)).toBeCloseTo(1);
          expect(rm.get(1, 0)).toBeCloseTo(0);
          expect(rm.get(0, 1)).toBeCloseTo(0);
          expect(rm.get(1, 1)).toBeCloseTo(1);
        });
      });
      describe('3D', () => {
        it('rotationX 90 degree rotation', () => {
          const rm = Matrix.rotationX(3)(toRadians(90));
          // expect(rm.get(0, 0)).toBeCloseTo(0);
          // expect(rm.get(1, 0)).toBeCloseTo(-1);
          // expect(rm.get(0, 1)).toBeCloseTo(1);
          // expect(rm.get(1, 1)).toBeCloseTo(0);
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

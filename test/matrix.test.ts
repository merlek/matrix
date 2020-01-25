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
        const degrees = [90, 180, 270, 360];
        const rotation3DTest = (
          test: number,
          rFunc: (angle: number) => Matrix,
          angles: number[],
          expected: number[][]
        ) => {
          it(angles[test] + ' degree rotation', () => {
            const rm = rFunc(toRadians(angles[test]));
            let index = 0;
            for (const value of rm) {
              expect(value).toBeCloseTo(expected[test][index++], precision);
            }
          });
        };
        describe('rotationX', () => {
          const r = Matrix.rotationX(3);
          const expectedValues = [
            [1, 0, 0, 0, 0, -1, 0, 1, 0],
            [1, 0, 0, 0, -1, 0, 0, 0, -1],
            [1, 0, 0, 0, 0, 1, 0, -1, 0],
            [1, 0, 0, 0, 1, 0, 0, 0, 1]
          ];
          for (let test = 0; test < degrees.length; test++) {
            rotation3DTest(test, r, degrees, expectedValues);
          }
        });
        describe('rotationY', () => {
          const r = Matrix.rotationY(3);
          const expectedValues = [
            [0, 0, 1, 0, 1, 0, -1, 0, 0],
            [-1, 0, 0, 0, 1, 0, 0, 0, -1],
            [0, 0, -1, 0, 1, 0, 1, 0, 0],
            [1, 0, 0, 0, 1, 0, 0, 0, 1]
          ];
          for (let test = 0; test < degrees.length; test++) {
            rotation3DTest(test, r, degrees, expectedValues);
          }
        });
        describe('rotationZ', () => {
          const r = Matrix.rotationZ(3);
          const expectedValues = [
            [0, -1, 0, 1, 0, 0, 0, 0, 1],
            [-1, 0, 0, 0, -1, 0, 0, 0, 1],
            [0, 1, 0, -1, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 1]
          ];
          for (let test = 0; test < degrees.length; test++) {
            rotation3DTest(test, r, degrees, expectedValues);
          }
        });
      });
    });
  });

  it('matrix values are immutable', () => {
    m.toArray()[0][0] = 5;
    expect(m.get(0, 0)).toBe(0);
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
    const expected = [];
    for (let i = 0; i < m.rows; i++) {
      for (let j = 0; j < m.cols; j++) {
        expected.push(m.get(i, j));
      }
    }
    let index = 0;
    for (const value of m) {
      expect(value).toBe(expected[index++]);
    }
    expect(index).toBe(m.rows * m.cols);
  });

  describe('add', () => {
    it('two matrices', () => {
      const expected = [0, 2, 4, 6, 8, 10];
      let index = 0;
      for (const value of m.add(m)) {
        expect(value).toBe(expected[index++]);
      }
    });
    it('multiple matrices', () => {
      const expected = [0, 3, 6, 9, 12, 15];
      let index = 0;
      for (const value of m.add(m, m)) {
        expect(value).toBe(expected[index++]);
      }
    });
  });

  describe('subtract', () => {
    it('two matrices', () => {
      const expected = [0, 0, 0, 0, 0, 0];
      let index = 0;
      for (const value of m.subtract(m)) {
        expect(value).toBe(expected[index++]);
      }
    });
    it('multiple matrices', () => {
      const expected = [0, -1, -2, -3, -4, -5];
      let index = 0;
      for (const value of m.subtract(m, m)) {
        expect(value).toBe(expected[index++]);
      }
    });
  });

  describe('scalarMult', () => {
    it('one value', () => {
      const expected = [0, 10, 20, 30, 40, 50];
      let index = 0;
      for (const value of m.scalarMult(10)) {
        expect(value).toBe(expected[index++]);
      }
    });
    it('multiple values', () => {
      const expected = [0, 10, 20, 30, 40, 50];
      let index = 0;
      for (const value of m.scalarMult(2, 5)) {
        expect(value).toBe(expected[index++]);
      }
    });
  });

  it('transpose', () => {
    const expected = [0, 3, 1, 4, 2, 5];
    let index = 0;
    for (const value of m.transpose()) {
      expect(value).toBe(expected[index++]);
    }
  });

  describe('mult', () => {
    it('error', () => {
      expect(() => m.mult(m)).toThrow(
        new Error('Matrices are not the right dimensions: a:2x3 b:2x3')
      );
    });
    it('one value', () => {
      const expected = [5, 14, 14, 50];
      let index = 0;
      for (const value of m.mult(m.transpose())) {
        expect(value).toBe(expected[index++]);
      }
    });
    it('multiple values', () => {
      const expected = [42, 150, 61, 214, 80, 278];
      let index = 0;
      for (const value of m.transpose().mult(m, m.transpose())) {
        expect(value).toBe(expected[index++]);
      }
    });
  });

  it('copy creates an identical copy of a matrix', () => {
    const copy = m.copy();
    expect(copy).not.toBe(m);
    expect(copy).toEqual(m);
  });
});

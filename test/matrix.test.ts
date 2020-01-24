import { random, randomInt, range } from 'utility-functions';
import { toRadians, Vector } from '../src/vector';
import { Matrix } from '../src/matrix';

const precision = 9;

describe('Matrix', () => {
  const dim = 3;
  const max = 100;
  const min = -100;

  const m = Matrix.create([
    [randomInt(min)(max), randomInt(min)(max), randomInt(min)(max)],
    [randomInt(min)(max), randomInt(min)(max), randomInt(min)(max)],
    [randomInt(min)(max), randomInt(min)(max), randomInt(min)(max)]
  ]);

  const ident = Matrix.identity(3);
  const m2 = m.copy();

  afterAll(function() {
    expect(m).toEqual(m2);
  });

  describe('static', () => {
    it('identity creates a new identity Matrix', () => {
      for (let i = 0; i < ident.m; i++) {
        for (let j = 0; j < ident.n; j++) {
          if (i === j) {
            expect(ident.get(i, j)).toBe(1);
          } else {
            expect(ident.get(i, j)).toBe(0);
          }
        }
      }
    });
    describe('rotation (2D)', () => {
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
    });
  });

  it('matrix.get(i) is a Vector column', () => {
    console.log(ident);
    expect(ident.get(0) instanceof Vector).toBeTrue();
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

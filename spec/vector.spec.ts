import { repeat } from 'common';
import { Vector } from '../src/vector';

describe('Vector', () => {
  const v = Vector.create();

  //   it('static create creates a new vector filled with a value', () => {
  //     const value = 5;
  //     expect(v.x).toBe(0);
  //     expect(v.y).toBe(0);
  //     expect(v.z).toBeUndefined();
  //   });

  it('Vector.fill creates a new vector filled with a value', () => {
    const value = 5;
    expect(typeof repeat).toBe('function');
    expect(Vector.fill(value, 2)).toEqual(Vector.create(value, value));
  });

  //   it('normalize returns a vector with magnitude of 1', () => {
  //     expect(
  //       Vector.create(1, 1)
  //         .normalize()
  //         .getMag()
  //     ).toBe(1);
  //   });

  // static fill(c: number, length: number): Vector ;
  // static random2D(maxforce?: number): Vector ;
  // public normalize(): Vector ;
  // public rotate(angle: number): Vector ;
  // public setMag(magnitude?: number): Vector ;
  // public getMag(): number ;
  // public limit(max: number): Vector ;
  // public dist(other: Vector): number ;
  // public add(...vs: Vector[]): Vector ;
  // public subtract(...vs: Vector[]): Vector ;
  // public mult(n: number): Vector ;
  // public heading(): number ;
  // public copy(): Vector ;
  // public dotProduct(b: Vector): number ;
});

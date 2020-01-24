import { random, randomInt, range } from 'utility-functions';
import { Vector, toRadians } from '../src/vector';

const precision = 9;

describe('Vector', () => {
  const x = randomInt(-100)(100);
  const y = randomInt(-100)(100);

  const v = Vector.create(x, y);
  const unit = Vector.create(1, 0);
  const zero = Vector.create(0, 0);

  afterAll(function() {
    const t = Vector.create(x, y);
    expect(v.magnitude).toBe(t.magnitude);
    expect(v).toEqual(t);

    const u = Vector.create(1, 0);
    expect(unit.magnitude).toBe(u.magnitude);
    expect(unit).toEqual(u);
  });

  it('Vector.create creates a new vector filled with a value', () => {
    expect(v.x).toBe(x);
    expect(v.y).toBe(y);
    expect(v.length).toBe(2);
    expect(v.z).toBeUndefined();
  });

  it('Vector.fill creates a new vector filled with a value', () => {
    expect(Vector.fill(x, 2)).toEqual(Vector.create(x, x));
  });

  it('Vector.random2D creates a new random 2D vector', () => {
    const rnd = Vector.random2D();
    expect(rnd.magnitude).toBeGreaterThan(0);
    expect(rnd.length).toBe(2);
    expect(rnd.z).toBeUndefined();
  });

  it('length returns length of a vector', () => {
    const len = randomInt(0)(100);
    const array = range(0)(len);
    expect(Vector.create(...array).length).toBe(len);
  });

  it('magnitude returns magnitude of a vector', () => {
    const mag = random(0)(100);
    const magInt = randomInt(0)(100);
    expect(Vector.create(0, magInt).magnitude).toBe(magInt);
    expect(Vector.create(0, mag).magnitude).toBeCloseTo(mag, precision);
  });

  it('setMag returns a vector with a certain magnitude', () => {
    const mag = random(0)(100);
    const magInt = randomInt(0)(100);
    expect(unit.setMag(magInt).magnitude).toBe(magInt);
    expect(unit.setMag(mag).magnitude).toBeCloseTo(mag, precision);
  });

  it('normalize returns a vector with magnitude of 1', () => {
    expect(v.normalize().magnitude).toBeCloseTo(1, precision);
  });

  it('toRadians converts a value in degrees to radians', () => {
    expect(toRadians(180)).toBeCloseTo(Math.PI, precision);
  });

  it('rotate rotates a vector 0 degrees about the XY axis', () => {
    const vec = unit.rotate(toRadians(0));
    expect(vec.x).toBeCloseTo(1, precision);
    expect(vec.y).toBeCloseTo(0, precision);
    expect(vec.magnitude).toBeCloseTo(1, precision);
  });
  it('rotate rotates a vector 90 degrees about the XY axis', () => {
    const vec = unit.rotate(toRadians(90));
    expect(vec.x).toBeCloseTo(0, precision);
    expect(vec.y).toBeCloseTo(1, precision);
    expect(vec.magnitude).toBeCloseTo(1, precision);
  });
  it('rotate rotates a vector 180 degrees about the XY axis', () => {
    const vec = unit.rotate(toRadians(180));
    expect(vec.x).toBeCloseTo(-1, precision);
    expect(vec.y).toBeCloseTo(0, precision);
    expect(vec.magnitude).toBeCloseTo(1, precision);
  });
  it('rotate rotates a vector 270 degrees about the XY axis', () => {
    const vec = unit.rotate(toRadians(270));
    expect(vec.x).toBeCloseTo(0, precision);
    expect(vec.y).toBeCloseTo(-1, precision);
    expect(vec.magnitude).toBeCloseTo(1, precision);
  });
  it('rotate rotates a vector 360 degrees about the XY axis', () => {
    const vec = unit.rotate(toRadians(360));
    expect(vec.x).toBeCloseTo(1, precision);
    expect(vec.y).toBeCloseTo(0, precision);
    expect(vec.magnitude).toBeCloseTo(1, precision);
  });

  it('limit creates a vector with magnitude less than or equal to limit', () => {
    const mag = 5;
    expect(Vector.create(mag, mag).limit(mag).magnitude).toBeCloseTo(
      5,
      precision
    );
    expect(v.limit(Infinity).magnitude).toBe(v.magnitude);
  });

  it('dist calculates the distance between two vectors', () => {
    const dist = randomInt(1)(100);
    const b = Vector.create(0, dist);
    expect(zero.dist(b)).toBe(dist);
    expect(v.dist(v)).toBe(0);
  });

  it('add calculates the sum of two vectors', () => {
    const dist = randomInt(1)(100);
    const b = Vector.create(0, dist);
    expect(zero.add(b)).toEqual(b);
    expect(v.add(v).magnitude).toBeCloseTo(v.magnitude * 2, precision);
  });
  it('add calculates the sum of multiple vectors', () => {
    const v5 = v.add(v, v, v, v);
    expect(v5.magnitude).toBeCloseTo(v.magnitude * 5, precision);
    expect(v5.x).toBeCloseTo(v.x * 5, precision);
    expect(v5.y).toBeCloseTo(v.y * 5, precision);
  });

  it('subtract calculates the difference of two vectors', () => {
    const dist = randomInt(1)(100);
    const b = Vector.create(0, dist);
    expect(b.subtract(zero)).toEqual(b);
    expect(v.subtract(v).magnitude).toBeCloseTo(0, precision);
  });
  it('subtract calculates the difference of multiple vectors', () => {
    const v5 = v.subtract(v, v, v, v);
    expect(v5.magnitude).toBeCloseTo(v.magnitude * 3, precision);
    expect(v5.x).toBeCloseTo(v.x * -3, precision);
    expect(v5.y).toBeCloseTo(v.y * -3, precision);
  });

  it('mult calculates the scalar multiplication of a vector', () => {
    const dist = randomInt(2)(100);
    const vec = v.mult(dist, dist);
    expect(vec.x).toBeCloseTo(v.x * dist * dist, precision);
    expect(vec.y).toBeCloseTo(v.y * dist * dist, precision);
    expect(vec.magnitude).toBeCloseTo(v.magnitude * dist * dist, precision);
  });

  it('heading calculates the angle of a vector from the x axis', () => {
    expect(v.heading).toBeLessThanOrEqual(Math.PI);
    expect(v.heading).toBeGreaterThan(-Math.PI);
  });
  it('heading calculates the angle of a vector (1,0) from the x axis', () => {
    expect(Vector.create(1, 0).heading).toBeCloseTo(0, precision);
  });
  it('heading calculates the angle of a vector (0,1) from the x axis', () => {
    expect(Vector.create(0, 1).heading).toBeCloseTo(toRadians(90), precision);
  });
  it('heading calculates the angle of a vector (-1,0) from the x axis', () => {
    expect(Vector.create(-1, 0).heading).toBeCloseTo(
      toRadians(180),
      precision
    );
  });
  it('heading calculates the angle of a vector (0,-1) from the x axis', () => {
    expect(Vector.create(0, -1).heading).toBeCloseTo(
      toRadians(-90),
      precision
    );
  });

  it('copy creates an identical copy of a vector', () => {
    const copy = v.copy();
    expect(copy.magnitude).toBe(v.magnitude);
    expect(copy).toEqual(v);
  });

  it('dotProduct calculates the dot product of two vectors', () => {
    const a = Vector.create(1, 3, -5);
    const b = Vector.create(4, -2, -1);
    expect(a.dotProduct(b)).toBeCloseTo(3);
  });
});

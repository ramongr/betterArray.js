import BetterArray from '../../src/betterArray';

describe('initial constructor', () => {
  const ba = new BetterArray()

  test('array length must be zero', () => {
    expect(ba.length).toBe(0)
  })

  test('should have a reducer method', () => {
    expect(typeof(ba._reducer)).toBe('function')
  });
})
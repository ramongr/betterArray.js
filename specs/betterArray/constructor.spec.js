import BetterArray from '../../src/betterArray';

describe('initial constructor', () => {
  const ba = new BetterArray()

  test('should be equal to an empty array', () => {
    expect(ba.toString()).toEqual([].toString())
  })

  test('array length must be zero', () => {
    expect(ba.length).toBe(0)
  })
})
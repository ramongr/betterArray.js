import BetterArray from '../../src/betterArray';

describe('initial constructor', () => {
  const betterArray = new BetterArray()

  test('should be equal to an empty array', () => {
    expect(betterArray.toString()).toEqual([].toString())
  })

  test('array length must be zero', () => {
    expect(betterArray.length).toBe(0)
  })
})
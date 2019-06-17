import BetterArray from '../../src/betterArray'

describe('subarray operations', () => {
  let betterArray;

  beforeEach(() => {
    betterArray = new BetterArray()
  })

  describe('from empty arrays', () => {
    test('exists with empty array should return false', () => {
      expect(betterArray.exists([1, 2])).toBeFalsy()
    })

    test('except with empty array should return an empty array', () => {
      expect(betterArray.except([])).toEqual([])
    })
  })
})